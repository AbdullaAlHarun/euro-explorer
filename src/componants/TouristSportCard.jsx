import { Link } from "react-router-dom";

const TouristSportCard = ({ spot }) => {
  // Perform null check for spot object
  if (!spot) {
    return null; 
  }

  const {
    _id, // Assuming _id is the ID of the spot
    image,
    touristsSpotName,
    countryName,
    location,
    travelTime,
    seasonality,
    averageCost,
    totalVisitorsPerYear,
  } = spot;

  // Perform null check for image property
  if (!image) {
    return null; 
  }

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container w-full p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='bg-slate-300 p-8 flex justify-center rounded-xl'>
              <img src={image} alt={touristsSpotName} />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{touristsSpotName}</h2>
              <p className="text-gray-600 font-semibold">Country Name: {countryName}</p>
              <hr />
              <p className="text-gray-600 font-semibold">Location: {location}</p>
              <hr />
              <p className="text-gray-600"><b>Travel Time: </b> {travelTime}</p>
              <hr />
              <p className="text-gray-600"><b>Seasonality: </b> {seasonality}</p>
              <hr />
              <p className="text-gray-600"><b>Average Cost: </b> {averageCost}</p>
              <hr />
              <p className="text-gray-600"><b>Total Visitors Per Year: </b> {totalVisitorsPerYear}</p>
              <hr />
              <Link to={`/ViewDetailsPage/${_id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristSportCard;
