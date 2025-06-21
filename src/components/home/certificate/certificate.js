import { useState } from "react";
import Styles from "./certificate.module.scss";
import Link from "next/link";
import demo from '/public/IMG/demo.png'
import demo_2 from '/public/IMG/demo-2.png'
import demo_3 from '/public/IMG/demo-3.png'
import Image from "next/image";

export default function Certificate() {
  const [bulkCertificate, setBulkCertificate] = useState(false);

  return (
    <>
      <p className={`${Styles.sora} ${Styles.header}`}>
        Create your <span className={Styles.emphasized}>certificate </span>
        with <span className={Styles.emphasized}>ease</span>
      </p>

      <p style={{ padding: "10px" }} className={Styles.prompt}>
        Select a template, input values and Create a Certificate right away.
      </p>

      {bulkCertificate ? (
        <div
          className={`${Styles.flex} ${Styles.justifyBetween} ${Styles.mode}`}
        >
          <button
            className={Styles.select}
            style={{ color: "#222222", backgroundColor: "#ffffff" }}
            onClick={() => {
              setBulkCertificate(false);
            }}
          >
            Single Certificate
          </button>
          <button
            className={Styles.select}
            onClick={() => {
              setBulkCertificate(true);
            }}
          >
            Bulk Certificate
          </button>
        </div>
      ) : (
        <div
          className={`${Styles.flex} ${Styles.justifyBetween} ${Styles.mode}`}
        >
          <button
            className={Styles.select}
            onClick={() => {
              setBulkCertificate(false);
            }}
          >
            Single Certificate
          </button>
          <button
            className={Styles.select}
            style={{ color: "#222222", backgroundColor: "#ffffff" }}
            onClick={() => {
              setBulkCertificate(true);
            }}
          >
            Bulk Certificate
          </button>
        </div>
      )}

      {bulkCertificate ? (
        <div>
          <div
            className={`${Styles.flex} ${Styles.center} ${Styles.justifyBetween} ${Styles.gap} ${Styles.certImg}`}
          >
            <Image src={demo} alt="certificate-1" />
            <Image src={demo_2} alt="certificate-2" />
            <Image src={demo_3} alt="certificate-3" />
          </div>

          <form
            action=""
            className={`${Styles.certForm} ${Styles.textLeft} ${Styles.workSans}`}
          >
            <label className={Styles.label} for="img">Logo</label>
            <input
              type="file"
              name="uploadfile"
              id="img"
              style={{ display: "none" }}
            />
            <label for="img" className={Styles.upload}>
              Upload logo
            </label>
            <p style={{ fontSize: "12px" }}>Max image upload size: 8mb</p>

            <label for="text" className={Styles.label}>
              Certificate Title
            </label>
            <input type="text" placeholder="Certificate of completion" />

            <label for="text" className={Styles.label}>
              Dedication or message
            </label>
            <input
              type="text"
              placeholder="For your exceptional performance this month, 
            in appreciation for your loyalty and the desire to fulfil our goals, 
            in recognition of your leadership and dedication "
            />

            <label for="text" className={Styles.label}>
              Issued by
            </label>
            <input type="text" placeholder="Name of organisation or issuer" />

            <label for="date" className={Styles.label}>
              Issue Date
            </label>
            <input type="date" />

            <input
              type="submit"
              value="Create Certificate"
              className={Styles.submitBtn}
            />
          </form>
        </div>
      ) : (
        <div>
          <div
            className={`${Styles.flex} ${Styles.center} ${Styles.justifyBetween} ${Styles.gap} ${Styles.certImg}`}
          >
            <Image src={demo} alt="certificate-1" />
            <Image src={demo_2} alt="certificate-2" />
            <Image src={demo_3} alt="certificate-3" />
          </div>

          <form action="" className={`${Styles.certForm} ${Styles.textLeft} ${Styles.workSans}`}>
            <label for="img">Logo</label>
            <input
              type="file"
              name="uploadfile"
              id="img"
              style={{ display: "none" }}
            />
            <label htmlFor="img" className={Styles.upload}>
              Upload logo
            </label>
            <p style={{ fontSize: "12px" }}>Max image upload size: 8mb</p>

            <label htmlFor="text" className={Styles.label}>
              Certificate Title
            </label>
            <input type="text" placeholder="Certificate of completion" />

            <label htmlFor="text" className={Styles.label}>
              Awardee Names
            </label>
            <input type="text" placeholder="Gabriel Prosper" />

            <label htmlFor="text" className={Styles.label}>
              Dedication or message
            </label>
            <input
              type="text"
              placeholder="For your exceptional performance this month, 
            in appreciation for your loyalty and the desire to fulfil our goals, 
            in recognition of your leadership and dedication "
            />

            <label htmlFor="text" className={Styles.label}>
              Issued by
            </label>
            <input type="text" placeholder="Name of organisation or issuer" />

            <label htmlFor="date" className={Styles.label}>
              Issue Date
            </label>
            <input type="date" />

            <Link href="">
              <input
                type="submit"
                value="Create Certificate"
                className={Styles.submitBtn}
              />
            </Link>
          </form>
        </div>
      )}
    </>
  );
}
