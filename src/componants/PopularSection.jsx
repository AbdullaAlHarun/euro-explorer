

const PopularSection = () => {
  return (
    <section id="popular" className="flex justify-center items-center py-12">
      <div className="popular-left max-w-3xl mx-4">
        <h2 className="popular-heading text-4xl font-bold mb-4">Our Popular Tours</h2>
        <p className="popular-description text-lg mb-6">
          Embark on a journey of unparalleled adventure with our Exotic Escapes category. Indulge your wanderlust and explore the worlds most breathtaking destinations, each carefully curated to deliver a once-in-a-lifetime experience.
        </p>
        <div className="description-list mb-6">
          <ul>
            <li className="text-lg mb-2">
              Uncover hidden paradises that await your discovery. From the lush rainforests of Costa Rica to the surreal landscapes of Morocco, our Exotic Escapes take you off the beaten path to places where natures wonders and rich histories converge.
            </li>
            <li className="text-lg mb-2">
              Experience luxury redefined with our handpicked selection of accommodations. Indulge in opulent resorts, boutique hotels, and exclusive retreats that elevate your travel experience to new heights.
            </li>
            <li className="text-lg">
              For thrill-seekers and adrenaline junkies, our Exotic Escapes offer a plethora of adventurous activities. From snorkeling in the crystalline waters of the Maldives to trekking through the majestic peaks of the Himalayas.
            </li>
          </ul>
        </div>
        <p className="popular-description text-lg mb-6">
          Whether you are a seasoned traveler or a first-time explorer, let us be your passport to extraordinary experiences. Book your dream getaway today and let the adventure begin!
        </p>
        <button className="btn  py-2 px-6 text-lg">Read More</button>
      </div>
      <div className="popular-right">
        <img src="/src/assets/popular.png" alt="popular destination picture" className="w-full" />
      </div>
    </section>
  );
};

export default PopularSection;
