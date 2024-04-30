import { useLoaderData } from "react-router-dom";
import TouristSportCard from "./TouristSportCard";


const HomePageCard = () => {
const allTouristSpotData = useLoaderData();


    return (
        <div className="m-20">
            <h2 className="text-6xl text-purple-700 text-center">All Tourist Spot: {allTouristSpotData.length}</h2>
            <div className="grid md:grid-cols-2 gap-4">
            {
              allTouristSpotData.map(euroExplorer => <TouristSportCard
              key={euroExplorer._id}
              euroExplorer={euroExplorer}
              >
              </TouristSportCard>)  
            }
            </div>
        </div>
    );
};

export default HomePageCard;