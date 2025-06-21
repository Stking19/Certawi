import Style from "@/styles/faq.module.scss";
import Question from "/public/IMG/Framequestion.png";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";

export const FaqItems = ({ faq, onToggle, active }) => {
  const { title, body } = faq;

  return (
    <>
      <div className={Style.faqWrapper}>
        <div className={Style.faqQuestions}>
          <div className={Style.question}>
            <div className={Style.faqIcon}>
              {/* <RiQuestionnaireLine className={Style.icon} /> */}

              <Image src={Question} alt="" width={30} height={50}/>
            </div>

            <h3>{title}</h3>
          </div>
          <div className={Style.dropdowmIcon}>
            {active ? (
              <RiArrowDropRightLine className={Style.icon} onClick={onToggle} />
            ) : (
              <RiArrowDropDownLine className={Style.icon} onClick={onToggle} />
            )}
          </div>
        </div>
        {active ? (
          <ul className={Style.faqAnswers}>
            {body.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </>
  );
};
