import laptop from "../../assets/images/laptop2.png"
import react from "../../assets/images/react.png"
import tailwind from "../../assets/images/tailwind.png"
import html from "../../assets/images/html.png"
import figma from "../../assets/images/figma.png"
import vite from "../../assets/images/vite.png"
import js from "../../assets/images/js.png"
import github from "../../assets/images/github.png"

function Strona () {
    return(
        <section className=" w-[1280px] h-[401px] flex justify-center items-center mt-[30px]
                                    max-[1280px]:w-[1050px] 
                                    max-[400px]:h-[550px]">
                    <div className="adaptive-bg bg-[radial-gradient(circle,_#393939,_#252525)] w-[1220px] h-[401px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                                   flex pl-[30px] bg-[length:100%_100%] bg-center
                                                   max-[1280px]:w-[1050px] 
                                                   max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                                   max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
                    >
                        <div className="flex flex-col text-white w-[500px] pt-[35px]">
                            <div className="mb-[10px]">
                                <p className="text-[24px] font-semibold mb-[15px]"> Profesjonalna strona internetowa</p>
                                <p className="text-white opacity-50 mb-[15px] text-[16px] leading-5">Używamy nowoczesnych technologii, aby tworzyć szybkie, funkcjonalne i dopracowane strony internetowe, które zapewniają wysoką jakość działania na każdym urządzeniu.</p>
                            </div>
                            <div className=" lqglass flex px-[17px] py-[11px] rounded-[20px] w-[490px] h-[52px] mb-[96px] gap-[20px]">
                                <div className="lqglass flex justify-center items-center h-[30px] w-[30px] rounded-[10px] cursor-pointer">
                                    <img src={react} alt="reactlogo" className="h-[26px] w-[30px] object-cover scale-60"/>
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[66px] rounded-[10px] cursor-pointer">
                                    <img src={tailwind} alt="reactlogo" className="h-[30px] object-cover scale-110" />
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[30px] rounded-[10px] cursor-pointer">
                                    <img src={html} alt="reactlogo" className="h-[30px] object-cover scale-60"/>
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[55px] rounded-[10px] cursor-pointer">
                                    <img src={figma} alt="reactlogo" className="h-[30px] object-cover scale-75"/>
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[37px] rounded-[10px] cursor-pointer">
                                    <img src={vite} alt="reactlogo" className="h-[30px] object-cover scale-60"/>
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[30px] rounded-[10px] cursor-pointer">
                                    <img src={js} alt="reactlogo" className="h-[30px] object-cover scale-60"/>
                                </div>
                                <div className="lqglass flex justify-center items-center h-[30px] w-[88px] rounded-[10px] cursor-pointer">
                                    <img src={github} alt="reactlogo" className="h-[30px] object-cover scale-100 "/>
                                </div>
                            </div>
                            <a href="#oferta"><div className="bg-[radial-gradient(circle,_#D1D1D1,_#FFFFFF)] hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 cursor-pointer text-black text-[16px] font-semibold w-[221px] h-[43px] flex justify-center items-center rounded-[15px] ">
                                <button className="cursor-pointer">Sprawdź Ofertę</button>
                            </div></a>
                        </div>
                        <div className=" flex flex-col w-[690px] float-right items-center">
                            <a href="#kontakt">
                            <div className="bg-[radial-gradient(circle,_#605E5E,_#FFFFFF)] flex w-[609px] h-[278px] rounded-3xl float-right mt-[83px] justify-center">
                                <img src={laptop} alt="laptop" className="scale-120 translate-y-[-27px] hover:scale-125 hover:translate-y-[-34px] transition-[1s] curosr-pointer" />
                            </div>
                            </a>
        
                        </div>
                    </div>
        
                </section>
    );
}
export default Strona;