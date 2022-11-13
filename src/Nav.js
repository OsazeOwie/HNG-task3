import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo (2).svg';
import close from "./assets/close.svg";
import menu from "./assets/menu.svg";
import Modal from "./Modal";

const Nav = () => {
    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
        setIsMenu(!isMenu);
    }

    return ( 
        <div className="flex max justify-between items-center mt-[43px] px-16 md:px-24">
                {/* Modal */}
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <div>
                <Link to="/">
                <img className=" w-28 lg:w-40" src={logo} alt="" />
                </Link>
            </div>
            <div className="lg:hidden">
                {!isMenu && <img src={menu} onClick={toggleNav} alt="" />}
                {isMenu && <img src={close} onClick={toggleNav} alt="" />}
            </div>
            {/* mobile nav */}

            {
               nav && 
             <div className="lg:hidden z-10 absolute text-center top-20 inset-x-5 mt-10 py-11 px-28 rounded-md shadow-primary-Dark_Blue/30 shadow-md bg-white">
                 <ul className="flex flex-col gap-7">
                 <li><Link to="/">Home</Link></li>
                    <li><Link to="/PlaceToStay">Place to stay</Link></li>
                    <li><Link to="#">NFTs</Link></li>
                    <li><Link to="#">Community</Link></li>
                 </ul>
                 <button className="btn mt-10" onClick={() => setIsOpen(true)}>
                    Connect Wallet
                  </button>
                </div>
            }

            {/* desktop nav */}

            <div className="hidden lg:flex">
                 <ul className="flex gap-12">
                 <li><Link to="/">Home</Link></li>
                    <li><Link to="/PlaceToStay">Place to stay</Link></li>
                    <li><Link to="#">NFTs</Link></li>
                    <li><Link to="#">Community</Link></li>
                 </ul>
            </div>

            <div className="hidden ml-7 lg:flex">
                  <button className="btn" onClick={() => setIsOpen(true)}>
                    Connect Wallet
                  </button>
              </div>
            
        </div>
     );
}
 
export default Nav;