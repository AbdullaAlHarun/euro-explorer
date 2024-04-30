import Swal from 'sweetalert2';

const AddTouristSpot = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const touristsSpotName = form.tourists_spot_name.value;
    const countryName = form.country_name.value;
    const location = form.location.value;
    const shortDescription = form.short_description.value;
    const averageCost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travel_time.value;
    const totalVisitorsPerYear = form.total_visitors_per_year.value;
    const userEmail = form.user_email.value;
    const userName = form.user_name.value;

    const newTouristSpot = {
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
    };

    console.log(newTouristSpot);

    // Send data to the server
    fetch('http://localhost:5000/euroExplorer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTouristSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedID) {
          Swal.fire({
            title: 'Success!',
            text: 'Tourist Spot Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          form.reset();
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <section className="p-6 bg-gray-100 text-gray-900">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="text-3xl text-blue-800 font-extrabold text-center">
            Add New Tourist Spot
          </p>
          <p className="text-xl text-center">
            Share Your Favorite Spots with Fellow Travelers
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-6"
        >
          <fieldset className="grid grid-cols-2 lg:w-1/2 sm:w-full mx-auto mt-8 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
            <div className="col-span-full">
              <label htmlFor="image" className="text-sm">
                Image URL
              </label>
              <input
                id="image"
                name="image"
                type="url"
                placeholder="Image URL"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="tourists_spot_name" className="text-sm">
                Tourists Spot Name
              </label>
              <input
                id="tourists_spot_name"
                name="tourists_spot_name"
                type="text"
                placeholder="Tourists Spot Name"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="country_name" className="text-sm">
                Country Name
              </label>
              <input
                id="country_name"
                name="country_name"
                type="text"
                placeholder="Country Name"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Location"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="short_description" className="text-sm">
                Short Description
              </label>
              <textarea
                id="short_description"
                name="short_description"
                rows="3"
                placeholder="Short Description"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="average_cost" className="text-sm">
                Average Cost (Euro)
              </label>
              <input
                id="average_cost"
                name="average_cost"
                type="number"
                placeholder="Average Cost"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="seasonality" className="text-sm">
                Seasonality
              </label>
              <input
                id="seasonality"
                name="seasonality"
                type="text"
                placeholder="Seasonality"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="travel_time" className="text-sm">
                Travel Time
              </label>
              <input
                id="travel_time"
                name="travel_time"
                type="text"
                placeholder="Travel Time"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="total_visitors_per_year" className="text-sm">
                Total Visitors Per Year
              </label>
              <input
                id="total_visitors_per_year"
                name="total_visitors_per_year"
                type="number"
                placeholder="Total Visitors Per Year"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="user_email" className="text-sm">
                User Email
              </label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="User Email"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="user_name" className="text-sm">
                User Name
              </label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="User Name"
                className="w-full p-1 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-blue-400 border-gray-700"
                required
              />
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="btn btn-block bg-blue-500 hover:bg-blue-600 text-white"
              >
                Add
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;

