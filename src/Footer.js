import logo from './assets/logoWhite.svg';
import twitter from "./assets/twitter.svg";
import fb from "./assets/fb.svg";
import ig from "./assets/ig.svg";

const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1D1D1E] lg:px-24 pt-24 pb-10 text-white">
            <div className="flex justify-between flex-col">
                <div className="flex md:items-center lg:items-start flex-col gap-[50px] lg:gap-[100px]">
                    <div>
                        <img className="w-40" src={logo} alt="" />
                    </div>
                    <div className="flex md:gap-[100px] lg:gap-[32px] gap-[32px]">
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={ig} alt="" />
                    </div>
                </div>
                <div className="mt-[55px] hidden lg:block">
                    <span>© 2022 Metabnb</span>
                </div>
            </div>

            <div className="flex gap-[30px] md:gap-[150px] lg:gap-[217px] mt-12 lg:mt-0">
                <div>
                    <h1 className="lg:text-[18px] font-bold mb-[23px]">Community</h1>
                    <ul className="flex flex-col gap-4 lg:gap-[16px]">
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>

                <div>
                    <h1 className="lg:text-[18px] font-bold mb-[23px]">Places</h1>
                    <ul className="flex flex-col gap-4 lg:gap-[16px]">
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>

                <div>
                    <h1 className="lg:text-[18px] font-bold mb-[23px]">About us</h1>
                    <ul className="flex flex-col gap-4 lg:gap-[16px]">
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
            <div className="mt-[55px] lg:hidden">
                    <span className="">© 2022 Metabnb</span>
                </div>
        </div>
    );
}

export default Footer;