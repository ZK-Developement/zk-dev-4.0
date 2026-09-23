import vaxercode from "../../assets/images/vaxercode.svg"
import dartrans from "../../assets/images/dartrans.svg"
import phone from "../../assets/images/phone.png"
import laptop from "../../assets/images/laptop.png"


function Oferta (){
    return(
        <section className=" w-[1280px] h-[600px] flex justify-center items-center mt-[30px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[850px]" id="oferta">
            <div className="adaptive-bg bg-white w-[1220px] h-[600px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex  pl-[25px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[20px] max-[400px]:h-[850px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
                                           >
                <div className="flex flex-col h-[600px] w-[231px] pt-[25px] ">
                    <p className="text-black text-[18px] font-semibold mb-[5px] w-[231px] whitespace-nowrap max-[400px]:hidden">Poprzedni klienci:</p>
                    <div className="lqglass flex flex-col h-[428px] rounded-[20px] mt-[20px]  justify-center items-center gap-[10px] max-[400px]:hidden">
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
                <div className="flex flex-col h-auto  w-[899px] mr-[25px] justify-center items-center ml-auto max-[400px]:justify-normal">
                    <p className="text-black text-[18px] font-semibold w-[231px] whitespace-nowrap mr-auto mb-[20px] ">Nasze Usługi:</p>
                    <div className="flex w-[899px] h-[234px] gap-[34px] mb-[34px] max-[400px]:flex-col max-[400px]:gap-[14px] max-[400px]:mb-[14px]">
                        <div className=" flex flex-col gap-[34px]  max-[400px]:gap-[14px]">
                            <div className="w-[245px] h-[102px] rounded-[20px] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.10)] pt-[14px] pl-[13px] max-[400px]:w-[300px]">
                                <p className="text-[16px] font-bold text-black mb-[2px] whitespace-nowrap">Marketing dla Firm</p>
                                <p className="text-[13px] font-normal text-black opacity-70 w-[202px] leading-3.5">Materiały marketingowe dla firm, które zwiększają ich widoczność w sieci.</p>
                            </div>
                            <div className="w-[245px] h-[102px] rounded-[20px] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.10)] pt-[14px] pl-[13px] max-[400px]:w-[300px] ">
                                <p className="text-[16px] font-bold text-black mb-[2px] whitespace-nowrap">Optymalizacja Google SEO</p>
                                <p className="text-[13px] font-normal text-black opacity-70 w-[190px] leading-3.5">Zwiększamy widoczność strony w Google.</p>
                            </div>
                        </div>
                        <div className="bg-[radial-gradient(circle,_#4C4C4C,_#3B3B3B)] flex flex-col w-[620px] h-[234px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] pt-[24px] pl-[31px]
                                        max-[400px]:w-[300px]  max-[400px]:h-[400px]  max-[400px]:pt-[14px]  max-[400px]:pl-[13px]">
                            <p className="text-[16px] font-bold text-white mb-[6px]">Profesjonalna strona internetowa</p>
                            <p className="text-[13px] font-normal text-white opacity-70 w-[487px] leading-4 max-[400px]:w-[290px] max-[400px]:mb-[14px]">Tworzymy profesjonalne strony internetowe dopasowane do potrzeb Twojej firmy. Wykorzystujemy nowoczesne technologie, dbając o wygląd, szybkość działania, responsywność oraz wygodę użytkowników.</p>
                        </div>
                    </div>
                    <div className="flex w-[899px] h-[234px] gap-[34px] max-[400px]:flex-col max-[400px]:gap-[14px] max-[400px]:mt-[149px] ">
                        <div className="bg-[radial-gradient(circle,_#4C4C4C,_#3B3B3B)] flex flex-col rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] w-[245px] h-[234px] pt-[18px] pl-[18px] pb-[14px]
                                        max-[400px]:w-[300px]">
                            <p className="text-[16px] font-bold text-white mb-[2px] w-[194px]">Projektowanie <br/> Mobile Design</p>
                            <p className="text-[13px] font-normal text-white opacity-70 w-[202px] leading-3.5">Projektujemy mobile style strony aby była kompatybilna z każdym urządzeniem.</p>
                            <div className="flex items-center bg-white rounded-[20px] w-[210px] h-[86px] mt-auto pl-[11px] max-[400px]:hidden">
                                <p className="text-black leading-3 opacity-80 text-[12px] w-[130px] translate-y-[-9px] font-medium max-[400px]:hidden">Strony kompatybilne pod urządzenia mobilne.</p>
                                <img src={phone} alt="laptop" className="h-[100px] w-[138px] translate-y-[-24px] translate-x-[75px] ml-auto object-cover scale-135 absolute max-[400px]:hidden"/>
                            </div>
                        </div>
                        <div className="rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] w-[245px] h-[234px] bg-white pt-[18px] pl-[18px] max-[400px]:w-[300px] ">
                            <p className="text-[16px] font-bold text-black mb-[2px] whitespace-nowrap">Marketing dla Firm</p>
                            <p className="text-[13px] font-normal text-black opacity-70 w-[202px] leading-3.5 max-[400px]:mb-[15px]">Materiały marketingowe dla firm, które zwiększają ich widoczność w sieci.</p>
                        </div>
                        <div className="bg-[radial-gradient(circle,_#4C4C4C,_#3B3B3B)] flex flex-col rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] w-[341px] h-[234px] pt-[18px] pl-[18px] pb-[14px]
                                        max-[400px]:w-[300px]">
                            <p className="text-[16px] font-bold text-white mb-[2px] whitespace-nowrap">Design Strony</p>
                            <p className="text-[13px] font-normal text-white opacity-70 w-[202px] leading-3.5">Projektujemy nowoczesne oraz przejrzyste interfejsy strony.</p>
                            <div className="flex items-center bg-white rounded-[20px] w-[305px] h-[86px] mt-auto pl-[11px] max-[400px]:hidden">
                                <p className="text-black leading-3 opacity-80 text-[12px] w-[117px] translate-y-[-9px] font-medium max-[400px]:hidden">Projekty stworzone specjalnie pod <br/> twój Biznes.</p>
                                <img src={laptop} alt="laptop" className="h-[100px] w-[172px] translate-y-[-9px] translate-x-[110px] ml-auto absolute max-[400px]:hidden"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Oferta;