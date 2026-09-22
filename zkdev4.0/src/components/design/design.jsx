import laptop from "../../assets/images/laptop.png"

function Design (){
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
                        <p className="text-[24px] font-semibold mb-[15px]">Tworzymy projekty stron internetowych</p>
                        <p className="text-white opacity-50 mb-[15px] text-[16px] leading-5">Zanim rozpoczniemy programowanie, przygotowujemy wizualny projekt Twojej strony. Pokazujemy ci, jak będzie wyglądać gotowa realizacja, a następnie wspólnie ustalamy zmiany przed rozpoczęciem kodowania.</p>
                    </div>
                    <div className="bg-[radial-gradient(circle,_#878686,_#656565)]  px-[11px] rounded-[15px] w-[345px] mb-[109px]">
                        <p className=" ml-[4px] text-[12px] w-[328px] bg-[linear-gradient(to_right,_#D5D5D5,_#FFFFFF)] bg-clip-text text-transparent font-semibold">Projekt ➜ Konsultacja ➜ Poprawki ➜ Programowanie</p>
                    </div>
                    <a href="#portfolio"><div className="bg-[radial-gradient(circle,_#D1D1D1,_#FFFFFF)] hover:bg-[radial-gradient(circle,_#CAC8C8,_#D1D1D1)] transition-all duration-500 cursor-pointer text-black text-[16px] font-semibold w-[221px] h-[43px] flex justify-center items-center rounded-[15px] ">
                        <button className="cursor-pointer">Zobacz Projekty</button>
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
export default Design;