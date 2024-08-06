import React from "react";
import dashImg from "../../../assets/dashboard/dashBG.png";
import usdtIcon from "../../../assets/icons/image3.png";
import btcIcon from "../../../assets/icons/image4.png";
import amazIcon from "../../../assets/icons/amazon.png";
import NGN from "../../../assets/icons/nigeria.png";
import WA from "../../../assets/icons/whatsapp.png";
import X from "../../../assets/icons/tw.png";
import LI from "../../../assets/icons/LinkedIn.png";
import IG from "../../../assets/icons/IGv2.png";

import cryptoIcon from "../../../assets/icons/cryptoIcon.png";
import paypalIcon from "../../../assets/icons/paypalIcon.png";
import giftcardIcon from "../../../assets/icons/giftcardIcon.png";

export default function Dashboard() {
  return (
    <div className="md:flex items-start md:h-[90vh] ">
      <div className="flex flex-col gap-5 md:w-[75%] lg:h-[100%] p-3  ">
        <div className=" md:h-[35%] text-white w-full p-5 rounded-[35px] overflow-hidden bg-[url('./src/assets/dashboard/dashBG.png')] bg-cover bg-right-bottom	 ">
          {/* <img src={dashImg} className='h-[100%] w-full ' alt="" /> */}
          <p className="lg:font-[Satoshi-bold]">Welcome back, John!</p>
          <h1 className=" w-[90%] font-[Satoshi-bold] text-xl lg:text-3xl my-5 md:my-1">
            Trade your Cryptocurrency and gift card with us today at a very high
            rate!
          </h1>
          <button className="bg-white font-[Satoshi-bold] text-black text-sm px-3 py-2 rounded-3xl">
            Check Rates <span className="pi pi-arrow-right text-xs ml-1"></span>
          </button>
        </div>

        <div className="md:hidden bg-white flex items-center justify-between p-5 rounded-[35px]  ">
          <div className="w-[30%] text-center ">
            <div className="w-fit m-auto mb-2">
              <img
                src={cryptoIcon}
                className="w-[60px] bg-blue-500 p-3 rounded-full"
                alt=""
              />
            </div>
            <p className="font-[Satoshi-bold] ">Crypto</p>
          </div>
          <div className="w-[30%] text-center ">
            <div className="w-fit m-auto mb-2">
              <img
                src={giftcardIcon}
                className="w-[60px] bg-blue-500 p-3 rounded-full"
                alt=""
              />
            </div>
            <p className="font-[Satoshi-bold] ">Gift Card</p>
          </div>
          <div className="w-[30%] text-center ">
            <div className="w-fit m-auto mb-2">
              <img
                src={paypalIcon}
                className="w-[60px] bg-blue-500 p-3 rounded-full"
                alt=""
              />
            </div>
            <p className="font-[Satoshi-bold] ">PayPal</p>
          </div>
        </div>

        <div className="hidden lg:block rounded-[25px]  md:h-[65%] bg-white p-3 ">
          <div className=" lg:h-full overflow-hidden ">
            <div className="flex text-center justify-between font-[Satoshi-bold] ">
              <p className="font-[Satoshi-bold]">Recent Transactions</p>
              <p className="text-[#2394E5] cursor-pointer mr-2 font-[Satoshi-bold]">
                See All
              </p>
            </div>
            <div className="mt-5 rounded-lg h-full overflow-y-auto	">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="  text-sm">
                  <tr className=" text-left">
                    <th scope="col" className="px-2 py-3 ">
                      Trade
                    </th>
                    <th scope="col">Trade Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody className="">
                  {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                    <tr className="text-xs h-30px] border-b  ">
                      <td className="px-2 py-3 font-[Satoshi-bold]">Bitcoin</td>
                      <td className="py-3">N210,000.00</td>
                      <td className="py-3">Successful</td>
                      <td className="py-3">N1500.00</td>
                      <td className="py-3">0.00000001</td>
                      <td className="py-3">25-04-24</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> 
      <div className="md:w-[25%] flex flex-col gap-5 h-full p-3  ">
        <div className="max-h-[35%] p-5 bg-white rounded-[25px] ">
          <h3 className="font-[Satoshi-bold] text-md lg:text-lg text-center">Cryptocurrency Calculator</h3>
          <div className="flex gap-5 bg-gray-200 p-1 pr-2 rounded-full m-auto w-fit mt-3">
            <div className="flex bg-black p-1 px-2 rounded-full items-center">
              <img className="w-[20px] " src={btcIcon} alt="" />
              <p className="text-xs ml-1 text-white">BTC</p>
            </div>
            <div className="flex items-center">
              <img className="w-[20px] " src={usdtIcon} alt="" />
              <p className="text-xs ml-1">USDT</p>
            </div>
          </div>
          <div className="flex  font-[Satoshi-bold] items-center justify-between w-[90%] m-auto mt-3 gap-2">
            <div className=" ">
              <p className="lg:text-sm  font-[Satoshi-bold]">You Send</p>
              <input
                className="w-[100%] text-xs px-2 py-1 bg-gray-200"
                type="text"
                placeholder="0.0004"
              />
            </div>
            <div className=" ">
              <p className="lg:text-sm  font-[Satoshi-bold]">You Get</p>
              <input
                className="w-[100%] text-xs px-2 py-1 bg-gray-200 cursor-not-allowed"
                disabled
                type="text"
                placeholder="N1500.00"
              />
            </div>
          </div>
        </div>
        <div className=" lg:max-h-[65%] p-5 py-5 lg:py-2 bg-white rounded-[25px] ">
          <div className="flex items-end justify-between">
            <h3 className="font-[Satoshi-bold]">Gift Card Rates</h3>
            <p className="cursor-pointer text-sm text-[#2394E5] font-[Satoshi-bold]">
              See All
            </p>
          </div>
          <div className="bg-gray-200 py-2 px-3 mt-2 rounded-[15px] ">
            <div className=" font-[Satoshi-bold]">
              <p className="text-sm lg:text-xs mt-5 mb-1 lg:m-0">Gift Card Category</p>
              <p className="w-[100%] text-xs px-2 py-1 bg-white flex  items-center gap-2 rounded-lg ">
                <img src={amazIcon} className="w-[15px]  " alt="" />{" "}
                <span className="font-[Satoshi-bold] py-2 lg:p-0">Amazon</span>
              </p>
            </div>
            <div className="my-2 font-[Satoshi-bold]">
              <p className="text-sm lg:text-xs mt-5 mb-1 lg:m-0">Gift Card Sub Category</p>
              <p className="w-[100%] text-xs px-2 py-1 bg-white flex items-center gap-2 rounded-lg ">
                <img src={amazIcon} className="w-[15px]  " alt="" />{" "}
                <span className=" py-2 lg:p-0 font-[Satoshi-bold]">Australia Amazon</span>
              </p>
            </div>
            <div className="my-2 font-[Satoshi-bold]">
              <p className="text-sm lg:text-xs mt-5 mb-1 lg:m-0">Amount</p>
              <p className="w-[100%] text-xs px-2 py-2 lg:py-1 bg-white font-[Satoshi-bold] flex items-center gap-2 rounded-lg ">
                200
              </p>
            </div>
            <div className="my-2 font-[Satoshi-bold]">
              <p className="text-xs">Payment Method</p>
              <div className="w-[100%] text-xs  flex items-center gap-2 border border-white">
                <span className="flex items-center gap-1 font-[Satoshi-bold] bg-white py-1 px-2 ">
                  <img src={NGN} className="w-[15px]" alt="" /> NGN
                </span>
                <span className="flex items-center gap-1 bg-white font-[Satoshi-bold] py-1 px-2 ">
                  40,000
                </span>
              </div>
            </div>
            <div className="my-2">
              <p className="text-xs text-white text-center rounded-lg bg-[#2394E5] p-2 ">
                Check Best Rates
              </p>
            </div>
          </div>

          <div className="mt-2">
            <p className="font-[Satoshi-bold] text-xs ">Reach out via social media</p>
            <div className="flex items-center justify-start gap-5 mt-2">
              <img className="w-[25px] lg:w-[15px] rounded-full" src={WA} alt="" />
              <img className="w-[25px] lg:w-[15px] rounded-full" src={X} alt="" />
              <img className="w-[25px] lg:w-[15px] rounded-full" src={IG} alt="" />
              <img className="w-[25px] lg:w-[15px] rounded-full" src={LI} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
