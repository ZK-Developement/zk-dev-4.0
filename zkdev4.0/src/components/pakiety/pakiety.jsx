import bgimage from "../../assets/images/homepage.jpg"

function Pakiety (){
    return(
        <section className=" w-[1280px] h-[1590px] flex justify-center items-center mt-[60px]
                            max-[1280px]:w-[1050px] 
                            max-[400px]:h-[550px] max-[400px]:mt-[30px]" id="pakiety">
            <div className="adaptive-bg bg-white w-[1220px] h-[1650px] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]
                                           flex flex-col pl-[30px] bg-[length:100%_100%] bg-center
                                           max-[1280px]:w-[1050px] 
                                           max-[800px]:w-[740px] max-[800px]:pl-[40px]
                                           max-[400px]:w-[340px] max-[400px]:pt-[100px] max-[400px]:h-[550px] max-[400px]:bg-[length:100%_100%] max-[400px]:bg-center max-[400px]:pl-[20px]" 
                                           >
                <div className="flex max-[400px]:hidden">
                    <div className="flex flex-col h-[993px] w-[250px] mr-[30px] pt-[60px] ">
                        <div className="mb-[630px]">
                            <p className="text-black text-[32px] font-semibold mb-[15px] leading-7">Wybierz pakiet:</p>
                            <p className="text-black text-[18px] font-regular leading-4.5 w-[230px]">Wybierz pakiet idealnie dobrany do twoich potrzeb lub wyceń swój projekt.</p>
                        </div>
                        <div>
                            <p className="text-black text-[32px] font-semibold mb-[15px] leading-7">Nie wiesz, który pakiet wybrać?</p>
                            <p className="text-black text-[18px] font-regular leading-4.5 w-[230px]">Dobierzemy rozwiązanie do Twojej firmy, budżetu i potrzeb. Każdy projekt możemy dostosować do konkretnych wymagań.</p>
                        </div>
                    </div>
                    <div className="float-right flex flex-col h-[993px] w-[890px] justify-center items-center px-[20px] mt-[30px] ">
                        <div className="lqglass w-[885px] h-[993px] rounded-[30px] grid grid-cols-2 justify-center items-center p-[30px] gap-[25px] ">
                            <div className="bg-white flex flex-col w-[400px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[150px]">
                                <p className="text-black text-[32px] font-semibold mb-[25px]">One Page</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">500zł</p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[348px] mb-[25px]">Prosta i estetyczna strona dla małych firm i usługodawców. Zawiera najważniejsze informacje o firmie, ofertę, kontakt i podstawowe elementy potrzebne do profesjonalnej prezentacji w internecie.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                            </div>
                            <div className="bg-white flex flex-col w-[400px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[150px]
                                            border-black border-6 flex flex-col">
                                <div className="flex justify-center">
                                    <div className=" bg-black px-[18px] py-[3px] justify-center items-center flex text-white text-[16px] font-bold rounded-[20px] absolute translate-y-[-170px]">
                                        <p>Najczęściej wybierane</p>
                                    </div>
                                </div>
                                <p className="text-black text-[32px] font-semibold mb-[25px]">Strona Firmowa</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">1000zł</p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[348px] mb-[25px]">Kompletna strona firmowa z osobnymi podstronami, np. Strona główna, O firmie, Oferta, Galeria i Kontakt. Sprawdza się przy większej ilości informacji i bardziej rozbudowanej prezentacji firmy.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                                

                            </div>
                            <div className=" col-span-2 bg-white flex flex-col w-[829px] h-[456px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] rounded-[20px] p-[30px] pt-[190px] bg-center bg-[length:100%_100%]"
                            style={{ backgroundImage: `url(${bgimage})` }}>
                                <p className="text-black text-[32px] font-semibold mb-[25px]">Wycena Indywidualna</p>
                                <p className="text-black text-[32px] font-regular mb-[25px]">1500zł</p>
                                <p className="text-black text-[15px] font-regular leading-4 w-[700px] mb-[25px]">Projekt dopasowany do konkretnych potrzeb firmy. Obejmuje niestandardowe funkcje, dodatkowe podstrony, integracje i rozwiązania, których nie ma w standardowych pakietach. Cena zależy od zakresu projektu.</p>
                                <div className="flex justify-center">
                                    <a href="#kontakt" ><button className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[16px] h-[46px] w-[220px] rounded-[10px] cursor-pointer"
                                    >Kontakt</button></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-[radial-gradient(circle,_#EDEDED,_#FFFFFF)] rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)] w-[1166px] h-[543px] mt-[50px] max-[400px]:hidden">
                    <div className="grid grid-cols-4  w-full h-full py-[20px] px-[30px] gap-[10px] mt-[10px]">
                        <div className="flex flex-col text-[16px]  font-medium text-black">
                            <p className="text-[30px] font-bold mb-[30px] text-black ">Funkcja:</p>
                            <p className="mb-[2px]">Cena</p>
                            <p className="mb-[2px]">Design</p>
                            <p className="mb-[2px]">Landing page</p>
                            <p className="mb-[2px]">Sekcje strony</p>
                            <p className="mb-[2px]">Sekcja/formularz Kontaktowy</p>
                            <p className="mb-[2px]">Mapa Google</p>
                            <p className="mb-[2px]">FAQ</p>
                            <p className="mb-[2px]">Animacje na stronie</p>
                            <p className="mb-[2px]">Responsywność strony</p>
                            <p className="mb-[2px]">Optymalizacja</p>
                            <p className="mb-[2px]">SEO</p>
                            <p className="mb-[2px]">Publikacja Strony</p>
                            <p className="mb-[2px]">Runda poprawek</p>
                            <p className="mb-[2px]">Dodatkowe podstrony</p>
                            <p className="mb-[2px]">Funkcje niestandardowe</p>
                        </div>
                        <div className="flex flex-col text-[16px]  font-medium text-gray-500">
                            <p className="text-[24px] font-bold mb-[30px] text-black">OnePage</p>
                            
                            <p className="mb-[2px]">500zł</p>
                            <p className="mb-[2px]">Podstawowy</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">Proste</p>
                            <p className="mb-[2px]">Podstawowa</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Proste</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                            <p className="mb-[2px]">-</p>
                        </div>
                        <div className="flex flex-col text-[16px]  font-medium text-gray-500">
                            <p className="text-[24px] font-bold mb-[30px] text-black">Strona Firmowa</p>
                            <p className="mb-[2px]">1000zł</p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualna</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Rozbudowane SEO</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">-</p>
                        </div>
                        <div className="flex flex-col text-[16px] font-medium text-gray-500">
                            <p className="text-[24px] font-bold mb-[30px] text-black">Wycena Indywidualna</p>
                            <p className="mb-[2px]">1500zł + </p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualny</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Indywidualne</p>
                            <p className="mb-[2px]">Indywidalna</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Rozbudowane SEO</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Ustalane</p>
                            <p className="mb-[2px]">Tak</p>
                            <p className="mb-[2px]">Ustalane</p>
                        </div>
                    </div>
                    <hr className="h-[488px] w-[1px] border-1 border-gray-200 absolute translate-x-[830px] translate-y-[-520px]"/>
                    <hr className="h-[488px] w-[1px] border-1 border-gray-200 absolute translate-x-[550px] translate-y-[-520px]"/>
                </div>

            </div>
        </section>
    );
}
export default Pakiety;