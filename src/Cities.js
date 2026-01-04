import React from "react";
import "./Cities.css";
import { useNavigate } from 'react-router-dom';

const Cities = () => {
  const navigate =useNavigate()
  const topCities = [
    {
      name: "Paris",
      price: "₹22,000",
      img: "https://wallpapers.com/images/hd/paris-at-night-szofqt6azsigwlni.jpg",
      to:'/bookings'
    },
    {
      name: "New York",
      price: "₹24,500",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg", to:'/bookings'
    },
    {
      name: "Dubai",
      price: "₹21,000",
      img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1760437946/destination/vovea0rrgjojr9pgdp7b.jpg",to:'/bookings'
    },
    {
      name: "London",
      price: "₹23,000",
      img: "https://t3.ftcdn.net/jpg/02/95/81/28/360_F_295812807_G3J8VXdgrMcACp74ISP6ev97F8IGQ2LX.jpg",to:'/bookings'
    },
    {
      name: "Tokyo",
      price: "₹25,000",
      img: "https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg",to:'/bookings'
    }
  ];

  return (
     <div>
    <div className="cities-app">

      {/* HERO */}
      <section className="cities-hero">
        <img
          
          className="cities-hero-img"
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2"
          alt="Luxury Cities"
        />

        <div className="cities-hero-content">
          <h1>Visit World Best Cities</h1>
          <p>With Our Premium Travel Experiences</p>
        </div>
      </section>

      {/* TOP CITIES */}
      <section className="cities-section">
        <h2 className="cities-title">Best View Cities</h2>

        <div className="cities-row">
          {topCities.map((city, i) => (
            <div onClick={()=>{navigate(city.to)}} className="cities-card" key={i}>
              <img src={city.img} alt={city.name} />
              <div className="cities-card-overlay">
                <h3>{city.name}</h3>
                <span>{city.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>


    {/* ================= NEAR BY YOU ================= */}
<section className="cities-nearby">
  <h2 className="cities-heading">Near By You</h2>

  <div className="cities-nearby-grid">
    {[
      { name: "Hyderabad", off: "30% OFF", price: "₹8,500", img: "https://cdn.pixabay.com/photo/2017/03/27/13/25/city-2178705_1280.jpg" ,to:'/bookings' },
      { name: "Bangalore", off: "25% OFF", price: "₹9,000", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2" ,to:'/bookings'},
      { name: "Chennai", off: "20% OFF", price: "₹7,500", img: "https://media.istockphoto.com/id/469550423/photo/chennai-nightscape.jpg?s=612x612&w=0&k=20&c=ZcUQgu91G7Z31ru3UPVPWhwaPJYmLEHyln8iyXQgPX8=" ,to:'/bookings'},
      { name: "Mumbai", off: "35% OFF", price: "₹10,000", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",to:'/bookings' },
      { name: "Pune", off: "28% OFF", price: "₹8,200", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2" ,to:'/bookings'},
      { name: "Goa", off: "22% OFF", price: "₹7,800", img: "https://media.istockphoto.com/id/1190001746/photo/beauty-of-the-mighty-cable-stayed-bridge-in-panjim-goa.jpg?s=612x612&w=0&k=20&c=BkI7y5ALN9aHhyxUsKdoY99uHsOVxBBNJeVAqoLveKA=",to:'/bookings' }
    ].map((c, i) => (
      <div key={i} onClick={()=>{navigate(c.to)}} className="cities-nearby-card" style={{ backgroundImage: `url(${c.img})` }}>
        <span className="cities-off">{c.off}</span>
        <div className="cities-nearby-info">
          <h3>{c.name}</h3>
          <p>{c.price}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ================= VISIT BEST CITIES ================= */}
<section className="cities-visit">
  <h2 className="cities-heading">Visit Best Cities</h2>

  <div className="cities-visit-grid">
    {[
      { name: "Delhi", price: "₹12,000", img: "https://shahdeep50.wordpress.com/wp-content/uploads/2013/05/bahais-monument-the-lotus-temple-delhi.jpg",to:'/bookings' },
      { name: "Kolkata", price: "₹11,000", img: "https://media.istockphoto.com/id/1190475811/photo/rush-in-the-city.jpg?s=612x612&w=0&k=20&c=PKpWSnamJ8tjwCcRE1xFnc8n14Pv0u3ahDzNFuGIPa4=" ,to:'/bookings'},
      { name: "Rome", price: "₹22,000", img: "https://www.opodo.co.uk/blog/wp-content/uploads/sites/12/2024/02/rome_view.jpg" ,to:'/bookings'},
      { name: "Bangkok", price: "₹19,500", img: "https://www.flygresor.se/pictures/destination/thailand/bangkok/highres/landscape/billiga-resor-till-bangkok-10.jpg" ,to:'/bookings'}
    ].map((c, i) => (
      <div key={i} onClick={()=>{navigate(c.to)}} className="cities-visit-card">
        <img src={c.img} alt={c.name} />
        <div className="cities-visit-info">
          <h3>{c.name}</h3>
          <span>{c.price}</span>
        </div>
      </div>
    ))}
  </div>
</section>


  <footer className="cities-footer">

      {/* TOP GRID */}
      <div className="cities-footer-grid">

        {/* MOST SEARCHED */}
        <div className="cities-footer-col">
          <h4>🔍 Most Searched on Primoris</h4>
          <p>
            Summer Flash Sale | Honeymoon Packages | Adventure Treks | Solo Travel Guide |
            Corporate Offsites | Last Minute Deals | Luxury Cruises | Visa Assistance |
            Travel Insurance | International Flight Booking | Resort Stays |
            Weekend Getaways | Group Tours | Student Discounts |
            Winter Expeditions | Eco-Tourism | Pilgrimage Tours
          </p>
        </div>

        {/* PARTNERS */}
        <div className="cities-footer-col">
          <h4>🌍 Our Global Travel Partners</h4>

          <div className="cities-footer-partners">
            <span>✈️ Indigo</span>
            <span>✈️ Emirates</span>
            <span>✈️ Qatar Airways</span>
            <span>✈️ Air India</span>
            <span>✈️ Singapore Airlines</span>
            <span>✈️ Lufthansa</span>
            <span>✈️ British Airways</span>
          </div>

          <div className="cities-footer-partners">
            <span>🏨 Marriott</span>
            <span>🏨 Hilton</span>
            <span>🏨 Hyatt</span>
            <span>🏨 Taj Hotels</span>
            <span>🏨 Airbnb</span>
            <span>🏨 Radisson</span>
            <span>🏨 OYO</span>
          </div>

          <div className="cities-footer-partners">
            <span>🚌 RedBus</span>
            <span>🚕 Uber</span>
            <span>🚗 ZoomCar</span>
            <span>🚗 Ola</span>
            <span>🚆 Eurail Pass</span>
            <span>🚄 Shinkansen</span>
            <span>🚆 National Rail</span>
          </div>
        </div>

        {/* POLICIES */}
        <div className="cities-footer-col">
          <h4>📜 Primoris Booking Policies & Guidelines</h4>
          <p>
            Primoris acts solely as a travel booking and facilitation platform
            for city tours, intercity transport, hotels, buses, cars, and mini vans.
            Participation in city exploration, adventure activities, high-altitude travel,
            and nature-based experiences involves inherent risks.
          </p>

          <p>
            In the event of injury, accident, illness, loss, or death occurring during travel,
            Primoris shall not be held legally or financially responsible.
            Travelers undertake all journeys at their own risk.
          </p>

          <p>
            Primoris provides access to third-party travel insurance where applicable.
            Insurance coverage is governed by the respective provider’s terms and conditions.
            Primoris does not guarantee personal safety, health outcomes, or life protection.
          </p>

          <p className="cities-footer-warning">
            ⚠️ Travelers are advised to assess physical fitness, weather conditions,
            local regulations, visa rules, and safety advisories before booking.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="cities-footer-bottom">
        <span>© 2026 Primoris Travels</span>
        <span>All Rights Reserved</span>
        <span>Built for Global City Explorers 🌍</span>
      </div>

    </footer>

    </div>
  );
};

export default Cities;
