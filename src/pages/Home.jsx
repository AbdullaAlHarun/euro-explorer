import Slides from "../componants/Slides";
import "../css/Slide.css";
import HomePageCard from "../componants/HomePageCard";
import PopularSection from "../componants/PopularSection";

const Home = () => {
  return (
    <div>
      <div className="px-8 mt-8 rounded-lg ">
        <Slides></Slides>
        <HomePageCard></HomePageCard>
        <PopularSection></PopularSection>
      </div>
      
    </div>
  );
};

export default Home;
