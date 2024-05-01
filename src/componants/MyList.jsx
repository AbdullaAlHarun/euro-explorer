import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MyList = ({ userEmail }) => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    // Fetch user's tourist spots data from the database
    const fetchTouristSpots = async () => {
      try {
        const response = await axios.get(`https://euro-explorer-server.vercel.app/euroExplorer?userEmail=${userEmail}`);
        setTouristSpots(response.data);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchTouristSpots();
  }, [userEmail]);

  const handleUpdate = (id) => {
    // Handle update functionality
    console.log('Update tourist spot with id:', id);
  };

 
  const handleDelete = async (id) => {
    // Show SweetAlert2 confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this tourist spot!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });
  
    // If user confirms deletion
    if (result.isConfirmed) {
      try {
        await axios.delete(`https://euro-explorer-server.vercel.app/euroExplorer/${id}`);
        setTouristSpots(prevSpots => prevSpots.filter(spot => spot._id !== id));
        Swal.fire(
          'Deleted!',
          'Tourist spot has been deleted successfully.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting tourist spot:', error);
        Swal.fire(
          'Error!',
          'Failed to delete tourist spot. Please try again later.',
          'error'
        );
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Your Tourist Spots</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {touristSpots.map(spot => (
              <tr key={spot._id}>
                <td className="px-6 py-4 whitespace-nowrap">{spot.touristsSpotName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{spot.countryName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{spot.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleUpdate(spot._id)} className="text-indigo-600 hover:text-indigo-900 mr-2">Update</button>
                  <button onClick={() => handleDelete(spot._id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MyList.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default MyList;
