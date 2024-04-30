import { useState, useEffect } from 'react';
import TouristSpotCard from './TouristSportCard';

const AllTouristSpot = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortBy, setSortBy] = useState('averageCost');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchTouristSpots();
  }, []);

  const fetchTouristSpots = async () => {
    try {
      const response = await fetch('http://localhost:5000/euroExplorer');
      const data = await response.json();
      setTouristSpots(data);
    } catch (error) {
      console.error('Error fetching tourist spots:', error);
    }
  };
 console.log(touristSpots )
  const handleSortChange = (e) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const handleSortOrderChange = (e) => {
    const { value } = e.target;
    setSortOrder(value);
  };

  const sortedTouristSpots = [...touristSpots].sort((a, b) => {
    const aValue = parseFloat(a[sortBy]);
    const bValue = parseFloat(b[sortBy]);
    return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
  });

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <label className="mr-2">Sort By:</label>
          <select value={sortBy} onChange={handleSortChange}>
            <option value="averageCost">Average Cost</option>
            <option value="totalVisitorsPerYear">Total Visitors Per Year</option>
            <option value="travelTime">Travel Time</option>
            <option value="seasonality">Seasonality</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="mr-2">Sort Order:</label>
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {sortedTouristSpots.map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
