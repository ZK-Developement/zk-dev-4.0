import { useState, useEffect } from "react"
import arrow from "../../assets/images/arrow.svg"

const modules = import.meta.glob(
    "../../assets/images/portfolio/*.{png,jpg,jpeg,webp,svg}",
    { eager: true, query: "?url", import: "default" }
)

const projects = Object.entries(modules).map(([path, src]) => {
    const domain = path.split("/").pop().replace(/\.[^.]+$/, "")
    return { src, domain, url: `https://${domain}` }
})

let slides = projects
while (slides.length && slides.length < 5) slides = [...slides, ...projects]

const SIZES = {
    desktop: { width: 358, height: 269, step: 373 },
    mobile: { width: 240, height: 180, step: 250 },
}

function useIsMobile(breakpoint = 400) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    )
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= breakpoint)
        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [breakpoint])
    return isMobile
}

function Portfolio (){
    const [index, setIndex] = useState(0)
    const isMobile = useIsMobile()
    const { width: SLIDE_W, height: SLIDE_H, step: STEP } = isMobile ? SIZES.mobile : SIZES.desktop
    const total = slides.length || 1

    const next = () => setIndex((i) => (i + 1) % total)
    const prev = () => setIndex((i) => (i - 1 + total) % total)

    const FADE = `linear-gradient(to right, transparent 0%, black calc(50% - ${SLIDE_W / 2}px), black calc(50% + ${SLIDE_W / 2}px), transparent 100%)`

    return(
        <section className=" w-[1280px] h-[401px] flex justify-center items-center mt-[60px]
                            max-[1280px]:w-[1050px]
                            max-[800px]:w-[740px]
                            max-[400px]:w-full max-[400px]:h-auto max-[400px]:px-[20px]" id="portfolio">
            <div className="adaptive-bg bg-[radial-gradient(circle,_#393939,_#252525)] w-[1220px] h-[401px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex pl-[30px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px]
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-full max-[400px]:h-[410px] max-[400px]:pl-0 max-[400px]:py-[20px]
                                           max-[400px]:flex-col max-[400px]:items-center max-[400px]:gap-[16px] "
            >
                <div className=" flex flex-col h-[301px] w-[400px] justify-center mt-[80px] pl-[30px]
                                max-[400px]:h-auto max-[400px]:w-[280px] max-[400px]:mt-0 max-[400px]:pl-0
                                max-[400px]:items-center max-[400px]:text-left">
                    <p className="text-white font-semibold text-[24px] w-[272px] mb-[20px] max-[400px]:text-[16px] max-[400px]:w-full max-[400px]:mb-[8px]">Sprawdź nasze poprzednie projekty</p>
                    <p className="text-white text-[16px] opacity-50 leading-4.5 w-[316px] mb-[60px] font-light max-[400px]:text-[13px] max-[400px]:leading-4 max-[400px]:w-full max-[400px]:mb-[20px]">Posiadamy Bazę zadowolonych klientów z naszych usług od stron internetowych do designu stron po projekty graficzne.</p>
                    <a href="#kontakt" ><button className="bg-white hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 w-[221px] h-[43px] text-black font-semibold text-[16px] rounded-[15px] cursor-pointer max-[450px]:hidden">
                        Kontakt</button></a>
                </div>
                <div className="min-[500px]:translate-y-[50px] min-[500px]:translate-x-[-40px] relative flex-1 min-w-0 w-full max-[400px]:flex-none max-[400px]:w-[280px] max-[400px]:translate-y-[-30px]" style={{ height: SLIDE_H + 32 }}>
                    <div className="absolute inset-0 overflow-hidden" style={{ maskImage: FADE, WebkitMaskImage: FADE }}>
                    {slides.map((p, i) => {
                        let offset = (((i - index) % total) + total) % total
                        if (offset > total / 2) offset -= total

                        const isCenter = offset === 0
                        const isVisible = Math.abs(offset) <= 1

                        return(
                            <a key={`${p.domain}-${i}`} href={p.url} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (!isCenter) {
                                        e.preventDefault()
                                        if (isVisible) setIndex(i)
                                    }
                                }}
                                className="absolute left-1/2 top-1/2 rounded-[30px] overflow-hidden bg-[#424242]"
                                style={{
                                    width: SLIDE_W,
                                    height: SLIDE_H,
                                    transform: `translate(calc(-50% + ${offset * STEP}px), -50%)`,
                                    opacity: isVisible ? 1 : 0,
                                    pointerEvents: isVisible ? "auto" : "none",
                                    transition: "all 500ms ease",
                                }}
                            >
                                <img src={p.src} alt={p.domain} draggable={false} className="w-full h-full object-cover" />
                            </a>
                        );
                    })}
                    </div>
                    <button onClick={prev} aria-label="Poprzedni projekt" className="h-[35px] w-[35px] absolute left-[10px] top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D910] rounded-[10px] cursor-pointer rotate-[180deg] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                                                                     max-[400px]:translate-x-[-30px]">
                        <img src={arrow} alt="arrow" />
                    </button>
                    <button onClick={next} aria-label="Następny projekt" className="h-[35px] w-[35px] absolute right-[10px] top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D910] rounded-[10px] cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                                                                     max-[400px]:translate-x-[30px]">
                        <img src={arrow} alt="arrow" />
                    </button>
                    <div className="flex justify-center mt-[220px] min-[450px]:hidden ">
                        <a href="#kontakt" ><button className="bg-white hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 w-[221px] h-[43px] text-black font-semibold text-[16px] rounded-[15px] cursor-pointer ">
                        Kontakt</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;