import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const UpdatePage = ({ _id }) => {
  const [formData, setFormData] = useState({
    image: '',
    touristsSpotName: '',
    countryName: '',
    location: '',
    shortDescription: '',
    averageCost: '',
    seasonality: '',
    travelTime: '',
    totalVisitorsPerYear: '',
  });

  // Fetch data for the current tourist spot when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://euro-explorer-server.vercel.app/euroExplorer/${_id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching tourist spot data:', error);
      }
    };

    fetchData();
  }, [_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://euro-explorer-server.vercel.app/euroExplorer/${_id}`, formData);
      console.log('Data updated:', response.data);
      Swal.fire({
        title: 'Success!',
        text: 'Tourist spot updated successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Error updating tourist spot:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update tourist spot. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div>
      <h2>Update Tourist Spot</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for each data field */}
        <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required />
        <input type="text" name="touristsSpotName" value={formData.touristsSpotName} onChange={handleChange} placeholder="Tourist Spot Name" required />
        <input type="text" name="countryName" value={formData.countryName} onChange={handleChange} placeholder="Country Name" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        <textarea name="shortDescription" value={formData.shortDescription} onChange={handleChange} rows="3" placeholder="Short Description" required />
        <input type="number" name="averageCost" value={formData.averageCost} onChange={handleChange} placeholder="Average Cost" required />
        <input type="text" name="seasonality" value={formData.seasonality} onChange={handleChange} placeholder="Seasonality" required />
        <input type="text" name="travelTime" value={formData.travelTime} onChange={handleChange} placeholder="Travel Time" required />
        <input type="number" name="totalVisitorsPerYear" value={formData.totalVisitorsPerYear} onChange={handleChange} placeholder="Total Visitors Per Year" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

UpdatePage.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default UpdatePage;
