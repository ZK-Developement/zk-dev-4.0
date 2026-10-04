import { useEffect, useRef, useState } from "react";
import laptop from "../../assets/images/laptop.png"

function Design (){
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        let t = null;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                setShow(true);
                observer.disconnect();
                t = setTimeout(() => window.dispatchEvent(new Event("resize")), 1600);
            },
            { threshold: 0.25 }
        );
        observer.observe(section);

        return () => {
            observer.disconnect();
            clearTimeout(t);
        };
    }, []);

    const fromLeft = `transition-all duration-700 ease-out ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-40px]"}`;
    const fromBottom = `transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"}`;
    const delay = (ms) => ({ transitionDelay: show ? `${ms}ms` : "0ms" });

    return(
        <section ref={sectionRef} className=" w-[1280px] h-[401px] flex justify-center items-center mt-[30px]
                                    max-[1280px]:w-[1050px] 
                                    max-[400px]:h-[470px] ">
            <div className="adaptive-bg bg-[radial-gradient(circle,_#393939,_#252525)] w-[1220px] h-[401px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                        flex pl-[30px] bg-[length:100%_100%] bg-center
                                        max-[1280px]:w-[1050px] 
                                        max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                        max-[400px]:flex-col max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[470px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]
                ">
                <div className="flex flex-col text-white w-[500px] pt-[35px] max-[400px]:h-[240px] max-[400px]:translate-y-[-100px]">
                    <div className={`mb-[10px] ${fromLeft}`} style={delay(100)}>
                        <p className="text-[24px] font-semibold mb-[15px] max-[400px]:text-[20px] max-[400px]:w-[240px]">Tworzymy projekty stron internetowych</p>
                        <p className="text-white opacity-50 mb-[15px] text-[16px] leading-5 max-[400px]:text-[14px] max-[400px]:leading-4 max-[400px]:w-[290px]">Zanim rozpoczniemy programowanie, przygotowujemy wizualny projekt Twojej strony. Pokazujemy ci, jak będzie wyglądać gotowa realizacja, a następnie wspólnie ustalamy zmiany przed rozpoczęciem kodowania.</p>
                    </div>
                    <div className={`bg-[radial-gradient(circle,_#878686,_#656565)]  px-[11px] rounded-[15px] w-[345px] mb-[109px] max-[400px]:hidden ${fromLeft}`} style={delay(250)}>
                        <p className=" ml-[4px] text-[12px] w-[328px] bg-[linear-gradient(to_right,_#D5D5D5,_#FFFFFF)] bg-clip-text text-transparent font-semibold">Projekt ➜ Konsultacja ➜ Poprawki ➜ Programowanie</p>
                    </div>
                    <a href="#portfolio" className={`block w-[221px] ${fromLeft}`} style={delay(400)}><div className="bg-[radial-gradient(circle,_#D1D1D1,_#FFFFFF)] hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 cursor-pointer text-black text-[16px] font-semibold w-[221px] h-[43px] flex justify-center items-center rounded-[15px] ">
                        <button className="cursor-pointer">Zobacz Projekty</button>
                    </div></a>
                </div>
                <div className=" flex flex-col w-[690px] float-right items-center max-[400px]:h-[300px] max-[400px]:translate-y-[-130px] max-[400px]:w-[300px] max-[400px]:ml-0 max-[400px]:mt-[20px]">
                    <a href="#kontakt">
                    <div className={`bg-[radial-gradient(circle,_#605E5E,_#FFFFFF)] flex w-[609px] h-[278px] rounded-3xl float-right mt-[83px] justify-center max-[400px]:w-[290px] max-[400px]:bg-[radial-gradient(circle,_#D2D2D2,_#FFFFFF)] max-[400px]:h-[130px] ${fromBottom}`} style={delay(300)}>
                        <img src={laptop} alt="laptop" className="scale-120 translate-y-[-27px] hover:scale-125 hover:translate-y-[-34px] transition-[1s] curosr-pointer max-[400px]:w-[200px] max-[400px]:h-[115px] max-[400px]:object-cover max-[400px]:translate-y-[-0px] hover:max-[400px]:translate-y-[-3px]" />
                    </div>
                    </a>

                </div>
            </div>

        </section>
    );
}
export default Design;