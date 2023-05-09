import axios from 'axios';
import Head from 'next/head';
import ClientSatisfaction from '../components/ClientSatisfaction';
import HeroSection from '../components/HeroSection';
import PortFolioSection from '../components/PortFolioSection';
import Services from '../components/Services';
import TeamSection from '../components/TeamSection';
import Testimonial from '../components/Testimonial';

const Home = ({ Tesimonial, Portfolios }) => {
  return (
    <>
      <Head>
        <title>rottenScript | We make good things.</title>
        <meta name="description" content="At rottenScript we specialize in designing, building, shipping and scaling beautiful, usable products with blazing!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <ClientSatisfaction />
      <TeamSection />
      <Services />
      <PortFolioSection Portfolios={Portfolios} />
      <Testimonial Tesimonial={Tesimonial} />

    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/testimonials`);
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/portfolios`);
  return {
    props: {
      Tesimonial: res.data,
      Portfolios: response.data,
    },
  };
}

export default Home;
