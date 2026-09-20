import { useEffect, useRef } from "react";
import html2canvas from "html2canvas-pro";
import logoBlack from "../../assets/images/zk-logo-nobg.png"; // czarne logo z przezroczystością
import logoWhite from "../../assets/images/zk-logo-nobg-white.png"; // białe logo z przezroczystością

const SCALE = 0.5;
const THRESHOLD = 140;   // jasność 0-255: poniżej = tło ciemne -> biały tekst / białe logo
const DARK_TEXT = "rgb(0, 0, 0)";
const LIGHT_TEXT = "rgb(255, 255, 255)";

function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        let canvas = null;
        let ctx = null;
        let ticking = false;
        let capturing = false;
        let recaptureTimer = null;
        let cancelled = false;

        // Ustawia kolor tekstów i wariant logo na podstawie gotowego zrzutu (lekkie)
        const applyColors = () => {
            if (!canvas || !ctx) return;

            header.querySelectorAll(".tekst-zmienny, .logo-zmienne").forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return; // ukryte elementy

                const x = Math.floor((rect.left + window.scrollX) * SCALE);
                const y = Math.floor((rect.top + window.scrollY) * SCALE);
                const w = Math.max(1, Math.floor(rect.width * SCALE));
                const h = Math.max(1, Math.floor(rect.height * SCALE));

                const sx = Math.max(0, Math.min(x, canvas.width - 1));
                const sy = Math.max(0, Math.min(y, canvas.height - 1));
                const sw = Math.min(w, canvas.width - sx);
                const sh = Math.min(h, canvas.height - sy);
                if (sw <= 0 || sh <= 0) return;

                const pixels = ctx.getImageData(sx, sy, sw, sh).data;

                let sum = 0;
                let count = 0;
                for (let i = 0; i < pixels.length; i += 4) {
                    if (pixels[i + 3] === 0) continue;
                    sum += (pixels[i] * 299 + pixels[i + 1] * 587 + pixels[i + 2] * 114) / 1000;
                    count++;
                }
                if (count === 0) return;

                const brightness = sum / count;
                const isDark = brightness < THRESHOLD;

                if (el.classList.contains("logo-zmienne")) {
                    el.dataset.theme = isDark ? "dark" : "light";
                } else {
                    el.style.color = isDark ? LIGHT_TEXT : DARK_TEXT;
                }
            });
        };

        // Robi zrzut strony (ciężkie – wywoływane rzadko)
        const capture = async () => {
            if (capturing) return;
            capturing = true;
            try {
                const result = await html2canvas(document.body, {
                    scale: SCALE,
                    useCORS: true,
                    backgroundColor: "#ffffff", // zamiast przezroczystości
                    logging: false,
                });
                if (cancelled) return;
                canvas = result;
                ctx = canvas.getContext("2d", { willReadFrequently: true });
                applyColors();
            } catch (error) {
                console.error("Błąd wykrywania koloru:", error);
            } finally {
                capturing = false;
            }
        };

        // Debounce – nie rób zrzutu przy każdej drobnej zmianie
        const scheduleCapture = () => {
            clearTimeout(recaptureTimer);
            recaptureTimer = setTimeout(capture, 300);
        };

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                applyColors();
                ticking = false;
            });
        };

        const handleResize = () => {
            scheduleCapture();
            applyColors();
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", scheduleCapture);

        // Odśwież zrzut, gdy zmieni się wysokość/zawartość strony
        const observer = new ResizeObserver(scheduleCapture);
        observer.observe(document.body);

        // Pierwszy zrzut po załadowaniu fontów
        if (document.fonts?.ready) {
            document.fonts.ready.then(scheduleCapture);
        } else {
            scheduleCapture();
        }

        return () => {
            cancelled = true;
            clearTimeout(recaptureTimer);
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", scheduleCapture);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            data-html2canvas-ignore="true"
            className="w-full h-[60px] flex items-center justify-center my-[29px] fixed z-[99]"
        >
            <div className="lqglass rounded-[50px] flex w-fit max-w-[95%] h-[60px] items-center my-[29px] mx-[20px] min-[1280px]:w-[1220px]
                            max-[810px]:h-[40px] max-[810px]:px-[10px] max-[810px]:justify-between max-[810px]:w-full"
                            style={{ backdropFilter: 'blur(8px) saturate(1.8) brightness(1.15) contrast(1.05)',
                                    WebkitBackdropFilter: 'blur(8px) saturate(1.8) brightness(1.15) contrast(1.05)'}}>
                <a href="#onas"><div className="flex ml-[10px] w-[200px] justify-center items-center
                                max-[800px]:w-[100px]">
                    <div className="logo-zmienne group relative mx-[10px] h-[38px] w-[38px] shrink-0
                                    max-[810px]:h-[28px] max-[810px]:w-[28px]">
                        <img src={logoBlack} alt="logo" className="absolute inset-0 h-full w-full transition-opacity duration-200 opacity-100 group-data-[theme=dark]:opacity-0"/>
                        <img src={logoWhite} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full transition-opacity duration-200 opacity-0 group-data-[theme=dark]:opacity-100"/>
                    </div>
                    <p className="tekst-zmienny text-black transition-colors duration-200 mr-[30px] text-[16px] whitespace-nowrap
                                  max-[810px]:text-[13px] max-[810px]:mr-[10px]">
                        Development</p>
                </div></a>
                <nav className="flex h-[60px] items-center min-[1280px]:ml-[470px] min-[800px]:ml-[280px]">
                    <ul className="flex items-center justify-center gap-[20px] text-[16px] font-normal whitespace-nowrap
                                   max-[810px]:hidden min-[1280px]:flex">
                        <li><a href="#onas" className="tekst-zmienny text-black transition-colors duration-200">O nas</a></li>
                        <li><a href="#oferta" className="tekst-zmienny text-black transition-colors duration-200">Oferta</a></li>
                        <li><a href="#pakiety" className="tekst-zmienny text-black transition-colors duration-200">Pakiety</a></li>
                        <li><a href="#portfolio" className="tekst-zmienny text-black transition-colors duration-200">Portfolio</a></li>
                        <li><a href="#kontakt" className="tekst-zmienny text-black transition-colors duration-200">Kontakt</a></li>
                    </ul>
                </nav>
                <a href="#kontakt">
                    <div className="lqglass h-[30px] rounded-[50px] flex items-center justify-center ml-[30px] shrink-0
                                    min-[1280px]:ml-[30px] max-[810px]:h-[20px] min-[800px]:mr-[20px]">
                        <div className="bg-green-600 rounded-[50px] h-[10px] w-[10px] mx-[10px] pulse-light"></div>
                        <p className="tekst-zmienny text-black transition-colors duration-200 text-[13px] pr-[15px] whitespace-nowrap
                                    max-[810px]:text-[10px]">
                            Dostępni do pracy</p>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default Header;