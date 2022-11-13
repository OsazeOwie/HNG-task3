import filterSvg from "./assets/filter.svg";

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
import img9 from "./assets/Frame 151 (8).png";
import img10 from "./assets/Frame 151 (9).png";
import img11 from "./assets/Frame 151 (10).png";
import img12 from "./assets/Frame 151 (11).png";
import img13 from "./assets/Frame 151 (12).png";
import img14 from "./assets/Frame 151 (13).png";
import img15 from "./assets/Frame 151 (14).png";
import img16 from "./assets/Frame 151 (15).png";

const PlaceToStay = () => {
    return ( 
        <div className=" mt-[127px] max  lg:px-24">
            <div className="px-10 lg:px-0">
                <div className="flex gap-[65px] overflow-scroll lg:overflow-hidden items-center lg:justify-start">
                    <ul className="flex whitespace-nowrap cursor-pointer gap-[18px] md:gap-[40px] lg:text-[20px] justify-center">
                        <li>Resturant</li>
                        <li>Cottage</li>
                        <li>Castle</li>
                        <li>fantasy city</li>
                        <li>beach</li>
                        <li>Carbins</li>
                        <li>Off-grid</li>
                        <li>Farm</li>
                    </ul>
                    <div className="flex justify-center gap-[20px] lg:gap-[40px] cursor-pointer border border-[#B4B4B4] rounded-lg py-[0.8125rem] px-[1.5rem] lg:px-[0.875rem] w-max">
                        <div className="lg:text-[16px]">Location</div>
                        <img className="w-5 " src={filterSvg} alt="" />
                    </div>
                </div>
            </div>

            <section>
                {/* container for card rows */}
              <div className="mt-[43px] mb-[53px] ">
                  {/* container for row 1 */}
                  <div className="card-con">
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
                {/* container for row 2 */}
                <div className="card-con mt-[24px]">
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img1} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img2} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img3} alt="" />
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
                {/* container for row 3 */}
                <div className="card-con mt-[24px]">
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img9} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img10} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img11} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img12} alt="" />
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
                {/* container for row 4 */}
                <div className="card-con mt-[24px]">
                  <div className="cards">
                    {/* card image */}
                    <div className="relative">
                      <img className="w-96 md:w-[310px] lg:w-max" src={img13} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img14} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img15} alt="" />
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
                      <img className="w-96 md:w-[310px] lg:w-max" src={img16} alt="" />
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
            </section>
        </div>
     );
}
 
export default PlaceToStay;