import Header from "@/components/header/Header";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  const is404 = router.pathname === "/404";
  return is404 ? (
    <div style={{ background: "#f8fffe" }}>
      <Header />
      <Component {...pageProps} />
    </div>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
