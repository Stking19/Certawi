import Styles from "./header.module.scss";
// import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function Navbar() {
  const navigate = useRouter();
  const [showLinks, setShowLinks] = useState(false);
  // const navRef = useRef();
  const handleToggle = () => {
    setShowLinks(!showLinks);
    
  };

  const links = [
    {
      id: 1,
      url: "/",
      text: "home",
    },
    {
      id: 2,
      url: "/template",
      text: "browse templates",
    },
    {
      id: 3,
      url: "/pricing",
      text: "pricing",
    },
    {
      id: 4,
      url: "/blog",
      text: "blog",
    },
    {
      id: 5,
      url: "/faq",
      text: "FAQs",
    },
  ];

  return (
    <div id="Nav"> 
    <div className={Styles.navbar}>
      <div className={Styles.navHeaderContainer}>
        <div className={`${Styles.navHeader} ${Styles.container}`}>
          <div className={Styles.navLogo} onClick={() => navigate.push("/")}>
            <h2>
              Cert<span>awi</span>
            </h2>
            <Image src="/IMG/icon.png" alt="certawi bulb" width={40} height={40}/>
          </div>
          <div className={Styles.navClick}>
            <button className={Styles.btn}>get started</button>
            <FaBars className={Styles.bars} onClick={handleToggle} />
          </div>
        </div>
      </div>
      <div className={Styles.navLinks}>
        <div className={`${Styles.linksContainer} ${Styles.container} ${showLinks ? Styles.showLinks : ""}`}>
          <div className={Styles.links}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <p key={id}>
                  <Link href={url} className={Styles.link}>
                    {text}
                  </Link>
                </p>
              );
            })}
          </div>
          <div className={Styles.buttonContainer}>
            <button className={Styles.btn}>get started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
