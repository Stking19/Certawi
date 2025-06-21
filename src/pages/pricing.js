import { useState } from "react";
import Styles from "@/styles/pricing.module.scss";
import Feature from "@/components/pricing/feature";
import Slider from "@/components/pricing/slider";
import { data, testimonials } from "@/components/pricing/data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Pricing() {
  const [value, setValue] = useState(0);

  const { per } = data[value];

  return (
    <main>
      <Head>
        <title>Certawi Pricing</title>
      </Head>
      <section className={Styles.pricing}>
        <article className={Styles.text}>
          <p>PRICING</p>

          <h3>Choose a plan tailored to your needs</h3>

          <p>
            Buy a plan that&rsquo;s right for you. With Certawi you can
            tailor your plan to suit your budget and needs. Choose to upgrade or
            downgrade your plan at any time – it&rsquo;s up to you!
          </p>
        </article>

        <article className={Styles.plans}>
          <div className={Styles.btnContainer}>
            {data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setValue(index);
                  }}
                  className={`${Styles.planBtn} ${
                    index === value && `${Styles.activeBtn}`
                  }`}
                >
                  {item.plan}
                </div>
              );
            })}
          </div>

          <div className={Styles.plansContainer} id="pc">
            {data[value].subscription.map((item) => {
              const { id, sub } = item;
              return (
                <div className={Styles[sub.subType]} key={id}>
                  <h4>{sub.subType}</h4>

                  <p>{sub.header}</p>

                  <h3>
                    {sub.amount}
                    <span>{per}</span>
                  </h3>

                  <p>{sub.text}</p>

                  <article>
                    {sub.subText.map((item) => {
                      const { id, img, txt } = item;
                      return (
                        <div className={Styles.others} key={id}>
                          <Image src={img} alt={txt} width={30} height={30} />
                          <span>{txt}</span>
                        </div>
                      );
                    })}
                  </article>

                  <Link href={sub.linkTo}>{sub.linkText}</Link>
                </div>
              );
            })}
          </div>

          <div className={Styles.sliderContainer}>
            <Slider value={value} />
          </div>
        </article>
      </section>

      <Feature />

      <section className={Styles.testimonials}>
        <article className={Styles.text}>
          <p>TESTIMONIALS</p>

          <h3>What our clients say about us</h3>

          <div className={Styles.testimonialContainer}>
            {testimonials.map((item) => {
              const { id, text, img, name, position } = item;

              return (
                <div key={id}>
                  <Image
                    src="/IMG/Frame.svg"
                    alt="quote"
                    width={30}
                    height={30}
                  />

                  <p className={Styles.txt}>{text}</p>

                  <div>
                    <Image src={img} alt={name} width={50} height={50} />

                    <div>
                      <p>{name}</p>
                      <p>{position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      <section className={Styles.bg}></section>
    </main>
  );
}
