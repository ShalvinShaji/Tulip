import Landing from "@/components/Landing";
import Services from "@/components/Services"; // Assuming you create this
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    // px-4 mx-2 py-4 my-2 lg:px-16 lg:py-16 lg:mx-6 lg:my-6
    <div>
      <Landing />
      <Services />
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
