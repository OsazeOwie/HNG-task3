import xIcon from "./assets/x.svg";
import metaMask from "./assets/meta.svg";
import wallet from "./assets/wallet.svg";
import arrow from "./assets/arrow.svg";


const Modal = ({setIsOpen}) => {
    return ( 
        <div className="dark-bg z-20">
            <div className="modal pb-[32px]">
                <div className="border-b-2 px-12">
                    <div className="flex justify-between items-center">
                        <h3 className="py-5 font-bold text-2xl">Connect wallet</h3>
                        <div>
                          <img src={xIcon} className="w-5 cursor-pointer" onClick={() => setIsOpen(false)} alt="" />  
                        </div>
                    </div>
                </div>
                <div className="px-12 mt-[32px] text-[]">Choose your prefered wallet:</div>
                <div className="px-12 flex flex-col gap-[16px] mt-[16px]">
                    <div className="modal-btn">
                        <div className="flex items-center gap-[16px]">
                            <img className="h-10" src={metaMask} alt="" />
                            <span className="font-bold">Metamask</span>
                        </div>
                        <div>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="modal-btn">
                        <div className="flex items-center gap-[16px]">
                            <img className="h-10" src={wallet} alt="" />
                            <span className="font-bold">WalletConnect</span>
                        </div>
                        <div>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;