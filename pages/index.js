import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { Analytics } from "@vercel/analytics";

export default function Home() {
  return (
    <>
      <SeoHead title="GAT-Ideathon" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
      <Analytics />
    </>
  );
}
