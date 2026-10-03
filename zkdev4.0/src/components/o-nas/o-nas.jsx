import logo from "../../assets/images/zk-logo-nobg-white.png"
import bgimage from "../../assets/images/homepage.jpg"
import messageicon from "../../assets/images/messageicon.svg"
import offericon from "../../assets/images/offericon.svg"
import phone from "../../assets/images/phone.png"


function Onas() {
    return (
        <section className=" w-[1280px] h-[635px] flex justify-center items-center
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px]" id="onas" >
            <div className="adaptive-bg bg-white w-[1220px] h-[635px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                               flex items-center pl-[45px] bg-[length:100%_100%] bg-center
                               max-[1280px]:w-[1050px] 
                               max-[800px]:w-[740px] max-[800px]:pl-[40px]
                               max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]
                               max-[400px]:bg-[radial-gradient(circle,_#393939,_#252525)]" 
                               >
                <div className=" flex flex-col  w-[450px] h-[675px] justify-center
                                max-[800px]:pl-[0px]">
                    <p className="bg-gradient-to-b from-[#121212] to-[#494949] text-transparent bg-clip-text font-semibold text-[60px] w-[538px] h-[155px] mb-[2px] leading-[70px] hero-font max-[400px]:leading-[40px] max-[400px]:text-[34px] max-[400px]:w-[320px] max-[400px]:h-[85px] max-[400px]:bg-gradient-to-b max-[400px]:from-[#fdfdfd] max-[400px]:to-[#b5b5b5] max-[400px]:text-transparent max-[400px]:bg-clip-text">Napiszemy twoją Stronę od podstaw.</p>
                    <p className="text-black font-medium text-[24px] w-[520px] my-[5px] bg-gradient-to-b from-[#494949] to-[#5a5a5a] text-transparent bg-clip-text max-[400px]:leading-[20px] max-[400px]:text-[17px] max-[400px]:w-[320px] max-[400px]:bg-gradient-to-b max-[400px]:from-[#b5b5b5] max-[400px]:to-[#808080] max-[400px]:text-transparent max-[400px]:bg-clip-text">Zajmujemy się tworzeniem nowoczesnych stron internetowych oraz projektami designu strony.</p> 
                    <div className="mt-[56px] flex gap-[10px] max-[400px]:justify-center max-[400px]:items-center max-[400px]:mr-[20px]
                                    max-[800px]:flex-col">
                        <button className="hover:cursor-pointer lqglass flex justify-center items-center w-[177px] rounded-[20px] py-[6px] text-[#5a5a5a] text-[16px] max-[400px]:w-[227px]">
                            <img src={messageicon} alt="message-icon" className="w-[30px] mr-[10px] exposure-100 contrast-60  max-[400px]:exposure-100 max-[400px]:contrast-0 max-[400px]:saturate-0"/>
                            <p className="bg-gradient-to-b from-[#121212] to-[#383838] text-transparent bg-clip-text max-[400px]:bg-gradient-to-b max-[400px]:from-[#eaeaea] max-[400px]:to-[#cacaca] max-[400px]:text-transparent max-[400px]:bg-clip-text">Napisz do nas</p>
                        </button>
                        <button className="hover:cursor-pointer lqglass flex justify-center items-center w-[177px] rounded-[20px] py-[6px] text-[#5a5a5a] text-[16px] max-[400px]:w-[227px]">
                            <img src={offericon} alt="message-icon" className="w-[30px] mr-[10px] exposure-100 contrast-60 max-[400px]:exposure-100 max-[400px]:contrast-0 max-[400px]:saturate-0"/>
                            <p className="bg-gradient-to-b from-[#121212] to-[#383838] text-transparent bg-clip-text max-[400px]:bg-gradient-to-b max-[400px]:from-[#eaeaea] max-[400px]:to-[#cacaca] max-[400px]:text-transparent max-[400px]:bg-clip-text">Zobacz Oferty</p>
                        </button>
                    </div>
                </div>
                <div className=" flex flex-col  w-[520px] h-[562px] bg-[radial-gradient(circle,_#393939,_#252525)] rounded-[20px] ml-auto mr-[40px]">
                    <img src={phone} alt="phone"  className="adaptive-bg scale-125 translate-x-[5px] translate-y-[39px]
                        max-[1280px]:scale-140 max-[1280px]:translate-y-[75px]
                        max-[800px]:scale-190  max-[800px]:translate-y-[196px] max-[800px]:translate-x-[-50px] 
                        max-[400px]:hidden" />
                </div>
                <div className="flex absolute h-[68px] justify-center items-center text-[20px] w-[1155px] translate-y-[-215px] translate-x-[290px] font-me
                                max-[1280px]:w-[1050px]
                                max-[800px]:translate-x-[-200px] max-[800px]:translate-y-[-260px]
                                max-[400px]:translate-x-[-380px] max-[400px]:text-[20px] ">
                    <img src={logo} alt="logo" className="w-[68px] h-[68px] mr-[10px]
                                max-[400px]:w-[49px] max-[400px]:h-[49px]" />
                    <p className="h-[79px] flex justify-center items-center text-white
                                max-[400px]:h-[49px] ">Development</p>
                </div>
            </div>
        </section>
    );
}

export default Onas;