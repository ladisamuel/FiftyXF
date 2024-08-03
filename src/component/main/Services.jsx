import React from "react";
import img11 from "../../assets/images/image11.png";
import btc from "../../assets/icons/btc.png";
import img12 from "../../assets/images/image12.png";
import Gift_cards_logo from "../../assets/icons/Gift_cards_logo.png"
export default function Services() {
  return (
    <div className="">
        <div className="relative bg-[#E6E6E6] lg:h-[400px] pt-5 pl-2 lg:pt-10 lg:pl-8 my-7 rounded-xl lg:rounded-[50px] cs_BBRR">
            <div className="lg:w-[57%] relative ">
            <p className="text-2xl font-[Satoshi-Bold]">
                Fast and Instant Crypto Transfers
            </p>
            <p className="my-5 ">
                Exchange Bitcoin and USDT with Unparalleled Speed and Confidence.
                Experience Lightning-Fast, Reliable, and Secure Transactions on Our
                Trusted Platform, Designed for Seamless and Worry-Free Trading."
            </p>
            <p className="text-[#2394E5] font-[Satoshi-Bold] ">
                Trade Now <i className="pi pi-arrow-right text-xs"></i>{" "}
            </p>
            <img
                src={btc}
                className=" absolute -bottom-60 md:right-64 w-[150px] lg:w-auto lg:bottom-0 lg:right-0 lg:translate-x-1/2 lg:translate-y-1/2 "
                alt=""
            />
            </div>
            <div className="">
            <img src={img11} className="w-[300px] lg:w-auto ml-auto lg:absolute bottom-0 right-0" alt="" />
            </div>
        </div>
        <div className="relative flex flex-col-reverse lg:block bg-[#E6E6E6] lg:h-[400px] pt-5 pl-2 lg:pt-10 lg:pl-8 mt-24 rounded-xl lg:rounded-[50px]">
            
            <div className="">
                <img src={img12} className=" lg:absolute bottom-0 left-0 h-[118%]" alt="" />
                <img src={Gift_cards_logo} className="absolute bottom-52 right-2 lg:left-[25%] " alt="" />
                {/* Gift_cards_logo.png */}
            </div>
            <div className="lg:w-[57%] lg:float-end ">
                <p className="text-2xl font-[Satoshi-Bold]">
                Gift Card Exchange
                </p>
                <p className="my-5 ">
                "Effortlessly Exchange Your Gift Cards for Cash – Enjoy Instant Payouts and Reliable, Hassle-Free Transactions with Zero Delays. Experience the Convenience and Speed You Deserve."
                </p>
                <p className="text-[#2394E5] font-[Satoshi-Bold] ">
                    Trade Now <i className="pi pi-arrow-right text-xs"></i>{" "}
                </p>
            </div>
        </div>
    </div>
  );
}
