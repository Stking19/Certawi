import Footer from "./footer/footer";
import Header from "./header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{width: "100%", padding: "0px", margin: "0px", background: "#f8fffe" }}>{children}</main>
      <Footer />
    </>
  );
}
