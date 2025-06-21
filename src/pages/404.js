import Styles from "@/styles/error.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import errorImg from "/public/IMG/page-not-found.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Error = () => {
  const router = useRouter();
  return (
    <div className={Styles.errorPage}>
      <h1>We lost this page</h1>
      <p>
        We couldn't find what you are looking for. Let's find a better place for
        you to go.
      </p>
      <div className={Styles.errorButtons}>
        <Link className={Styles.link} href="/">
          <button className={Styles.btnSolid}>Go to Certawi Home</button>
        </Link>
        <Link className={Styles.link} href="">
          <button className={Styles.btnOutline} onClick={() => router.back()}>
            <BsArrowLeft className={Styles.arrowLeft} />
            Go Back
          </button>
        </Link>
      </div>
      <div className={Styles.errorImage}>
        <Image src={errorImg} alt="error 404" />
      </div>
    </div>
  );
};

export default Error;
