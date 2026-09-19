import vaxercode from "../../assets/images/vaxercode.svg"
import dartrans from "../../assets/images/dartrans.svg"


function Oferta (){
    return(
        <section className=" w-[1280px] h-[675px] flex justify-center items-center mt-[30px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px]">
            <div className="adaptive-bg bg-white w-[1220px] h-[675px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex items-center pl-[45px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
                                           >
                <div className="flex flex-col h-[675px] w-[231px] mr-[100px] pt-[70px]">
                    <p className="text-black text-[32px] font-semibold mb-[15px]">Nasze Usługi:</p>
                    <p className="text-black text-[16px] font-regular ">Poprzedni klienci:</p>
                    <div className="lqglass flex flex-col h-[428px] rounded-[20px] mt-[20px]  justify-center items-center gap-[10px]">
                        <div className="flex w-[199px] h-[71px] bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] cursor-pointer justify-center">
                            <img src={vaxercode} alt="logo-firmy" className="h-[71px] scale-125"/>
                        </div>
                        <div className="flex w-[199px] h-[71px] bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] cursor-pointer justify-center">
                            <img src={dartrans} alt="logo-firmy" className="h-[71px] scale-125 saturate-0"/>
                        </div>
                        <div className="flex w-[199px] h-[71px] bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] cursor-pointer">

                        </div>
                        <div className="flex w-[199px] h-[71px] bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] cursor-pointer">

                        </div>
                        <div className="flex w-[199px] h-[71px] bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] cursor-pointer">

                        </div>
                    </div>
                </div>
                <div className="float-right grid grid-cols-3 h-[545px] w-[850px] justify-center items-center px-[20px] translate-y-[-10px]">
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Design Strony</p>
                        <p className=" text-black text-[16px] leading-4 ">Projektujemy nowoczesne oraz przejrzyste interfejsy strony.</p>
                    </div>
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Profesjonalna strona internetowa</p>
                        <p className=" text-black text-[16px] leading-4 ">Używamy najnowszych technologii, zapewniając najwyższą jakość.</p>
                    </div>
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Tworzenie Grafik dla Firm</p>
                        <p className=" text-black text-[16px] leading-4 ">Możemy stworzyć dla twojej Firmy Logo lub czego tylko będziesz potrzebować.</p>
                    </div>
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Projektowanie Mobile Design</p>
                        <p className=" text-black text-[16px] leading-4 ">Projektujemy mobile style strony aby była kopmpatybilna z każdym urządzeniem.</p>
                    </div>
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Marketing dla Firm</p>
                        <p className=" text-black text-[16px] leading-4 ">Tworzymy materiały marketingowe dopasowane do firmy, które pomagają zwiększyć jej widoczność i dotrzeć do nowych klientów.</p>
                    </div>
                    <div className="flex flex-col w-[246px] h-[246px] bg-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] p-[25px]">
                        <p className=" text-black text-[24px] font-bold my-[10px] my-[10px]">Optymalizacja Google SEO</p>
                        <p className=" text-black text-[16px] leading-4 ">Optymalizujemy strony pod kątem wyszukiwarek, aby poprawić ich widoczność w Google i ułatwić klientom znalezienie Twojej firmy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Oferta;