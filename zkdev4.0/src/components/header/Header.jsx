import logo from "../../assets/images/zk-logo.jpg"

function Header() {
    return (
        <header className="w-full h-[60px] flex items-center justify-center my-[29px]">
            <div className="lqglass rounded-[50px] flex w-fit max-w-[95%] h-[60px] items-center my-[29px] mx-[20px]  min-[1280px]:w-[1220px]
                            max-[810px]:h-[40px] max-[810px]:px-[10px] max-[810px]:justify-between max-[810px]:w-full">
                <div className="flex ml-[10px] w-[200px] justify-center items-center
                max-[800px]:w-[100px]">
                    <img src={logo} alt="logo" className="h-[38px] w-[38px] mx-[10px]
                            max-[810px]:h-[28px] max-[810px]:w-[28px]"/>
                    <p className="text-black mr-[30px] text-[16px] whitespace-nowrap
                                max-[810px]:text-[13px] max-[810px]:mr-[10px]">
                        Development</p>
                </div>
                <nav className="flex h-[60px] items-center  min-[1280px]:ml-[470px] min-[800px]:ml-[280px]">
                    <ul className="flex items-center justify-center gap-[20px] text-black text-[16px] font-normal whitespace-nowrap max-[810px]:hidden min-[1280px]:flex">
                        <li><a href="#" className="hover:text-gray-700 transition">O nas</a></li>
                        <li><a href="#" className="hover:text-gray-700 transition">Oferta</a></li>
                        <li><a href="#" className="hover:text-gray-700 transition">Pakiety</a></li>
                        <li><a href="#" className="hover:text-gray-700 transition">Portfolio</a></li>
                        <li><a href="#" className="hover:text-gray-700 transition">Kontakt</a></li>
                    </ul>
                </nav>
                <div className="lqglass h-[30px] rounded-[50px] flex items-center justify-center ml-[30px] shrink-0  
                                min-[1280px]:ml-[30px] max-[810px]:h-[20px] min-[800px]:mr-[20px]">
                    <div className="bg-green-600 rounded-[50px] h-[10px] w-[10px] mx-[10px]"></div>
                    <p className="text-black text-[13px] pr-[15px] whitespace-nowrap
                                  max-[810px]:text-[10px]">
                        Dostępni do pracy</p>
                </div>
            </div>
        </header>
    );
}

export default Header;