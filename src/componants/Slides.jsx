import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slides = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide slide1 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
                Discover the Beauty of Paris
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
              Explore the iconic landmarks, charming streets, and rich culture of the City of Light
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
            Explore Paris
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide2 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
              Experience the Magic of Rome
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
              Immerse yourself in the ancient history, delicious cuisine, and vibrant atmosphere of the Eternal City.
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
            Discover Rome
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
              Journey Through the Stunning Landscapes of Switzerland
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
              Discover the breathtaking mountains, pristine lakes, and picturesque villages of Switzerland.
              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
            Explore Switzerland
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4 flex-col text-center">
            <h1 className="text-4xl text-white font-bold">
              <span className="bg-gray-200 bg-opacity-50 text-black p-4 rounded-md">
              Discover the Majestic Fjords of Norway
              </span>
            </h1>
            <p className="max-w-[450px] text-center flex mx-auto py-8">
              <span className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-md">
              Embark on a journey through the breathtaking fjords, rugged mountains, and serene landscapes of Norway.              </span>
            </p>
            <button className="btn bg-[#a90f33] text-white w-auto flex mx-auto">
              Discover Norway
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
