import Hero from "../../components/HeroSection";
import HomeInfoSection from "../../components/HomeInfoSection";
import StarsBackground from "../../components/StarsBackground";

const Home = () => {
  return (
    <div className="relative ">
      <StarsBackground />
      <div className="relative z-10">
        <Hero />
        <div className="bg-gradient-to-br from-[#141023] to-[#201732]">
          <div className="max-w-[1250px] mx-auto">
            <HomeInfoSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
