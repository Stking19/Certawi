import { Downloads } from "@/components/FAQ/downloads";
// import { FaqContainer } from "./FAQcomp/FaqContainer";
// import faqStyle from "./faq.module.scss";
import { FaqHeader } from "@/components/FAQ/faqHeader";
import { Featured } from "@/components/FAQ/featured";
import { GettingStarted } from "@/components/FAQ/gettingStarted";
import { Uploads } from "@/components/FAQ/uploads";
import Style from "@/styles/faq.module.scss";
import Button from "@/components/button/Button";
import Head from "next/head";

const FAQ = () => {
  return (
    <>
      <Head>
        <title>Certawi Faq</title>
      </Head>
      <section className={Style.faqWrap}></section>
      <FaqHeader />
      <GettingStarted header={"Getting Started"} />
      <Downloads header={"Downloads"} />
      <Uploads header={"Uploads"} />
      <Featured header={"Featured"} />
      <div className={Style.faqBtn}>
        <Button name={"Have more questions?"} />
      </div>
    </>
  );
};

export default FAQ;
