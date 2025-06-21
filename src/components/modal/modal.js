import React, { useState } from "react";
import Style from "./modal.module.scss";

import redimg from "/public/IMG/Rectangle270.png";
import blueimg from "/public/IMG/Rectangle271.png";
import brownimg from "/public/IMG/Rectangle272.png";
import yellowimg from "/public/IMG/Rectangle273.png";
import greenimg from "/public/IMG/Rectangle274.png";
import blackimg from "/public/IMG/Rectangle275.png";
import whiteimg from "/public/IMG/Rectangle276.png";
import Image from "next/image";

export default function Filter({
  modalClose,
  open,
  selectedCategory,
  applyCategories,
  setCategory,
}) {
  // filter category btn states
  const [btn1active, setBtn1Active] = useState(false);
  const [btn2active, setBtn2Active] = useState(false);
  const [btn3active, setBtn3Active] = useState(false);
  const [btn4active, setBtn4Active] = useState(false);
  const [btn5active, setBtn5Active] = useState(false);
  const [btn6active, setBtn6Active] = useState(false);
  const [btn7active, setBtn7Active] = useState(false);

  if (!open) return null;

  return (
    <div id="modal">
      <div className={Style.modalCard}>
        <div className={Style["modalCard__type"]}>
          <h2>Certificate Type</h2>
          <div className={Style.filterBtnWrappermodal}>
            <button
              onClick={() => {
                setBtn1Active(!btn1active);
                return selectedCategory("completion");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn1active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn1active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Completion
            </button>
            <button
              onClick={() => {
                setBtn2Active(!btn2active);
                return selectedCategory("participation");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn2active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn2active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Participation
            </button>
            <button
              onClick={() => {
                setBtn3Active(!btn3active);
                return selectedCategory("appreciation");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn3active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn3active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Appreciation
            </button>
            <button
              onClick={() => {
                setBtn4Active(!btn4active);
                return selectedCategory("recognition");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn4active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn4active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Recognition
            </button>
            <button
              onClick={() => {
                setBtn5Active(!btn5active);
                return selectedCategory("attendance");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn5active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn5active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Attendance
            </button>
            <button
              onClick={() => {
                setBtn6Active(!btn6active);
                return selectedCategory("excellence");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn6active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn6active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Excellence
            </button>
            <button
              onClick={() => {
                setBtn7Active(!btn7active);
                return selectedCategory("achievement");
              }}
              className={Style.sortBtnmodal}
              style={{
                backgroundColor: btn7active ? "#B2E1D9" : "#F4F4F4",
                borderColor: btn7active ? "#19A68E" : "#A9A9A9",
              }}
            >
              Achievement
            </button>
          </div>
        </div>

        <div className={Style["modalCard__color"]}>
          <h2>Color</h2>
          <div className={Style.filterColors}>
            <div>
              <Image src={redimg} alt="" />
            </div>
            <div>
              <Image src={brownimg} alt="" />
            </div>
            <div>
              <Image src={yellowimg} alt="" />
            </div>
            <div>
              <Image src={greenimg} alt="" />
            </div>
            <div>
              <Image src={blueimg} alt="" />
            </div>
            <div>
              <Image src={blackimg} alt="" />
            </div>
            <div>
              <Image src={whiteimg} alt="" />
            </div>
          </div>
        </div>

        <div className={Style.btns}>
          <button
            onClick={() => {
              applyCategories();
              modalClose();
            }}
            className={` ${Style.btnSubmit} ${Style.apply}`}
          >
            Apply
          </button>
          <button
            onClick={() => {
              setCategory("");
              modalClose();
            }}
            className={` ${Style.btnSubmit} ${Style.cancel}`}
            style={{color: "#19a68e"}}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
