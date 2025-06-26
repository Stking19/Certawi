import Style from "@/styles/faq.module.scss";

export const FaqHeader = () => {
  return (
    <div className={Style.header}>
      <h2 style={{fontSize: "45px", color: "black"}}>Frequently Asked Questions</h2>
      <p style={{fontSize: "27px", marginTop: "10px", color: "black"}}>
        Some questions you might have about Certawi Certificate Geneartor as a
        user. Feel free to contact us for further enquiries that are not
        provided here.
      </p>
    </div>
  );
};
