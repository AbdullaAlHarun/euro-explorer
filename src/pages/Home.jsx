import Slides from "../componants/Slides";
import AllTouristSpot from "../componants/AllTouristSpot";
import "../css/Slide.css";

const Home = () => {
  return (
    <div>
      <div className="px-8 mt-8 rounded-lg ">
        <Slides></Slides>
        <AllTouristSpot></AllTouristSpot>
      </div>
      
    </div>
  );
};

export default Home;
