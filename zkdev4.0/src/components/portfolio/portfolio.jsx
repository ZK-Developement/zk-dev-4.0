function Portfolio (){
    return(
        <section className=" w-[1280px] h-[401px] flex justify-center items-center mt-[60px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px]">
            <div className="adaptive-bg bg-[radial-gradient(circle,_#393939,_#252525)] w-[1220px] h-[401px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex pl-[30px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
            >
                <div className=" flex flex-col h-[301px] w-[400px] justify-center mt-[80px] pl-[30px]">
                    <p className="text-white font-semibold text-[24px] w-[272px] mb-[20px]">Sprawdź nasze poprzednie projekty !</p>
                    <p className="text-white text-[16px] opacity-50 leading-4.5 w-[316px] mb-[60px] font-light ">Posiadamy Bazę zadowolonych klientów z naszych usług od stron internetowych do designu stron po projekty graficzne.</p>
                    <button className="bg-white w-[221px] h-[43px] text-black font-semibold text-[16px] rounded-[15px] cursor-pointer ">
                        Kontakt</button>
                </div>
                <div className="h-[401px] w-[790px] flex justify-center items-center gap-[15px] pr-[20px]">
                    <div className="w-[208px] h-[269px] bg-[linear-gradient(to_right,_#73737300,_#424242)] rounded-[30px]"></div>
                    <div className="w-[358px] h-[269px] bg-[linear-gradient(to_right,_#424242,_#424242)] rounded-[30px]"></div>
                    <div className="w-[208px] h-[269px] bg-[linear-gradient(to_left,_#73737300,_#424242)] rounded-[30px]"></div>
                </div>

            </div>
        </section>
    );
}
export default Portfolio;