import React from "react";
import Header from "../../component/main/Header";
import Hero from "../../component/main/Hero";
import Services from "../../component/main/Services";
import Features from "../../component/main/Features";
import FAQ from "../../component/main/FAQ";
import Footer from "../../component/main/Footer";

function Landing() {
  return (
    <div className="">
      <div className="min-h-[100vh] ">
        <Header />
        <Hero />
        <div className="px-3 md:px-5 lg:px-10 pt-20">
          <h3 className="text-center text-3xl text-bold font-[Satoshi-Bold]">OUR SERVICES</h3>
          <Services />
        </div>
        <div className="px-10 pt-20">
          <h3 className="text-center text-3xl text-bold font-[Satoshi-Bold]">AMAZING FEATURES</h3>
          <p className="text-center my-5">Discover the Unmatched Features of our Crypto and Gift Card Exchange </p>
          <Features />
        </div>
        <div className="pt-20">
          <h3 className="text-center text-3xl text-bold font-[Satoshi-Bold]">FREQUENTLY ASKED QUESTIONS</h3>
          <p className="text-center my-5">Get Answers to your Question  </p>
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
