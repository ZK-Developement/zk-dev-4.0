function Footer (){
    return(
        <footer className="w-full flex my-[29px]">
            <div className="bg-white rounded-[20px] w-full h-[310px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] max-[400px]:h-[700px]">
                <div className="p-[30px] flex gap-[60px] justify-center max-[400px]:flex-col max-[400px]:h-[700px] max-[400px]:p-0 max-[400px]:justify-center max-[400px]:items-center max-[400px]:gap-[5px]">
                    <div className="w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black max-[400px]:h-[160px]">
                        <p className="text-[10px] text-black opacity-60">KONTAKT</p>
                        <div className="text-[14px] ">
                            <a href="tel:48+791203396"><p className="h-[18px]">tel: +48 (w krótce dostępne)</p></a>
                            <a href="mailto:contactus.zk.business@gmail.com"><p className="h-[18px]">e-mail: contactus.zk.business@gmail.com</p></a>
                        </div>
                        <div className="text-[14px] text-black opacity-60">
                            <p className="h-[18px]">Poniedziałek—piątek: 10:00-20:00</p>
                            <p className="h-[18px]">Sobota: 14:00-20:00</p>
                        </div>
                    </div>
                    <div className="w-[333px] h-[242px] flex flex-col gap-[10px] p-[20px] text-black">
                        <p className="text-[10px] text-black opacity-60">HASŁA STRONY</p>
                        <div className="text-[14px] font-semibold opacity-65">
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
                        <p className="text-[10px] text-black opacity-60">SOCIAL MEDIA</p>
                        <div className="text-[14px] mb-[10px]">
                            <a href="https://www.instagram.com/zk.development" target="blank"><p className="h-[18px] ">instagram: zk.development</p></a>
                            <p className="h-[18px]">tiktok: in-progress...</p>

                        </div>
                        <p className="text-[10px] text-black opacity-60">POLITYKA PRYWATNOŚCI</p>
                        <div className="text-[14px] text-black opacity-70">
                            <p className="h-[18px] underline cursor-pointer">Polityka Prywatności - w krótce dostępne</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-[53px] shadow-[0_-4px_30px_rgba(0,0,0,0.10)] p-[30px] flex absolute justify-center items-center max-[400px]:whitespace-nowrap">
                    <p className="text-gray-800 opacity-50 text-[13px]">© 2026 Zk Development — Wszelkie prawa zastrzeżone</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;