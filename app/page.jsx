import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services"; // Assuming you create this
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      {/* <Testimonials />
            <Footer /> */}
    </>
  );
};

export default Home;
