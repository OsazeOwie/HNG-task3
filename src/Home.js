
import heroImg from "./assets/Group 4028.svg";
import mbToken from "./assets/Group 59537.svg";
import metaMask from "./assets/Group 4040.svg";
import openSea from "./assets/Frame 4041.svg";
import star from "./assets/Group 59523.png";
import heart from "./assets/heart.png";
import img1 from "./assets/Frame 151 (4).png";
import img2 from "./assets/Frame 151 (5).png";
import img3 from "./assets/Frame 151 (6).png";
import img4 from "./assets/Frame 151 (7).png";
import img5 from "./assets/Frame 151.png";
import img6 from "./assets/Frame 151 (1).png";
import img7 from "./assets/Frame 151 (2).png";
import img8 from "./assets/Frame 151 (3).png";

import groupImg from "./assets/Frame 59546.png";


const Home = () => {

    return ( 
        <div>
            <div className=" mt-[125px] text-center gap-12 lg:gap-0 lg:text-left flex-col-reverse lg:flex-row flex items-center justify-between px-16 md:px-24">
              <div className="lg:w-[590px]">
                <h1 className="text-[36px] lg:text-[56px]">Rent  a <span className="txt-color">Place</span> away from <span className="txt-color">Home</span> in the <span className="txt-color">Metaverse</span></h1>
                <p className="lg:text-[24px] my-12">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <div className="flex justify-center lg:justify-start">
                  <input className="inp" type="text" placeholder="Search for location" />
                  <button className="inp-button">Search</button>
                </div>
              </div>
              <div>
                <img src={heroImg} alt="" />
              </div>
            </div>
            <div className="flex justify-around bg-color mt-[10.78px] mb-[58px] py-1">
              <img className="w-20 xl:w-48" src={mbToken} alt="" />
              <img className="w-20 xl:w-48" src={metaMask} alt="" />
              <img className="w-20 xl:w-48" src={openSea} alt="" />
            </div>
            <main>
              <h2 className=" text-center text-3xl md:text-4xl font-bold lg:text-5xl">Inspiration for your next adventure</h2>
              {/* container for card rows */}
              <div className="mt-[43px] mb-[53px]">
                {/* container for row 1 */}
                <div className="card-con">
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img1} alt="" />
                      <div>
                        <img className="absolute  top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max"  src={img2} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                     {/* card image */}
                     <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max"  src={img3} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                     {/* card image */}
                     <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img4} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* container for row 2 */}
                <div className="card-con mt-[24px]">
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img5} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img6} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                     {/* card image */}
                     <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img7} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="cards">
                     {/* card image */}
                     <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img8} alt="" />
                      <div>
                        <img className="absolute top-2 right-2" src={heart} alt="" />
                      </div>
                    </div>
                    {/* card details */}
                    <div>
                      <div className="flex justify-between mt-[16px]">
                        <div className="flex flex-col">
                          <span className="text-[12px]">Desert King</span>
                          <span className="text-[12px] mt-[10px]">2345km away</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-bold text-right">1MBT per night</span>
                          <span className="text-[12px] mt-[10px] text-right">available for 2weeks stay</span>
                        </div>
                      </div>
                      <div className="w-[10px] lg:w-[20px] gap-[4px] flex lg:gap-[8px] mt-[10px]">
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                        <img className="" src={star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <section className="p-12 bg-color text-white">
              <div className="flex md:px-16 lg:px-0 text-center gap-12 lg:gap-0 lg:text-left flex-col-reverse lg:flex-row justify-center items-center">
                <div className="lg:w-[500px]">
                  <h3 className="text-[35px] lg:text-[48px] font-bold">Metabnb NFTs</h3>
                  <p className="leading-[35px] mt-[35px] mb-[55.7px]">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                  <button className="btn2">Learn More</button>
                </div>
                <div>
                  <img src={groupImg} alt="" />
                </div>
              </div>
            </section>
        </div>
     );
}
 
export default Home;