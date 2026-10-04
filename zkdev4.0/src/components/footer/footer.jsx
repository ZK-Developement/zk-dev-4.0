import { useEffect, useRef, useState } from "react";

function Footer ({onOpenPolityka}){
    const footerRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        let t = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShow(true);
                observer.disconnect(); 
                t = setTimeout(() => window.dispatchEvent(new Event("resize")), 1500);
            },
            { threshold: 0.15 }
        );
        observer.observe(footer);

        return () => {
            observer.disconnect();
            clearTimeout(t);
        };
    }, []);

    const fromBottom = `transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}`;
    const fade = `transition-opacity duration-700 ease-out ${show ? "opacity-100" : "opacity-0"}`;
    const delay = (ms) => ({ transitionDelay: show ? `${ms}ms` : "0ms" });

    return(
        <footer ref={footerRef} className="w-full flex my-[29px]">
            <div className="bg-white rounded-[20px] w-full h-[310px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] max-[400px]:h-[700px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="p-[30px] flex gap-[60px] justify-center max-[400px]:flex-col max-[400px]:h-[700px] max-[400px]:p-0 max-[400px]:justify-center max-[400px]:items-center max-[400px]:gap-[5px]">
                    <div className={`w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black max-[400px]:h-[160px] ${fromBottom}`} style={delay(100)}>
                        <p className="text-[10px] text-black opacity-60">KONTAKT</p>
                        <div className="text-[14px] ">
                            <a href="tel:48+791203396"><p className="h-[18px]">tel: +48 (wkrótce dostępne)</p></a>
                            <a href="mailto:contactus.zk.business@gmail.com"><p className="h-[18px]">e-mail: contactus.zk.business@gmail.com</p></a>
                        </div>
                        <div className="text-[14px] text-black opacity-60">
                            <p className="h-[18px]">Poniedziałek—piątek: 10:00-20:00</p>
                            <p className="h-[18px]">Sobota: 14:00-20:00</p>
                        </div>
                    </div>
                    <div className={`w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black ${fromBottom}`} style={delay(250)}>
                        <p className="text-[10px] text-black opacity-60">NASZE SPECJALIZACJE</p>
                        <div className="text-[14px] font-semibold opacity-65">
                            <p className="h-[18px]">Strony Internetowe Dla firm</p>
                            <p className="h-[18px]">Strony Internetowe Polska</p>
                            <p className="h-[18px]">Design Strony </p>
                            <p className="h-[18px]">Tworzenie stron internetowych</p>
                            <p className="h-[18px]">Profesjonalne strony WWW</p>
                            <p className="h-[18px]">Nowoczesny design</p>
                            <p className="h-[18px]">Optymalizacja SEO</p>
                            <p className="h-[18px]">Modernizacja istniejących stron</p>
                            <p className="h-[18px]">Projektowanie stron mobilnych</p>
                        </div>
                    </div>
                    <div className={`w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black ${fromBottom}`} style={delay(400)}>
                        <p className="text-[10px] text-black opacity-60">SOCIAL MEDIA</p>
                        <div className="text-[14px] mb-[10px]">
                            <a href="https://www.instagram.com/zk.development" target="blank"><p className="h-[18px] ">instagram: zk.development</p></a>
                        </div>
                        <p className="text-[10px] text-black opacity-60">POLITYKA PRYWATNOŚCI</p>
                        <div className="text-[14px] text-black opacity-70">
                            <p onClick={onOpenPolityka} className="h-[18px] underline cursor-pointer">Polityka Prywatności</p>
                        </div>
                    </div>
                </div>
                <div className={`bg-white w-full h-[53px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] p-[30px] flex absolute justify-center items-center max-[400px]:whitespace-nowrap ${fade}`} style={delay(700)}>
                    <p className="text-gray-800 opacity-50 text-[13px]">© 2026 ZK Development — Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;