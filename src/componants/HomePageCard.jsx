import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePageCard = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    const fetchTouristSpots = async () => {
      try {
        const response = await axios.get('https://euro-explorer-server.vercel.app/euroExplorer');
        setTouristSpots(response.data);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchTouristSpots();
  }, []);

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Tourist Spots</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {touristSpots.map(spot => (
          <div key={spot._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-40 object-cover object-center" src={spot.image} alt={spot.touristsSpotName} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{spot.touristsSpotName}</h3>
              <p className="text-gray-600 mb-2">{spot.location}</p>
              <p className="text-gray-500">{spot.shortDescription}</p>
              <Link to={`/view-details/${spot._id}`} className="block mt-3 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageCard;
