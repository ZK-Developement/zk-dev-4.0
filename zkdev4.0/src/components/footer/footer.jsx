function Footer (){
    return(
        <footer className="w-full flex my-[29px]">
            <div className="bg-white rounded-[20px] w-full h-[310px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] ">
                <div className="p-[30px] flex gap-[60px] justify-center">
                    <div className="w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black">
                        <p className="text-[10px] text-gray-500">KONTAKT</p>
                        <div className="text-[14px] ">
                            <p className="h-[18px]">tel:  48+ 791 203 396</p>
                            <p className="h-[18px]">e-mail: contactus.zk.business@gmail.com</p>
                        </div>
                        <div className="text-[14px] text-gray-600">
                            <p className="h-[18px]">Poniedziałek—piątek: 10:00-20:00</p>
                            <p className="h-[18px]">Sobota: 14:00-20:00</p>
                        </div>
                    </div>
                    <div className="w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-gray-800">
                        <p className="text-[10px] text-gray-500">HASŁA STRONY</p>
                        <div className="text-[14px] font-semibold opacity-75">
                            <p className="h-[18px]">Strony Internetowe Dla firm</p>
                            <p className="h-[18px]">Strony Internetowe Polska</p>
                            <p className="h-[18px]">Design Strony </p>
                            <p className="h-[18px]">Tworzenie stron internetowych</p>
                            <p className="h-[18px]">Profesjonalne strony WWW</p>
                            <p className="h-[18px]">Nowoczesny design</p>
                            <p className="h-[18px]">Optymalizacja SEO</p>
                            <p className="h-[18px]">Modernizacja istniejących stron</p>
                            <p className="h-[18px]">Projektowanie stron mobilnych</p>
                            <p className="h-[18px]">Strony Internetowe Dolny Śląsk</p>
                        </div>
                    </div>
                    <div className="w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black">
                        <p className="text-[10px] text-gray-500">SOCIAL MEDIA</p>
                        <div className="text-[14px] mb-[10px]">
                            <p className="h-[18px]">e-mail: contactus.zk.business@gmail.com</p>
                            <p className="h-[18px]">instagram: zk.development</p>
                            <p className="h-[18px]">tiktok: in-progress...</p>

                        </div>
                        <p className="text-[10px] text-gray-500">POLITYKA PRYWATNOŚCI</p>
                        <div className="text-[14px] text-gray-600">
                            <p className="h-[18px] underline cursor-pointer">Polityka Prywatności - w krótce dostępne</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-[53px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] p-[30px] flex absolute justify-center items-center">
                    <p className="text-gray-800 opacity-50 text-[13px]">© 2026 Zk Development — Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;