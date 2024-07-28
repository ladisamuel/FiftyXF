import React, { useState } from "react";
import FAQData from "../../data/Faq.json";
import Accordion from "./Accordion";

export default function FAQ() {
  const [showFaq, setShowFaq] = useState(null)

  
  const HandleFAQ = (index) => {
    setShowFaq(showFaq === index ? null : index);
  }

  return (
    <div className="m-auto mx-5">
      {FAQData.map((item, index) => (
        <div className=""  key={index} onClick={()=>HandleFAQ(index)}>
          <Accordion item={item} isOpen={showFaq === index} />
        </div>
      ))}
    </div>
  );
}
