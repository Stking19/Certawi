import { useState } from "react";
import Styles from "./footer.module.scss";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
      setEmail("");
      setMessage("");
    } else if (!regex.test(email) && email !== "") {
      setMessage("Please enter a valid email");
    } else {
      return;
    }
  };
  return (
    <div id="footerId" className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerFlex}>
          <div className={Styles.footerLists}>
            <div className={Styles.list}>
              <h2>company</h2>
              <Link href="" className={Styles.link}>
                About
              </Link>
              <Link href="" className={Styles.link}>
                Contact
              </Link>
              <Link href="" className={Styles.link}>
                Our team
              </Link>
            </div>
            <div className={Styles.list}>
              <h2>product</h2>
              <Link href="" className={Styles.link}>
                How it works
              </Link>
              <Link href="" className={Styles.link}>
                Pricing
              </Link>
              <Link href="" className={Styles.link}>
                Terms of Service
              </Link>
              <Link href="" className={Styles.link}>
                Privacy Policy
              </Link>
            </div>
            <div className={Styles.list}>
              <h2>resources</h2>
              <Link href="" className={Styles.link}>
                Blog
              </Link>
              <Link href="" className={Styles.link}>
                Help
              </Link>
              <Link href="" className={Styles.link}>
                FAQs
              </Link>
            </div>
          </div>
          <div className={Styles.footerForm}>
            <h3>Stay up to date with Product</h3>
            <form noValidate>
              <p className={Styles.errorMsg}>{message}</p>
              <div className={Styles.footerInput}>
                <input
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={email}
                  name="name"
                  onClick={() => setMessage("")}
                />
                <button onClick={handleSubmit}>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className={Styles.footerInfo}>
          <div className={Styles.footerLogo}>
            <h2>
              Certawi <Image src="/IMG/footerIcon.png" alt="" height={45} width={35}/>
            </h2>
            <h3>info@certawi.com</h3>
          </div>
          <div className={Styles.footerSocials}>
            <h3>We are social</h3>
            <div>
              <BsInstagram className={Styles.social} />
              <BsLinkedin className={Styles.social} />
              <BsTwitter className={Styles.social} />
              <BsGithub className={Styles.social} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.footerCopyright} ${Styles.footerContainer}`}>
        <h3>
          &copy; Copyright {year}{" "}
          <span className={Styles.headlightText}>Team Headlight</span>. All
          rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
