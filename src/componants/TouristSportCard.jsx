
const TouristSportCard = ({ spot }) => {
  // Perform null check for spot object
  if (!spot) {
    return null; // Return null or any other placeholder element if spot is undefined
  }

  const {
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
    return null; // Return null or any other placeholder element if image is undefined
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
              {/* Add more details if needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TouristSportCard;
