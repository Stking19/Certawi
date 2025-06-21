import { useState } from "react";
import Style from "@/styles/template.module.scss";

import Filter from "@/components/modal/modal";

// template card images
import cardimg from "/public/IMG/Rectangle1.png";
import cardimg2 from "/public/IMG/Rectangle2.png";
import cardimg3 from "/public/IMG/Rectangle3.png";
import cardimg4 from "/public/IMG/Rectangle4.png";
import cardimg5 from "/public/IMG/Rectangle5.png";
import cardimg6 from "/public/IMG/Rectangle6.png";
import cardimg7 from "/public/IMG/Rectangle7.png";
import cardimg8 from "/public/IMG/Rectangle8.png";
import cardimg9 from "/public/IMG/Rectangle9.png";
import cardimg10 from "/public/IMG/Rectangle10.png";
import cardimg11 from "/public/IMG/Rectangle11.png";
import premiumicon from "/public/IMG/Vector.svg";
import filtericon from "/public/IMG/setting.svg";
import addicon from "/public/IMG/add-square.svg";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Template() {
  const [modalState, setModalState] = useState(false);

  const [category, setCategory] = useState([]);

  const cardImages = [
    {
      id: 1,
      url: cardimg,
      type: "recognition",
      layout: "landscape",
    },
    {
      id: 2,
      url: cardimg2,
      type: "recognition",
      layout: "landscape",
    },
    {
      id: 3,
      url: cardimg3,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 4,
      url: cardimg4,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 5,
      url: cardimg5,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 6,
      url: cardimg6,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 7,
      url: cardimg7,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 8,
      url: cardimg8,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 9,
      url: cardimg9,
      type: "appreciation",
      layout: "landscape",
    },
    {
      id: 10,
      url: cardimg10,
      type: "completion",
      layout: "landscape",
    },
    {
      id: 11,
      url: cardimg11,
      type: "completion",
      layout: "landscape",
    },
  ];

  let categories = category;

  const closeModal = () => {
    setModalState(false);
  };

  const childToParent = (clickedCategory) => {
    categories.push(clickedCategory);
  };

  const applySelectCategories = () => {
    setCategory(categories);
  };

  return (
    <div className={Style.templateWrapper}>
      <Head>
        <title>Browser Template</title>
      </Head>
      <header>
        <h1>Templates</h1>

        <div className={Style.topContainerDiv}>
          <p>All results</p>

          {/* hide clear button if no filter is selected */}
          {categories.length === 0 ? null : (
            <button onClick={() => setCategory([])} className={Style.clearBtn}>
              Clear All Filters
            </button>
          )}
        </div>
        <button
          className={Style.filterBtn}
          onClick={() => setModalState(!modalState)}
        >
          Filters{" "}
          <span>
            <Image src={filtericon} alt="" />
          </span>
        </button>
        {/* modal popup */}
        <Filter
          modalClose={closeModal}
          open={modalState}
          selectedCategory={childToParent}
          applyCategories={applySelectCategories}
          setCategory={setCategory}
        />
      </header>
      <div className={Style.cardsContainer}>
        {/* cards start */}
        <div className={Style.templateCard}>
          <div className={`${Style.templateCard} ${Style.header}`}>
            <h2>Blank Canvas</h2>
            <button>
              Premium
              <Image src={premiumicon} alt="" />
            </button>
          </div>
          <div className={Style.icon}>
            <Link href="/">
              <Image src={addicon} alt="card" />
            </Link>
          </div>
        </div>

        {cardImages
          .filter((item) => {
            return category.length === 0 ? item : category.includes(item.type);
          })
          .map((item) => {
            return (
              <div key={item.id} className={Style.templateCard}>
                <div className={`${Style.templateCard} ${Style.img}`}>
                  <Link href="/">
                    <Image src={item.url} alt="card" width={278} height={200} />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
