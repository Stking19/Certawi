import Image from "next/image";
import Styles from "./header.module.scss";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => setShowLinks(!showLinks);
  const router = useRouter();

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
      <div className={Styles.navBar}>
        <div className={Styles.navHeaderContainer}>
          <div className={`${Styles.navHeader} ${Styles.container}`}>
            <div className={Styles.navLogo}>
              <h2 onClick={() => router.push("/")}>
                Cert<span style={{ color: "#ad2fd0" }}>awi</span>
              </h2>
              <Image
                src="/IMG/icon.png"
                alt="certawi bulb"
                width={40}
                height={40}
              />
            </div>
            <div className={Styles.navClick}>
              <button className={Styles.btn}>get started</button>
              <FaBars className={Styles.bars} onClick={handleToggle} />
            </div>
          </div>
        </div>
        <div className={Styles.navLinks}>
          <div className={Styles.linksContainer}>
            <div className={Styles.links}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <p key={id} className={Styles.link}>
                    <Link href={url}>{text}</Link>
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
