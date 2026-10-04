import { useState, useEffect, useRef } from 'react';


function Kontakt () {
    const [result, setResult] = useState("");

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

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Wysyłanie...");
        const formData = new FormData(event.target);
        formData.append("access_key", "b01fcb68-e093-43b6-950d-e292eb2932e6");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
        setResult("Wiadomość Wysłana.");
        event.target.reset();
        } else {
        setResult("Błąd wysyłania");
        }
    };
    return(
        <section ref={sectionRef} className=" w-[1280px] h-[675px] flex justify-center items-center mt-[30px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[850px]" id="kontakt">
            <div className="adaptive-bg w-[1220px] h-[675px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex items-center pl-[45px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[345px] max-[400px]:pt-[10px] max-[400px]:h-[850px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[0px]
                                           max-[400px]:flex-col ">
                <div className={`h-[675px] w-[400px] flex flex-col gap-[30px] text-black py-[20px] font-medium max-[400px]:gap-[10px] max-[400px]:w-[320px] max-[400px]:h-[250px] ${fromLeft}`} style={delay(100)}>
                    <p className="text-[24px] font-semibold max-[400px]:text-[15px]">Skontaktuj się z nami</p>
                    <p className="leading-5 w-[328px] max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px] opacity-70">Napisz do nas, opisz swój pomysł lub czego potrzebujesz, a postaramy się odpowiedzieć tak szybko, jak będzie to możliwe.</p>
                    <p className="text-black opacity-65 w-[280px] max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">Napisz do nas lub zadzwoń na 
                       +48 (wkrótce dostępne)</p>
                    <div className="text-black opacity-50 max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">
                        <p>Poniedziałek—piątek: 10:00-20:00</p>
                        <p>Sobota: 14:00-20:00</p>
                    </div>
                    <div className=" mt-[230px] flex items-center max-[400px]:mt-0 max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">
                        <span>{result}</span>
                    </div>
                </div>
                <div className={`flex flex-col bg-[radial-gradient(circle,_#393939,_#252525)] h-[633px] w-[717px] rounded-[20px] justify-center items-center text-gray-100 max-[400px]:w-[320px] max-[400px]:h-[533px] ${fromBottom}`} style={delay(300)}>
                    <form  onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                        <input className={`bg-[#383838] mb-[30px] rounded-[15px] w-[629px] h-[40px] border-2 border-[#656565] pl-[20px] max-[400px]:w-[290px] max-[400px]:mb-[20px] max-[400px]:text-[14px] ${fromBottom}`} style={delay(500)}
                        type="text" name="name" id="name" required placeholder="Imię i Nazwisko"/>
                        <input className={`bg-[#383838] mb-[30px] rounded-[15px] w-[629px] h-[40px] border-2 border-[#656565] pl-[20px] max-[400px]:w-[290px] max-[400px]:mb-[20px] max-[400px]:text-[14px] ${fromBottom}`} style={delay(650)}
                        type="email" name="email" id="email" required placeholder="przykladowy.mail@poczta.pl"/>
                        <textarea className={`bg-[#383838] mb-[10px] rounded-[15px] w-[629px] h-[305px] border-2 border-[#656565] p-[20px] resize-none max-[400px]:w-[290px] max-[400px]:mb-[10px] max-[400px]:text-[14px] max-[400px]:pt-[10px] ${fromBottom}`} style={delay(800)}
                        name="message" id="textarea" placeholder="Opisz Swój projekt, lub napisz ważne informacje odnośnie projektu lub usług w tym miejscu."></textarea>
                        <div className={`flex justify-center mt-[25px] max-[400px]:w-[320px] max-[400px]:mt-[10px] ${fromBottom}`} style={delay(950)}>
                            <button type="submit" className="bg-white hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 text-black font-medium text-[20px] h-[41px] w-[211px] rounded-[10px] cursor-pointer max-[400px]:text-[12px]">Wyślij</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </section>
    );
}
export default Kontakt;