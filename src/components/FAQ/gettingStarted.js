import { useState } from "react";
import Style from "@/styles/faq.module.scss";
import { GettingStartedItems } from "./faqModule";

import { FaqItems } from "./faqItems";

export const GettingStarted = ({ header }) => {
  const [clicked, setclicked] = useState("0");
  const handleToggle = (index) => {
    console.log(index);
    if (clicked === index) {
      return setclicked("0");
    }
    setclicked(index);
  };

  return (
    <>
      <section className={Style.faqContainer}>
        <h2 style={{color: "black"}}>{header}</h2>

        {GettingStartedItems.map((faq, index) => {
          return (
            <FaqItems
              key={index}
              faq={faq}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
            />
          );
        })}
      </section>
    </>
  );
};
