

const ViewDetailsPage = ({ spot }) => {
  // Check if spot is defined
  if (!spot) {
    return (
      <div>
        <p>Error: Spot data is undefined</p>
      </div>
    );
  }

  // Destructure spot object
  const {
    image,
    touristsSpotName,
    countryName,
    location,
    shortDescription,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
    userEmail,
    userName,
  } = spot;

  return (
    <div>
      <h1>{touristsSpotName}</h1>
      <img src={image} alt={touristsSpotName} />
      <p>Country: {countryName}</p>
      <p>Location: {location}</p>
      <p>Description: {shortDescription}</p>
      <p>Average Cost: {averageCost}</p>
      <p>Seasonality: {seasonality}</p>
      <p>Travel Time: {travelTime}</p>
      <p>Total Visitors Per Year: {totalVisitorsPerYear}</p>
      <p>User Email: {userEmail}</p>
      <p>User Name: {userName}</p>
    </div>
  );
};

export default ViewDetailsPage;
