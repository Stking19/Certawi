import Style from  "@/styles/pricing.module.scss";
import { data } from '@/components/pricing/data';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import Link from "next/link";

function Slider ({ value }) {

  const { per } = data[value];

  return (
    // <Carousel className={Style.plansContainer} id="slider" indicatorLabels = {[ "btn1", "btn2", "btn3" ]} controls={false}>
    //     {data[value].subscription.map((item)=>{
    //         const { id, sub } = item;

    //         return(
    //             <Carousel.Item className={sub.subType} key={id}>
    //                 <h4>{sub.subType}</h4>

    //                 <p>{sub.header}</p>

    //                 <h3>{sub.amount}<span>{per}</span></h3>

    //                 <p>{sub.text}</p>

    //                 <article>
    //                     {sub.subText.map((item)=>{
    //                         const { id, img, txt } = item;
    //                         return(
    //                             <div className={Style.others} key={id}>
    //                                 <Image src={img} alt={txt} width={30} height={30}/>
    //                                 <span>{txt}</span>   
    //                             </div>
    //                         );
    //                         })}
    //                 </article>

    //                 <Link href={sub.linkTo}>
    //                     {sub.linkText}
    //                 </Link>
    //             </Carousel.Item>
    //         );
    //     })}
    // </Carousel>
    <div></div>
  );
}

export default Slider;