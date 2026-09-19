import { useState } from "react"
import arrow from "../../assets/images/arrow.svg"

// Vite wczytuje wszystkie pliki z folderu (sciezka musi byc zapisana na sztywno)
const modules = import.meta.glob(
    "../../assets/images/portfolio/*.{png,jpg,jpeg,webp,svg}",
    { eager: true, query: "?url", import: "default" }
)

// nazwe bierzemy z klucza (oryginalna sciezka), bo po buildzie plik dostaje hash
const projects = Object.entries(modules).map(([path, src]) => {
    const domain = path.split("/").pop().replace(/\.[^.]+$/, "")
    return { src, domain, url: `https://${domain}` }
})

// zeby petla wygladala dobrze, potrzeba min. 5 slajdow - jak masz mniej, powielamy
let slides = projects
while (slides.length && slides.length < 5) slides = [...slides, ...projects]

const STEP = 373 // odleglosc miedzy srodkami slajdow (358 szerokosc + 15 odstepu)

// maska: przy krawedziach slajdy plynnie znikaja do opacity 0, srodkowy (358px) jest w calosci widoczny
const FADE = "linear-gradient(to right, transparent 0%, black calc(50% - 179px), black calc(50% + 179px), transparent 100%)"

function Portfolio (){
    const [index, setIndex] = useState(0)
    const total = slides.length || 1

    const next = () => setIndex((i) => (i + 1) % total)
    const prev = () => setIndex((i) => (i - 1 + total) % total)

    return(
        <section className=" w-[1280px] h-[401px] flex justify-center items-center mt-[60px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px]" id="portfolio">
            <div className="adaptive-bg bg-[radial-gradient(circle,_#393939,_#252525)] w-[1220px] h-[401px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex pl-[30px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
            >
                <div className=" flex flex-col h-[301px] w-[400px] justify-center mt-[80px] pl-[30px]">
                    <p className="text-white font-semibold text-[24px] w-[272px] mb-[20px]">Sprawdź nasze poprzednie projekty !</p>
                    <p className="text-white text-[16px] opacity-50 leading-4.5 w-[316px] mb-[60px] font-light ">Posiadamy Bazę zadowolonych klientów z naszych usług od stron internetowych do designu stron po projekty graficzne.</p>
                    <a href="#kontakt" ><button className="bg-white w-[221px] h-[43px] text-black font-semibold text-[16px] rounded-[15px] cursor-pointer ">
                        Kontakt</button></a>
                </div>
                <div className="relative h-[401px] flex-1 min-w-0">
                    <div className="absolute inset-0 overflow-hidden" style={{ maskImage: FADE, WebkitMaskImage: FADE }}>
                    {slides.map((p, i) => {
                        // pozycja slajdu wzgledem aktualnego (zapetlona): ..., -1, 0, 1, ...
                        let offset = (((i - index) % total) + total) % total
                        if (offset > total / 2) offset -= total

                        const isCenter = offset === 0
                        const isVisible = Math.abs(offset) <= 1

                        return(
                            <a key={`${p.domain}-${i}`} href={p.url} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => {
                                    // klik w boczny slajd = przesun go na srodek, klik w srodkowy = otworz strone
                                    if (!isCenter) {
                                        e.preventDefault()
                                        if (isVisible) setIndex(i)
                                    }
                                }}
                                className="absolute left-1/2 top-1/2 w-[358px] h-[269px] rounded-[30px] overflow-hidden bg-[#424242]"
                                style={{
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
                    <button onClick={prev} aria-label="Poprzedni projekt" className="h-[35px] w-[35px] absolute left-[10px] top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D910] rounded-[10px] cursor-pointer rotate-[180deg] shadow-[0_4px_30px_rgba(0,0,0,0.10)]">
                        <img src={arrow} alt="arrow" />
                    </button>
                    <button onClick={next} aria-label="Następny projekt" className="h-[35px] w-[35px] absolute right-[10px] top-1/2 -translate-y-1/2 z-10 bg-[#D9D9D910] rounded-[10px] cursor-pointer shadow-[0_4px_30px_rgba(0,0,0,0.10)]">
                        <img src={arrow} alt="arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;