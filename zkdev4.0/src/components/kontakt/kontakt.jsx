import { useState } from 'react';

function Kontakt () {
    const [result, setResult] = useState("");

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
        <section className=" w-[1280px] h-[675px] flex justify-center items-center mt-[30px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[850px]" id="kontakt">
            <div className="adaptive-bg w-[1220px] h-[675px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex items-center pl-[45px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[345px] max-[400px]:pt-[10px] max-[400px]:h-[850px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[0px]
                                           max-[400px]:flex-col ">
                <div className="h-[675px] w-[400px] flex flex-col gap-[30px] text-black py-[20px] font-medium max-[400px]:gap-[10px] max-[400px]:w-[320px] max-[400px]:h-[250px] ">
                    <p className="text-[24px] font-semibold max-[400px]:text-[15px]">Skontaktuj się z nami</p>
                    <p className="leading-5 w-[328px] max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">Napisz do nas, opisz swój pomysł lub czego potrzebujesz, a postaramy się odpowiedzieć tak szybko, jak będzie to możliwe.</p>
                    <p className="text-gray-600 w-[280px] max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">Napisz do nas lub zadzwoń na 
                       +48 (w krótce dostępne)</p>
                    <div className="text-gray-500 max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">
                        <p>Poniedziałek—piątek: 10:00-20:00</p>
                        <p>Sobota & Niedziela: 14:00-20:00</p>
                    </div>
                    <div className=" mt-[230px] flex items-center max-[400px]:mt-0 max-[400px]:text-[12px] max-[400px]:leading-3.5 max-[400px]:w-[250px]">
                        <span>{result}</span>
                    </div>
                </div>
                <div className="flex flex-col bg-[radial-gradient(circle,_#393939,_#252525)] h-[633px] w-[717px] rounded-[20px] justify-center items-center text-gray-100 max-[400px]:w-[320px] max-[400px]:h-[533px] ">
                    <form  onSubmit={onSubmit} className='flex flex-col justify-center items-center'>
                        <input className="bg-[#383838] mb-[30px] rounded-[15px] w-[629px] h-[40px] border-2 border-[#656565] pl-[20px] max-[400px]:w-[290px] max-[400px]:mb-[20px]" 
                        type="text" name="name" id="name" required placeholder="Imię i Nazwisko"/>
                        <input className="bg-[#383838] mb-[30px] rounded-[15px] w-[629px] h-[40px] border-2 border-[#656565] pl-[20px] max-[400px]:w-[290px] max-[400px]:mb-[20px]" 
                        type="email" name="email" id="email" required placeholder="przykladowy.mail@poczta.pl"/>
                        <textarea className="bg-[#383838] mb-[10px] rounded-[15px] w-[629px] h-[305px] border-2 border-[#656565] p-[20px] resize-none max-[400px]:w-[290px] max-[400px]:mb-[10px]" 
                        name="message" id="textarea" placeholder="Opisz Swój projekt, lub napisz ważne informacje odnośnie projektu lub usług w tym miejscu."></textarea>
                        <div className="flex justify-center mt-[25px] max-[400px]:w-[320px] max-[400px]:mt-[10px]">
                            <button type="submit" className="bg-white hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 text-black font-medium text-[20px] h-[41px] w-[211px] rounded-[10px] cursor-pointer">Wyślij</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </section>
    );
}
export default Kontakt;