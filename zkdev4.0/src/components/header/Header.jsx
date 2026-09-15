import logo from "../../assets/images/zk-logo.jpg"

function Header() {
    return (
        <header className="w-full h-[60px]  items-center content-center">
            <div className="lqglass rounded-[50px] flex w-[1220px] h-[60px] items-center content-center my-[29px] px-[20px] ">
                <img src={logo} alt="logo" className="h-[38px] w-[38px] mx-[10px]"/>
                <p className=" text-black mr-[10px]">
                    Development</p>
                <div className="lqglass h-[30px] rounded-[50px] right float-right flex items-center justify-center">
                    <div className="bg-green-600 rounded-[50px] h-[10px] w-[10px] mx-[10px]"></div>
                     <p className="text-black text-[12px] w-[115px] h-[26px]">Dostępni do pracy</p>
                </div>
            </div>
        </header>
    );
}

export default Header;