import React from 'react';
import './Mountains.css';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const App = () => {
  const Navigate = useNavigate();
  const nearbyDestinations = [
    {
      id: 1,
      name: "Horsley Hills",
      desc: "The Ooty of Andhra",
      price: "₹1000",
      rating: "4.5",
      img: "https://tripxl.com/blog/wp-content/uploads/2024/09/Kaigal-Falls-1.jpg",
    },
    {
      id: 2,
      name: "Yelagiri",
      desc: "Orchard valleys & rose gardens",
      price: "₹1250",
      rating: "4.2",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/23/b4/7f/view-of-the-town-below.jpg?w=1200&h=-1&s=1",
    },
    {
      id: 3,
      name: "Nallamala Forest",
      desc: "Deep woods & tiger reserves",
      price: "₹2000",
      rating: "4.7",
      img: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Seshachalam",
      desc: "Sacred peaks & waterfalls",
      price: "₹1500",
      rating: "4.6",
      img: "https://airial.travel/_next/image?url=https%3A%2F%2Fcoinventmediastorage.blob.core.windows.net%2Fmedia-storage-container%2Fgphoto_ChIJG5YPqvbLsjsR8udWbtPRWlU_0.jpg&w=3840&q=70",
    },
  ];

  // 2. Combo Packages (Bundles)
  const comboOffers = [
    {
      id: 1,
      name: "Himalayan Triangle",
      sub: "Darjeeling + Gulmarg + Shimla",
      price: "₹150",
      tag: "BEST SELLER",
      img: "https://lp-cms-production.imgix.net/2021-01/GettyRF_450207051.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    },
    {
      id: 2,
      name: "Summit Seeker",
      sub: "Swiss Alps + Aconcagua + Kilimanjaro",
      price: "₹5599",
      tag: "PREMIUM",
      img: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/32cfa085-5a31-48c2-bec8-46b887ac9428-views_great_wall_china.jpg",
    },
    {
      id: 3,
      name: "Pacific Ring",
      sub: "Denali + Fuji + Rockies",
      price: "₹5999",
      tag: "ADVENTURE",
      img: "https://media.istockphoto.com/id/1799795736/photo/aerial-view-of-rock-cliff-at-kawah-ijen-volcano-with-turquoise-sulfur-water-lake-at-sunrise.jpg?s=612x612&w=0&k=20&c=E3Zq1r-1DnK8OstKS8ZrRDwShoeGzGY6ni40shmYMA8=",
    },
    {
      id: 4,
      name: "Old World Peaks",
      sub: "Manali + Drakensberg + Carpathians",
      price: "₹4999",
      tag: "ECO TRIP",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 3. Popular Trips (International)
  const popularTrips = [
    { name: "Swiss Alps", price: "₹2999", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=1200&h=700&s=1" },
    { name: "Rocky Mountains", price: "₹4999", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1200px-Moraine_Lake_17092005.jpg" },
    { name: "Mount Fuji", price: "₹3999", img: "https://www.kevinandamanda.com/wp-content/uploads/2018/02/where-to-see-mount-fuji-japan-01.jpg" },
    { name: "Aconcagua", price: "₹2999", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Aconcagua_%28aerial%29.jpg "},
    { name: "Denali", price: "₹4999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BjggV5bWbgKAhBWSi7VW3jRGpGQN1_u_zw&s" },
    { name: "Kilimanjaro", price: "₹1999", img: "https://www.wayfairertravel.com/hubfs/Imported%20sitepage%20images/shutterstock_1999605182_bpl8nb.jpg" },
    { name: "Gulmarg", price: "₹999", img: "https://www.tusktravel.com/blog/wp-content/uploads/2023/09/Gulmarg-in-Winter-A-Comprehensive-Guide.jpg" },
    { name: "Darjeeling", price: "₹999", img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/e3/c1/8a.jpg" },
  ];
  return (
    <div className="travelmount-app-container">
      
      {/* Hero Section */}
      <section className="travelmount-hero">
        <div className="travelmount-hero-content">
          <div className="travelmount-hero-text">
            <h1>Majesty of the Mountains</h1>
            <p>Where the earth rises to meet the sky. Discover journeys that inspire courage, calm, and wonder.</p>
          </div>
          <div className="travelmount-hero-image-box">
             <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80" alt="Hero Mountain" />
          </div>
        </div>
      </section>

      {/* Section 1: Nearby (4 Columns) */}
      <section className="travelmount-section">
        <div className="travelmount-section-header">
          <h2>Hidden Gems Near You</h2>
          <p>Weekend getaways just a drive away.</p>
        </div>
        <div className="travelmount-grid">
          {nearbyDestinations.map((item, i) => (
            <div key={i} className="travelmount-card">
              <div className="travelmount-card-img">
                <img src={item.img} alt={item.name} />
                <span className="travelmount-rating">★ {item.rating}</span>
              </div>
              <div className="travelmount-card-body">
                <h3>{item.name}</h3>
                <p className="travelmount-desc">{item.desc}</p>
                <div className="travelmount-card-footer">
                  <span className="travelmount-price">{item.price}</span>
                  <button onClick={()=>{Navigate("/bookings")}} className="travelmount-btn-outline">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Combo Offers (Distinct Style) */}
      <section className="travelmount-section travelmount-bg-light">
        <div className="travelmount-section-header">
          <h2>Exclusive Bundles</h2>
          <p>Multi-destination experiences for the true explorer.</p>
        </div>
        <div className="travelmount-grid">
          {comboOffers.map((offer, i) => (
            <div key={i} className="travelmount-card travelmount-combo-card">
              <div className="travelmount-card-img">
                <img src={offer.img} alt={offer.name} />
                <span className="travelmount-badge">{offer.tag}</span>
              </div>
              <div className="travelmount-card-body">
                <h3>{offer.name}</h3>
                <p className="travelmount-sub">{offer.sub}</p>
                <div className="travelmount-card-footer">
                  <span className="travelmount-price-lg">{offer.price}</span>
                  <button onClick={()=>{Navigate("/bookings")}} className="travelmount-btn-primary">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Popular Trips (Grid of 8) */}
      <section className="travelmount-section">
        <div className="travelmount-section-header">
          <h2>Trending Peaks</h2>
          <p>The world's most requested mountain expeditions.</p>
        </div>
        <div className="travelmount-grid">
          {popularTrips.map((trip, i) => (
            <div key={i} className="travelmount-card">
              <div className="travelmount-card-img small">
                <img src={trip.img} alt={trip.name} />
              </div>
              <div className="travelmount-card-body compact">
                <div className="travelmount-flex-row">
                  <h3>{trip.name}</h3>
                  <span className="travelmount-price-sm">{trip.price}</span>
                </div>
                <button onClick={()=>{Navigate("/bookings")}} className="travelmount-btn-full">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
       <footer className="footer">

      {/* POLICY SECTION */}
      <section className="footer-section">
        <h3>Primoris Booking Policies & Guidelines</h3>
        <p>
          Primoris acts solely as a travel booking and facilitation platform.
          Participation in mountain expeditions, adventure treks, high-altitude
          travel, and nature-based activities involves inherent risks.
        </p>
        <p>
          In the event of injury, accident, illness, loss, or death occurring
          during travel or mountain activities, <strong>Primoris shall not be
          held legally or financially responsible</strong>. Travelers undertake
          such activities at their own risk.
        </p>
        <p>
          Primoris provides access to <strong>third-party travel insurance</strong>
          where applicable. Insurance coverage is subject to the terms and
          conditions of the insurance provider. Primoris does not guarantee
          personal safety, health outcomes, or life protection.
        </p>
        <p>
          Travelers are advised to assess physical fitness, weather conditions,
          local regulations, and safety advisories before booking.
        </p>
      </section>

      {/* MOST SEARCHED */}
      <section className="footer-section">
        <h4>Most Searched for on Primoris</h4>
        <p className="footer-links">
          Summer Flash Sale | Honeymoon Packages | Adventure Treks |
          Solo Travel Guide | Corporate Offsites | Last Minute Deals |
          Luxury Cruises | Visa Assistance | Travel Insurance |
          International Flight Booking | Resort Stays | Weekend Getaways |
          Group Tours | Student Discounts | Winter Expeditions |
          Eco-Tourism | Pilgrimage Tours
        </p>
      </section>

      {/* PARTNERS */}
      <section className="footer-section">
        <h4>Our Global Travel Partners</h4>

        <p><strong>Flights:</strong> Indigo | Emirates | Qatar Airways | Air India | Singapore Airlines | Lufthansa | British Airways</p>

        <p><strong>Hotels:</strong> Marriott | Hilton | Hyatt | Taj Hotels | Airbnb | Radisson | OYO</p>

        <p><strong>Transport:</strong> RedBus | Uber | Hertz | Avis | ZoomCar | Ola | FlixBus | Greyhound | National Rail | Eurail Pass | Shinkansen</p>
      </section>

      {/* PAYMENT + SOCIAL */}
      <section className="footer-bottom">

        <div className="payments">
          <h4>Secure Payments</h4>
          <p>
            UPI | Credit Cards | Debit Cards | Net Banking |
            Wallets | International Cards
          </p>
        </div>

        <div className="social">
          <h4>Connect with Primoris</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

      </section>

      {/* COPYRIGHT */}
      <div className="footer-copy">
        © {new Date().getFullYear()} Primoris Travel Technologies Pvt. Ltd.
        All rights reserved.
      </div>

    </footer>

    </div>
  );
}

export default App;