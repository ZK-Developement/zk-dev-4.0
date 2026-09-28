import { useEffect } from "react"
import { createPortal } from "react-dom"
import logo from "../../assets/images/zk-logo-nobg.png"

function Polityka ({ open, onClose }){
    useEffect(() => {
        if (!open) return
        const onKey = (e) => { if (e.key === "Escape") onClose() }
        document.addEventListener("keydown", onKey)
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKey)
            document.body.style.overflow = ""
        }
    }, [open, onClose])

    if (!open) return null

    return createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/60 flex justify-center items-center p-[20px]"
             onClick={onClose}>
            <div className="relative bg-[radial-gradient(circle,_#e3e3e3,_#FFFFFF)] w-[1000px] max-w-full rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.10)]"
                 onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-[15px] right-[15px] z-10 flex justify-center items-center w-[42px] h-[42px] rounded-full bg-white shadow-[0_4px_30px_rgba(0,0,0,0.10)] text-black text-[32px] leading-none cursor-pointer
                                                     max-[400px]:top-[10px] max-[400px]:right-[10px] max-[400px]:w-[36px] max-[400px]:h-[36px] max-[400px]:text-[28px]">×</button>
                <div className="max-h-[90vh] overflow-y-auto rounded-[20px] p-[45px]
                                [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                                max-[400px]:p-[20px]">
                    <div className="flex w-full h-[60px] mb-[25px] justify-center items-center ">
                        <div className="flex w-full h-[60px]  justify-center items-center ">
                            <img src={logo} alt="logo" className="h-[65px] max-[400px]:h-[50px]"/>
                            <p className="text-black text-[26px] max-[400px]:text-[20px]">Development</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-start mb-[25px]">
                        <p className="text-black text-[36px] font-semibold leading-10 max-[400px]:text-[26px] max-[400px]:leading-8">Polityka prywatności</p>
                    </div>
                    <p className="text-black text-[16px] leading-6 opacity-70 mb-[20px]">Ostatnia aktualizacja: 28.09.2026</p>

                    
                    <p className="text-black text-[18px] font-medium mb-[4px] max-[400px]:text-[19px]">1010.Polityka do uzypełnienia</p>
                    <p className="text-black text-[17px] leading-5 opacity-70 mb-[22px] max-[400px]:text-[15px] max-[400px]:leading-5">Przykładowy tekst.</p>

                    <div className="flex justify-center mt-[25px]">
                        <button onClick={onClose} className="bg-[radial-gradient(circle,_#393939,_#252525)] hover:bg-[radial-gradient(circle,_#6C6C6C,_#454545)] transition-all duration-500 text-white font-semibold text-[18px] h-[52px] w-[260px] rounded-[10px] cursor-pointer">Zamknij</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
export default Polityka