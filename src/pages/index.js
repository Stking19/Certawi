import BulkStep from "@/components/home/bulkstep/bulkStep";
import Certificate from "@/components/home/certificate/certificate";
import Hero from "@/components/home/hero/hero";
import Testimonials from "@/components/home/testimonials/testimonials";
import Head from "next/head";


export default function Home() {
  return (
    <div style={{background: "rgb(248,255,254)"}}>
      <Head>
        <title>Certawi</title>
      </Head>
      <Hero />
      <Certificate />
      <BulkStep />
      <Testimonials />
    </div>
  );
}
