import { useEffect, useRef, useState } from "react";
import bgimage from "../../assets/images/homepage.jpg"

const funkcjeMobile = [
    ["Design", true, true, true],
    ["Landing page", true, true, true],
    ["Sekcje strony", true, true, true],
    ["Formularz kontaktowy", true, true, true],
    ["Mapa Google", false, true, true],
    ["FAQ", false, true, true],
    ["Animacje na stronie", true, true, true],
    ["Responsywność", true, true, true],
    ["Optymalizacja", true, true, true],
    ["SEO", true, true, true],
    ["Publikacja strony", true, true, true],
    ["Runda poprawek", true, true, true],
    ["Dodatkowe podstrony", false, true, true],
    ["Funkcje niestandardowe", false, false, true],
]

const hiddenState = {
    bottom: "opacity-0 translate-y-[40px]",
    left: "opacity-0 translate-x-[-40px]",
};
const anim = (show, dir = "bottom") =>
    `transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0 translate-y-0" : hiddenState[dir]}`;
const delay = (show, ms) => ({ transitionDelay: show ? `${ms}ms` : "0ms" });


function useReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let t = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShow(true);
                observer.disconnect();
                t = setTimeout(() => window.dispatchEvent(new Event("resize")), 1800);
            },
            { threshold }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            clearTimeout(t);
        };
    }, []);

    return [ref, show];
}

function Pakiety (){
    const [topRef, showTop] = useReveal(0.1);
    const [tableRef, showTable] = useReveal(0.2);
    const [mTableRef, showMTable] = useReveal(0.15);

    return(
        <section ref={topRef} className=" w-[1280px] h-[1590px] flex justify-center items-center mt-[60px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:w-full max-[400px]:h-auto max-[400px]:mt-[30px]" id="pakiety">
            <div className="adaptive-bg bg-white w-[1220px] h-[1650px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex flex-col pl-[30px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[30px] max-[400px]:pb-[30px] max-[400px]:h-auto max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px] max-[400px]:pr-[20px]" 
                                           >
                <div className="hidden max-[400px]:flex flex-col w-full">
                    <p className={`text-black text-[26px] font-semibold mb-[8px] leading-7 ${anim(showTop, "left")}`} style={delay(showTop, 100)}>Wybierz pakiet:</p>
                    <p className={`text-black text-[14px] font-regular leading-4 opacity-70 mb-[20px] ${anim(showTop, "left")}`} style={delay(showTop, 200)}>Wybierz pakiet idealnie dobrany do twoich potrzeb lub wyceń swój projekt.</p>

                    <div className={`lqglass flex flex-col rounded-[20px] p-[12px] gap-[12px] ${anim(showTop)}`} style={delay(showTop, 250)}>
                        <div className={`bg-white flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[16px] p-[16px] ${anim(showTop)}`} style={delay(showTop, 400)}>
                            <p className="text-black text-[22px] font-semibold mb-[4px] mt-[40px]">One Page</p>
                            <p className="text-black text-[22px] font-regular mb-[8px]">500zł</p>
                            <p className="text-black text-[13px] font-regular leading-4 mb-[14px] opacity-70">Prosta i estetyczna strona dla małych firm i usługodawców. Najważniejsze informacje, oferta i kontakt.</p>
                            <a href="#kontakt" className="flex justify-center"><button className="bg-[radial-gradient(circle,_#393939,_#252525)] text-white font-semibold text-[15px] h-[42px] w-full rounded-[10px] cursor-pointer">Kontakt</button></a>
                        </div>
                        <div className={`bg-white flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[16px] p-[16px] border-black border-4 ${anim(showTop)}`} style={delay(showTop, 550)}>
                            <p className="self-start bg-black px-[12px] py-[1px] text-white text-[12px] font-bold rounded-[20px] mb-[8px] absolute translate-x-[40px] translate-y-[-30px]">Najczęściej wybierane</p>
                            <p className="text-black text-[22px] font-semibold mb-[4px] mt-[40px]">Strona Firmowa</p>
                            <p className="text-black text-[22px] font-regular mb-[8px]">1000zł</p>
                            <p className="text-black text-[13px] font-regular leading-4 mb-[14px] opacity-70">Kompletna strona firmowa z osobnymi podstronami: Strona główna, O firmie, Oferta, Galeria i Kontakt.</p>
                            <a href="#kontakt" className="flex justify-center"><button className="bg-[radial-gradient(circle,_#393939,_#252525)] text-white font-semibold text-[15px] h-[42px] w-full rounded-[10px] cursor-pointer">Kontakt</button></a>
                        </div>
                        <div className={`bg-white flex flex-col shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[16px] p-[16px] bg-center bg-[length:100%_100%] ${anim(showTop)}`}
                        style={{ backgroundImage: `url(${bgimage})`, ...delay(showTop, 700) }}>
                            <p className="text-black text-[22px] font-semibold mb-[4px] mt-[40px]">Wycena Indywidualna</p>
                            <p className="text-black text-[22px] font-regular mb-[8px]">od 1500zł +</p>
                            <p className="text-black text-[13px] font-regular leading-4 mb-[14px] opacity-70">Projekt dopasowany do potrzeb firmy: niestandardowe funkcje, dodatkowe podstrony i integracje. Cena zależy od zakresu.</p>
                            <a href="#kontakt" className="flex justify-center"><button className="bg-[radial-gradient(circle,_#393939,_#252525)] text-white font-semibold text-[15px] h-[42px] w-full rounded-[10px] cursor-pointer">Kontakt</button></a>
                        </div>
                    </div>

                    <p className={`text-black text-[18px] font-semibold mt-[24px] mb-[10px] ${anim(showMTable)}`} style={delay(showMTable, 0)}>Porównanie funkcji:</p>
                    <div ref={mTableRef} className={`bg-[radial-gradient(circle,_#EDEDED,_#FFFFFF)] rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] px-[12px] py-[12px] ${anim(showMTable)}`} style={delay(showMTable, 100)}>
                        <div className="grid grid-cols-[1fr_46px_46px_46px] items-end pb-[8px] border-b border-gray-200 text-black text-[11px] font-medium text-center">
                            <p className="text-left text-[13px] font-semibold">Funkcja</p>
                            <p>OneP.</p>
                            <p>Firmowa</p>
                            <p>Indyw.</p>
                        </div>
                        {funkcjeMobile.map(([nazwa, a, b, c]) => (
                            <div key={nazwa} className="grid grid-cols-[1fr_46px_46px_46px] items-center py-[5px] border-b border-gray-100 text-[12px] font-medium text-black">
                                <p className="opacity-90 leading-3.5">{nazwa}</p>
                                {[a, b, c].map((v, i) => (
                                    <p key={i} className={`text-center text-[18px] font-normal leading-none ${v ? "text-black" : "text-black opacity-60"}`}>{v ? "+" : "−"}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <p className={`text-[12px] text-black opacity-60 leading-4 mt-[10px] ${anim(showMTable)}`} style={delay(showMTable, 250)}>Dokładniejsze informacje o pakietach (np. zakres SEO czy design) są dostępne w wersji na komputer.</p>

                    <p className={`text-black text-[18px] font-semibold mt-[24px] mb-[6px] leading-5 ${anim(showMTable)}`} style={delay(showMTable, 350)}>Nie wiesz, który pakiet wybrać?</p>
                    <p className={`text-black text-[13px] font-regular leading-4 opacity-70 ${anim(showMTable)}`} style={delay(showMTable, 450)}>Dobierzemy rozwiązanie do Twojej firmy, budżetu i potrzeb. Każdy projekt możemy dostosować do konkretnych wymagań.</p>
                </div>

                <div className="flex max-[400px]:hidden">
                    <div className="flex flex-col h-[993px] w-[250px] mr-[30px] pt-[60px] ">
                        <div className={`mb-[630px] ${anim(showTop, "left")}`} style={delay(showTop, 100)}>
                            <p className="text-black text-[32px] font-semibold mb-[15px] leading-7">Wybierz pakiet:</p>
                            <p className="text-black text-[18px] font-regular leading-4.5 w-[230px] opacity-70">Wybierz pakiet idealnie dobrany do twoich potrzeb lub wyceń swój projekt.</p>
                        </div>
                        <div className={anim(showTop, "left")} style={delay(showTop, 300)}>
                            <p className="text-black text-[32px] font-semibold mb-[15px] leading-7">Nie wiesz, który pakiet wybrać?</p>
                            <p className="text-black text-[18px] font-regular leading-4.5 w-[230px] opacity-70">Dobierzemy rozwiązanie do Twojej firmy, budżetu i potrzeb. Każdy projekt możemy dostosować do konkretnych wymagań.</p>
                        </div>
                    </div>
                    <div className="float-right flex flex-col h-[993px] w-[890px] justify-center items-center px-[20px] mt-[30px] ">
                        <div className={`lqglass w-[885px] h-[993px] rounded-[30px] grid grid-cols-2 justify-center items-center p-[30px] gap-[25px] ${anim(showTop)}`} style={delay(showTop, 200)}>
                            <div className={`bg-white flex flex-col w-[400px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[150px] ${anim(showTop)}`} style={delay(showTop, 400)}>
                                <p className="text-black text-[32px] font-semibold mb-[25px]">One Page</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">500zł</p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[348px] mb-[25px] opacity-70">Prosta i estetyczna strona dla małych firm i usługodawców. Zawiera najważniejsze informacje o firmie, ofertę, kontakt i podstawowe elementy potrzebne do profesjonalnej prezentacji w internecie.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                            </div>
                            <div className={`bg-white flex flex-col w-[400px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[150px]
                                            border-black border-6 flex flex-col ${anim(showTop)}`} style={delay(showTop, 550)}>
                                <div className="flex justify-center">
                                    <div className=" bg-black px-[18px] py-[3px] justify-center items-center flex text-white text-[16px] font-bold rounded-[20px] absolute translate-y-[-170px]">
                                        <p>Najczęściej wybierane</p>
                                    </div>
                                </div>
                                <p className="text-black text-[32px] font-semibold mb-[25px]">Strona Firmowa</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">1000zł</p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[348px] mb-[25px] opacity-70">Kompletna strona firmowa z osobnymi podstronami, np. Strona główna, O firmie, Oferta, Galeria i Kontakt. Sprawdza się przy większej ilości informacji i bardziej rozbudowanej prezentacji firmy.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                                

                            </div>
                            <div className={` col-span-2 bg-white flex flex-col w-[829px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[190px] bg-center bg-[length:100%_100%] ${anim(showTop)}`}
                            style={{ backgroundImage: `url(${bgimage})`, ...delay(showTop, 700) }}>
                                <p className="text-black text-[32px] font-semibold mb-[25px]">Wycena Indywidualna</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">1500zł + </p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[700px] mb-[25px] opacity-70">Projekt dopasowany do konkretnych potrzeb firmy. Obejmuje niestandardowe funkcje, dodatkowe podstrony, integracje i rozwiązania, których nie ma w standardowych pakietach. Cena zależy od zakresu projektu.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div ref={tableRef} className={`bg-[radial-gradient(circle,_#EDEDED,_#FFFFFF)] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] w-[1166px] h-[543px] mt-[50px] max-[400px]:hidden ${anim(showTable)}`} style={delay(showTable, 0)}>
                    <div className="grid grid-cols-4  w-full h-full py-[20px] px-[30px] gap-[10px] mt-[10px]">
                        <div className="flex flex-col text-[16px]  font-medium text-black">
                            <p className="text-[30px] font-bold mb-[30px] text-black ">Funkcja:</p>
                            <p className="mb-[2px]">Cena</p>
                            <p className="mb-[2px]">Design</p>
                            <p className="mb-[2px]">Landing page</p>
                            <p className="mb-[2px]">Sekcje strony</p>
                            <p className="mb-[2px]">Sekcja/formularz Kontaktowy</p>
                            <p className="mb-[2px]">Mapa Google</p>
                            <p className="mb-[2px]">FAQ</p>
                            <p className="mb-[2px]">Animacje na stronie</p>
                            <p className="mb-[2px]">Responsywność strony</p>
                            <p className="mb-[2px]">Optymalizacja</p>
                            <p className="mb-[2px]">SEO</p>
                            <p className="mb-[2px]">Publikacja Strony</p>
                            <p className="mb-[2px]">Runda poprawek</p>
                            <p className="mb-[2px]">Dodatkowe podstrony</p>
                            <p className="mb-[2px]">Funkcje niestandardowe</p>
                        </div>
                        <div className="flex flex-col text-[16px]  font-medium text-black opacity-70">
                            <p className="text-[24px] font-bold mb-[30px] text-black">OnePage</p>
                            
                            <p className="mb-[2px]">500zł</p>
                            <p className="mb-[2px]">Podstawowy</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">Proste</p>
                            <p className="mb-[2px]">Podstawowa</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Proste</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">-</p>
                        </div>
                        <div className="flex flex-col text-[16px]  font-medium text-black opacity-70">
                            <p className="text-[24px] font-bold mb-[30px] text-black">Strona Firmowa</p>
                            <p className="mb-[2px]">1000zł</p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualna</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Rozbudowane SEO</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                        </div>
                        <div className="flex flex-col text-[16px] font-medium text-black opacity-70">
                            <p className="text-[24px] font-bold mb-[30px] text-black">Wycena Indywidualna</p>
                            <p className="mb-[2px]">1500zł + </p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualne</p>
                            <p className="mb-[2px]">Indywidalna</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Rozbudowane SEO</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Ustalane</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Ustalane</p>
                        </div>
                    </div>
                    <hr className="h-[488px] w-[1px] border-1 border-gray-200 absolute translate-x-[830px] translate-y-[-520px]"/>
                    <hr className="h-[488px] w-[1px] border-1 border-gray-200 absolute translate-x-[550px] translate-y-[-520px]"/>
                </div>

            </div>
        </section>
    );
}
export default Pakiety;