import logo from "../../assets/images/zk-logo.jpg"
import bgimage from "../../assets/images/homepage.jpg"
import messageicon from "../../assets/images/messageicon.svg"
import offericon from "../../assets/images/offericon.svg"
import phone from "../../assets/images/phone.png"

function Onas() {
    return (
        <section className=" w-[1280px] h-[675px] flex justify-center items-center
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px]" >
            <div className="adaptive-bg bg-white w-[1220px] h-[675px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                               flex items-center pl-[65px] bg-[length:100%_100%] bg-center
                               max-[1280px]:w-[1050px] 
                               max-[800px]:w-[740px] max-[800px]:pl-[40px]
                               max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
                               style={{ backgroundImage: `url(${bgimage})` }}>
                <div className=" flex flex-col  w-[450px] h-[675px] justify-center pl-[40px]
                                max-[800px]:pl-[0px]">
                    <p className="text-black font-bold text-[32px] w-[332px] my-[5px] leading-8">Napiszemy twoją Stronę od podstaw.</p>
                    <p className="text-black font-normal text-[16px] w-[320px] my-[5px] leading-4">Zajmujemy się tworzeniem nowoczesnych stron internetowych oraz projektami designu strony.</p> 
                    <div className="mt-[40px] flex gap-[10px]
                                    max-[800px]:flex-col">
                        <button className="hover:cursor-pointer lqglass flex justify-center items-center w-[177px] rounded-[20px] py-[6px] text-black text-[16px]">
                            <img src={messageicon} alt="message-icon" className="w-[30px] mr-[10px]"/>
                            Zobacz Oferty
                        </button>
                        <button className="hover:cursor-pointer lqglass flex justify-center items-center w-[177px] rounded-[20px] py-[6px] text-black text-[16px]">
                            <img src={offericon} alt="message-icon" className="w-[30px] mr-[10px]"/>
                            Napisz do nas
                        </button>
                    </div>
                </div>
                <div className=" flex flex-col  w-[705px] h-[675px]">
                    <img src={phone} alt="phone"  className="adaptive-bg scale-115 translate-x-[5px]
                        max-[1280px]:scale-140 max-[1280px]:translate-y-[75px]
                        max-[800px]:scale-190  max-[800px]:translate-y-[196px] max-[800px]:translate-x-[-50px] 
                        max-[400px]:hidden" />
                </div>
                <div className="flex absolute h-[79px] justify-center text-black text-[32px] w-[1155px] translate-y-[-240px] translate-x-[-40px]
                                max-[1280px]:w-[1050px]
                                max-[800px]:translate-x-[-200px] max-[800px]:translate-y-[-260px]
                                max-[400px]:translate-x-[-370px] max-[400px]:text-[20px] ">
                    <img src={logo} alt="logo" className="w-[79px] h-[79px] mr-[10px]
                                max-[400px]:w-[49px] max-[400px]:h-[49px]" />
                    <p className="h-[79px] flex justify-center items-center
                                max-[400px]:h-[49px] ">Development</p>
                </div>
            </div>

        </section>
    );
}

export default Onas;