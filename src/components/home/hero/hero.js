import Styles from "./hero.module.scss";
import hero from '/public/IMG/hero.png'
import tick from '/public/IMG/tick.png'
import google from '/public/IMG/google.png'
import udemy from '/public/IMG/udemy.png'
import coursera from '/public/IMG/coursera.png'
import skillshare from '/public/IMG/skillshare.png'
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div
        className={`${Styles.flex} ${Styles.center} ${Styles.justifyBetween} ${Styles.hero}`}
      >
        <div className={Styles.heroLeft}>
          <p className={`${Styles.heroText} ${Styles.sora}`} style={{color: "black"}}>
            Create and download your{" "}
            <span className={Styles.emphasized}>professional certificates</span>{" "}
            for<br />
            <span className={Styles.emphasized}> free</span>
          </p>
          <p
            className={`${Styles.workSans} ${Styles.lineHeight} ${Styles.heroCaption}`}
            style={{color: "black"}}
          >
            Generate professionally designed certificates for your staff,
            students etc.
          </p>
          <button className={Styles.heroButton}>
            Create a certificate now
          </button>
        </div>
        <Image src={hero} alt="hero" className={Styles.heroImg}></Image>
      </div>

      <div
        className={`${Styles.lineHeight} ${Styles.flex} ${Styles.justifyBetween} ${Styles.center} ${Styles.textLeft} ${Styles.workSans} ${Styles.perks}`}
        style={{gap: "20px"}}
      >
        <div
          className={`${Styles.flex} ${Styles.itemsCenter}`}
          style={{ width: "447px", gap: "10px", color: "black" }}
        >
          <Image src={tick} alt="tick" className={Styles.tick}></Image>
          <p>
            No design skill needed. Choose from a variety of<br /> stunning templates.
          </p>
        </div>
        <div
          className={`${Styles.flex} ${Styles.itemsCenter}`}
          style={{ width: "325px", gap: "10px" }}
        >
          <Image src={tick} alt="tick" className={Styles.tick}></Image>
          <p>Edit template to your preferred look and feel.</p>
        </div>
        <div
          className={`${Styles.flex} ${Styles.itemsCenter}`}
          style={{ width: "294px", gap: "10px" }}
        >
          <Image src={tick} alt="tick" className={Styles.tick}></Image>
          <p>Create and Send single and bulk certificate.</p>
        </div>
      </div>
      <p className={`${Styles.partnerHead} ${Styles.sora}`} style={{color: "black"}}>
        Trusted by schools and institutions; big and small
      </p>
      <div className={Styles.partners}>
        <Image src={google} alt="google" />
        <Image src={udemy} alt="udemy" />
        <Image src={coursera} alt="cousera" />
        <Image src={skillshare} alt="skillshare" />
        <Image src={google} alt="google" />
        <Image src={coursera} alt="coursera" />
        <Image src={skillshare} alt="skillshare" />
      </div>
    </>
  );
}
