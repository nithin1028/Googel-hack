import React from "react";
import "./Home.css";
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Homelogo from './Home.png'
import { useNavigate } from "react-router-dom";

// Reusable Travel Card Component
function TravelCard({ img, name, location, desc, rating }) {
  return (
    <div className="home-card-box">
      <div className="home-card-img-wrapper">
        <img src={img} alt={name} className="home-card-image" />
        <span className="home-card-rating">⭐ {rating}</span>
      </div>
      <div className="home-card-body">
        <h3 className="home-card-title">{name}</h3>
        <span className="home-card-location">{location}</span>
        <p className="home-card-desc">{desc}</p>
      </div>
    </div>
  );
}

// Data Arrays
const categories = [
  { title: "Beach Destinations", trips: "120+ trips", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" ,to:'/beaches' },
  { title: "Mountain Escapes", trips: "80+ trips", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",to:'/mountain' },
  { title: "Honeymoon Trips", trips: "60+ trips", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" ,to:'/forest'},
  { title: "Adventure Tours", trips: "90+ trips", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" ,to:'/mountains'},
  { title: "City Breaks", trips: "140+ trips", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" ,to:'/cities'},
  { title: "Luxury Retreats", trips: "50+ trips", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", to:'/luxuary'},
  { title: "foreign country ", trips: "140+ trips", img: "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Baku_destination_image_1_l_651_1000.jpg" ,to:'cities'},
  { title: "Historical place", trips: "50+ trips", img: "https://www.holidify.com/images/attr_square/2131.png",to:'historical' },
];

const transportOptions = [
  { title: "Car Rentals", trips: "Sedan • SUV • Hatchback", img: "https://auto.hindustantimes.com/cms-images/marutisuzuki_grandvitara/images/exterior_marutisuzuki-grand-vitara_front-right-side_1600x901.jpg" ,to:'/travels' },
  { title: "Bus Travel", trips: "AC • Non-AC • Sleeper", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXw-ev97XqGjK_zQYR1ZqWTSHn-uwdt4r4ZQ&s",to:'/travels' },
  { title: "Mini Van", trips: "Family • Group Travel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMFhqgZ2Iesn-SR8ziW0NVQXyVmBCLE_ERg&s",to:'/travels' },
  { title: "Tourist Buses", trips: "Luxury • Sightseeing", img: "https://devs.pearl-developer.com/sushma/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-04-at-1.22.03-PM.jpeg",to:'/travels' },
  { title: "Airport Transfers", trips: "Pickup • Drop", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyW40hQednuymVzzHkqpiODYqThvCvTxY5w&s",to:'/travels' },
  { title: "Luxury Vehicles", trips: "Premium • Chauffeur Driven", img: "https://news24online.com/wp-content/uploads/2023/08/New-Project-2023-08-08T213946.505.webp",to:'/travels' }
];

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="home-main-wrapper">
      
      {/* HERO SECTION */}
      <section className="home-hero-section">
        <div className="home-hero-overlay"></div>
        <div className="home-container home-hero-grid">
          
          <div className="home-hero-content">
            <p className="home-section-subtitle">Explore Your World</p>
            <h2 className="home-hero-title">Trusted Travel <br/>Agency</h2>
            <p className="home-hero-text">
              The world is a book and those who do not travel read only one page.
              Discover places you've never been before.
            </p>
          </div>

          <div className="home-hero-banner-wrapper">
             {/* Decorative Shapes */}
             <div className="home-shape home-shape-1"></div>
             <div className="home-shape home-shape-2"></div>
            <img
              src={Homelogo}
              alt="Hero Travel"
              className="home-hero-img"
            />
          </div>
        </div>
      </section>

      {/* TOP PLACES SECTION */}
      <section className="home-section-wrapper">
        <div className="home-container">
          <div className="home-header-center">
            <p className="home-sub-heading">Unmissable</p>
            <h2 className="home-section-title">Top Places to Visit</h2>
            <div className="home-title-line"></div>
          </div>

          <div className="home-grid-four">
            <div onClick={()=>{navigate('/beaches')}}>
                <TravelCard
              img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              name="Maldives" location="Indian Ocean" rating="4.8"
              desc="Crystal clear waters, luxury resorts and white sandy beaches."
            />
            </div>
            <div  onClick={()=>{navigate('/cities')}}>
            <TravelCard
              img="https://media.istockphoto.com/id/1498516775/photo/the-eiffel-tower-in-paris-france-at-sunset.jpg?s=612x612&w=0&k=20&c=V4StdESr6-QQWOjXm6R8b1T-_slWLxasMnN6SWdV9ko="
              name="Paris" location="France" rating="4.7"
              desc="Romantic city famous for art, fashion and iconic landmarks."
            />
            </div>
            <div  onClick={()=>{navigate('/cities')}}>
            <TravelCard
              img="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
              name="Bali" location="Indonesia" rating="4.6"
              desc="Tropical paradise with beaches, temples and rich culture."
            />
            </div>
            <div  onClick={()=>{navigate('/cities')}}>
            <TravelCard
              img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              name="Switzerland" location="Europe" rating="4.9"
              desc="Snowy mountains, lakes and scenic train journeys."
            />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE BY TYPE */}
      <section className="home-section-grey">
        <div className="home-container home-split-layout">
          {/* Grid Side */}
          <div className="home-split-content">
            <h2 className="home-section-title-left">Explore by Travel Type</h2>
            <div className="home-category-grid">
              {categories.map((c, i) => (
                <div className="home-category-card"  onClick={()=>{navigate(c.to)}}  key={i}>
                  <img src={c.img} alt={c.title} />
                  <div className="home-cat-overlay">
                    <h3>{c.title}</h3>
                    <span>{c.trips}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banner Side */}
          <div className="home-tall-banner-2">
            <img
              onClick={()=>{navigate('/tours')}}
              src="https://i.pinimg.com/236x/fa/8f/b0/fa8fb08d9d59de7ff660016c31e27523.jpg"
              alt="Travel inspiration"
              className="home-banner-bg"
            />
            <div className="home-banner-content">
              <h3>Plan Your Dream Vacation</h3>
              <p>Handpicked destinations • Best prices</p>
              <button  onClick={()=>{navigate('/beaches')}} className="home-btn-sm">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPORT OPTIONS */}
      <section className="home-section-wrapper">
        <div className="home-container home-split-layout reverse-mobile">
           {/* Banner Side (Left this time) */}
           <div className="home-tall-banner">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Transport"
              className="home-banner-bg"
              height="100"
            />
            <div className="home-banner-content">
              <h3>Book Your Ride</h3>
              <p>Reliable vehicles • Trusted operators</p>
              <button  onClick={()=>{navigate('/travels')}} className="home-btn-sm">Vehicles</button>
            </div>
          </div>

          {/* Grid Side */}
          <div className="home-split-content">
            <h2 className="home-section-title-left">Travel & Transport</h2>
            <div className="home-category-grid">
              {transportOptions.map((c, i) => (
                <div onClick={()=>{navigate(c.to)}} className="home-category-card" key={i}>
                  <img src={c.img} alt={c.title} />
                  <div className="home-cat-overlay">
                    <h3>{c.title}</h3>
                    <span>{c.trips}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS MASONRY */}
      <section className="home-dest-section">
        <div className="home-container">
          <div className="home-header-center">
             <p className="home-sub-heading">Destinations</p>
             <h2 className="home-dest-title">Choose Your Place</h2>
             <div className="home-title-line"></div>
          </div>

          <div className="home-dest-grid">
            {/* Item 1 */}
            <div  onClick={()=>{navigate('/tours')}} className="home-dest-item large-item">
              <div className="home-dest-card">
                <img src="https://www.thoughtco.com/thmb/mvzDYqXzP4T_D7JfMTsWm5GgDZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg" alt="Agra" className="home-dest-img"/>
                <div className="home-dest-content">
                  <p>Agra</p>
                  <h3>Taj Mahal</h3>
                </div>
              </div>
            </div>

             {/* Item 2 */}
             <div className="home-dest-item">
              <div  onClick={()=>{navigate('/tours')}} className="home-dest-card">
                <img src="https://blog.bangkokair.com/wp-content/uploads/2024/10/02_bangkok-travel-guide-thailand-capital.jpg" alt="Bangkok" className="home-dest-img"/>
                <div className="home-dest-content">
                  <p>Bangkok</p>
                  <h3>Thailand</h3>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="home-dest-item">
              <div   onClick={()=>{navigate('/tours')}}className="home-dest-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_DCKgE1IrsKecSxfRnf6QVDoH1tnlrEkgQ&s" alt="Malaysia" className="home-dest-img"/>
                <div className="home-dest-content">
                  <p>Kuala Lumpur</p>
                  <h3>Malaysia</h3>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="home-dest-item">
               <div  onClick={()=>{navigate('/tours')}} className="home-dest-card">
                <img src="https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1735561831%2Fkiomoi%2Fkathmandu_durbar_square_3376.jpg&w=3840&q=75" alt="Nepal" className="home-dest-img"/>
                <div className="home-dest-content">
                  <p>Kathmandu</p>
                  <h3>Nepal</h3>
                </div>
              </div>
            </div>

             {/* Item 5 */}
             <div className="home-dest-item">
               <div  onClick={()=>{navigate('/tours')}}className="home-dest-card">
                <img src="https://t3.ftcdn.net/jpg/00/50/30/48/360_F_50304834_e4kksdgl8qL3p1TBp7nrgfFu2bgVqSFK.jpg" alt="Indonesia" className="home-dest-img"/>
                <div className="home-dest-content">
                  <p>Jakarta</p>
                  <h3>Indonesia</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-container home-footer-content">
          <div className="home-footer-brand">
            <h2 className="home-brand-title">PriMoris</h2>
            <p>Explore the world. Travel beyond borders with the most trusted agency.</p>
          </div>

          <div className="home-footer-links">
            <h4>Discover</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="home-footer-social">
            <h4>Follow Us</h4>
            <div className="home-social-icons">
              <a href="https://google.com" className="home-soc-icon"><FaGoogle /></a>
              <a href="https://facebook.com" className="home-soc-icon"><FaFacebookF /></a>
              <a href="https://linkedin.com" className="home-soc-icon"><FaLinkedinIn /></a>
              <a href="https://instagram.com" className="home-soc-icon"><FaInstagram /></a>
              <a href="https://twitter.com" className="home-soc-icon"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="home-footer-bottom">
          <p>© {new Date().getFullYear()} PriMoris Travels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;