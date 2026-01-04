import React from 'react'
import dark from './dark.jpeg'
import './Adventures.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const activities = [
  { title: "White-water river rafting", location: "Rishikesh", description: "Bungee jumping, cliff jumping. Best adventure hub in North India", price: "4,500", rating: 4.9, image: "https://www.ragaontheganges.com/assets/img/blog/adventure-activities-in-rishikesh/adventure-in-rishikesh.jpg", to: "/bookings" },
  { title: "High-altitude bike rides", location: "Leh-Ladakh", description: "Off-roading, mountain passes. One of the toughest terrains in India", price: "25,000", rating: 4.8, image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png%2Cf_jpg%2Cfl_progressive%2Cq_auto%2Cw_1024/67dbbb280b0239001dcc1a38.jpg", to: "/bookings" },
  { title: "World-famous paragliding", location: "Bir Billing", description: "Longest & safest flights in India. Perfect for thrill + scenic views", price: "3,500", rating: 4.9, image: "https://imgcld.yatra.com/ytimages/image/upload/v1517481370/AdvNation/ANN_TRP513/Paragliding-in-India_1438933021_5FIJFm.jpg", to: "/bookings" },
  { title: "Scuba diving & snorkeling", location: "Andaman Islands", description: "Deep-sea adventure, coral reefs. Best underwater experience in India", price: "7,000", rating: 4.7, image: "https://www.diveandaman.com/storage/ck/220225104057-Top%20Places%20for%20Snorkelling%20in%20the%20Andaman%20Islands.jpg", to: "/bookings" },
  { title: "Bungee, Skydiving, Jet boating", location: "Queenstown", description: "Known as the Adventure Capital of the World", price: "28,000", rating: 4.99, image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/6c/44/fd.jpg", to: "/bookings" },
  { title: "Paragliding, Skydiving", location: "Interlaken", description: "Adventure with stunning Alpine views", price: "32,000", rating: 4.95, image: "https://cdn-imgix.headout.com/tour/26423/TOUR-IMAGE/8c309e0a-e86e-4186-8cda-81577421be24-13884-interlaken-interlaken-paragliding-experience---big-blue-01.jpg", to: "/bookings" },
  { title: "Desert Safari, Dune Bashing", location: "Dubai Desert", description: "Extreme adventure in a luxury setting", price: "12,000", rating: 4.8, image: "https://www.dayoutdubai.ae/blog/wp-content/uploads/2019/05/shutterstock_217237831.jpg", to: "/bookings" },
  { title: "Shark Cage Diving", location: "Cape Town", description: "One of the most thrilling ocean adventures", price: "22,000", rating: 4.7, image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/53/8b/46.jpg", to: "/bookings" },
  { title: "Giant sand dune climbing", location: "Sossusvlei", description: "Extreme desert adventure", price: "18,000", rating: 4.8, image: "https://artofsafari.travel/wp-content/uploads/2017/02/BANNER-iStock_Namibia_NaukluftNationalPark_LandscapeSossusvleiDune.jpg", to: "/bookings" },
  { title: "Devil’s Pool swim", location: "Victoria Falls", description: "One of the most thrilling waterfalls", price: "15,000", rating: 4.9, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/83/48/bf/the-edge-of-the-world.jpg", to: "/bookings" },
  { title: "Desert camping", location: "Sahara Desert", description: "Survival-style adventure", price: "24,000", rating: 4.6, image: "https://cdn.kimkim.com/files/a/images/e73e33261c705a1188fe75606fdc857808ad4c5b/big-e698626565b48bc64f08d110b8dd59a8.jpg", to: "/bookings" },
  { title: "Active volcano hiking", location: "Iceland", description: "Lava fields & extreme terrain", price: "45,000", rating: 4.95, image: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/03/23/4fa8c78b-2994-4f0d-ae73-b5908a6ec305_c12a11db.jpg", to: "/bookings" },
  { title: "Snorkeling with sharks", location: "Galápagos Islands", description: "Wildlife adventure (very trending)", price: "35,000", rating: 4.9, image: "https://galakiwi.com/blog/wp-content/uploads/2016/05/L3B5345-kicker-rock-shark-snorkel-750x500.jpg", to: "/bookings" },
  { title: "Mountain biking, skiing", location: "Whistler", description: "World-famous extreme sports hub", price: "20,000", rating: 4.85, image: "https://www.bigwhite.com/sites/default/files/2023-05/Summer-Bike-Downhill-buddy-rides-1000x1200px.jpg", to: "/bookings" },
  { title: "Sandboarding, salt flats", location: "Atacama Desert", description: "One of the driest places on Earth", price: "14,000", rating: 4.7, image: "https://wowiwalkers.com/wp-content/uploads/2021/05/sandboardingsanpedrodeatacamachile-2.jpg", to: "/bookings" },
  { title: "Ice expeditions", location: "Antarctica", description: "Ultimate extreme travel destination ❄️", price: "95,000", rating: 5.0, image: "https://cdn.adventure-life.com/26/7/11538493745m8427/1300x820.webp", to: "/bookings" }
];

const Thrillers = () => {
  const navigate = useNavigate();

  const ActivityCard = ({ image, location, price, rating, title, description, to }) => (
    <div className="adv-card-wrapper">
      <div className="adv-media-box" onClick={() => navigate(to)}>
        <img src={image} alt={title} className="adv-main-img" />
        <div className="adv-cost-tag">₹{price}</div>
      </div>
      <div className="adv-details-area">
        <div className="adv-meta-row">
          <span className="adv-geo-label">{location}</span>
          <span className="adv-score-val">⭐ {rating}</span>
        </div>
        <h3 className="adv-heading-text">{title}</h3>
        <p className="adv-summary-body">{description}</p>
        <button className="adv-action-btn" onClick={() => navigate(to)}>Book Now</button>
      </div>
    </div>
  );

  return (
    <div>

      {/* HERO */}
      <div style={{ width: "1533px", height: "690px", position: "relative", overflow: "hidden" }}>
        <img src={dark} alt="thriller" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(3.5rem,10vw,8rem)", fontWeight: "900", fontStyle: "italic", color: "white" }}>
            FEAR IS THE <br /> <span style={{ color: "#ea580c" }}>DESTINATION</span>
          </h1>
          <p style={{ color: "white", fontSize: "20px", fontWeight: "300" }}>
            Access the world's most high-stakes travel experiences.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="adv-root-container">
        <div className="adv-layout-grid">
          {activities.map((a, i) => <ActivityCard key={i} {...a} />)}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="thr-footer">
        <div className="thr-footer-container">
          <div className="thr-footer-col">
            <h2 className="thr-footer-logo">PRIMORIS</h2>
            <p>Fear isn’t the end — it’s the beginning.</p>
          </div>

          <div className="thr-footer-col">
            <h4>Explore</h4>
            <ul>
              <li>Extreme Adventures</li>
              <li>Survival Experiences</li>
              <li>Dark Destinations</li>
            </ul>
          </div>

          <div className="thr-footer-col">
            <h4>Contact</h4>
            <div className="thr-socials">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaEnvelope />
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Thrillers;
