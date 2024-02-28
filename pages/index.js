import Feature from "../components/Feature";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="GAT-Ideathon" />
      <Layout>
        <Hero />
        <Feature />
        <Details />
      </Layout>
    </>
  );
}
