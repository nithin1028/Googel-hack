import React from 'react';
import './Bookings.css';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaCcVisa, FaCcMastercard, FaGooglePay, FaApplePay, FaYoutube } from 'react-icons/fa';

const Bookings = () => {
  const navigate = useNavigate();

  const trip = {
    name: "Santorini Dream",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    price: 1499,
    discount: 200,
  };

  const suggestions = [
    { name: "Paris, France", img: "https://images.unsplash.com/photo-1639519309325-ec14bb05043e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWlmZmVsJTIwdG93ZXIlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww" },
    { name: "Kyoto, Japan", img: "https://media.istockphoto.com/id/1718159541/photo/toji-temple-illumination-in-springtime-kyoto-japan.jpg?s=612x612&w=0&k=20&c=IfRv56tKhcBSdVy0IZTMzsDUUkg1U2vNkwtYUQhmz6w=" },
    { name: "Bali, Indonesia", img: "https://static.independent.co.uk/2023/06/23/10/iStock-675172642.jpg?width=1200&height=1200&fit=crop" },
    { name: "Ramandhir ,Indian", img: "https://media.assettype.com/deccanherald%2F2025-10-29%2F0dhrpgmf%2Ffile7z1usc06jjqj2ln4jhw.jpg?w=undefined&auto=format%2Ccompress&fit=max" },
    { name: "Dubai, UAE", img: "https://files.virgool.io/upload/users/1521826/posts/n1zbg3tl5hs8/dcmyu5mqqcec.jpeg" }
  ];

  return (
    <div className="booking-page-container">
      {/* SECTION 1: MAIN BOOKING CARD */}
      <div className="booking-wrapper">
        <div className="booking-card">
          <div className="image-side">
            <div className="image-container">
              <img src={trip.image} alt={trip.name} className="optimized-img" />
            </div>
            <div className="left-actions">
              <button onClick={() => { navigate('/tours') }} className="secondary-action">← Back to Explore</button>
              <p className="image-caption">Includes 5 nights & 6 days</p>
            </div>
          </div>

          <div className="content-side">
            <div className="header-info">
              <span className="category-tag">Limited Offer</span>
              <h1>{trip.name}</h1>
            </div>
            <div className="price-section">
              <div className="price-box">
                <span className="label">Total Price</span>
                <div className="price-flex">
                  <h2 className="main-price">₹{trip.price - trip.discount}</h2>
                  <span className="old-price">₹{trip.price}</span>
                </div>
              </div>
              <div className="discount-tag">Save ₹{trip.discount} Today</div>
            </div>
            <div className="offer-list">
              <h4>Bank Benefits</h4>
              <div className="offer-item">💳 10% Instant Discount on Google Pay</div>
              <div className="offer-item">🛡️ Free Travel Insurance Included</div>
            </div>
            <button onClick={()=>{navigate('/bookingdetails')}} className="primary-booking-btn">Confirm Booking</button>
          </div>
        </div>
      </div>

      {/* SECTION 2: SUGGESTIONS */}
      <div className="prm-suggestions-container">
        <h2 className="prm-section-title">Popular Destinations for You</h2>
        <div className="prm-scroll-area">
          {suggestions.map((item, i) => (
            <div key={i} className="prm-place-card">
              <img src={item.img} alt={item.name} className="prm-card-img" />
              <div className="prm-card-overlay">
                <p>{item.name}</p>
                <button className="prm-book-btn">Book Trip</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: PROFESSIONAL POLICY & PARTNERS (IMAGE STYLE) */}
      <div className="prm-details-text-block">
        <div className="prm-text-section">
          <h3>Primoris Booking Policies & Guidelines</h3>
          <p>MOST SEARCHED FOR ON PRIMORIS: Summer Flash Sale | Honeymoon Packages | Adventure Treks | Solo Travel Guide | Corporate Offsites | Last Minute Deals | Luxury Cruises | Visa Assistance | Travel Insurance | International Flight Booking | Resort Stays | Weekend Getaways | Group Tours | Student Discounts | Winter Expeditions | Eco-Tourism | Pilgrimage Tours.</p>
        </div>

        <div className="prm-text-section">
          <h3>Our Global Travel Partners</h3>
          <p>FLIGHTS: Indigo | Emirates | Qatar Airways | Air India | Singapore Airlines | Lufthansa | British Airways. HOTELS: Marriott | Hilton | Hyatt | Taj Hotels | Airbnb | Radisson | OYO. TRANSPORT: RedBus | Uber | Hertz | Avis | ZoomCar | Ola | FlixBus | Greyhound | National Rail | Eurail Pass | Shinkansen.</p>
        </div>
      </div>

      {/* SECTION 4: FULL WIDTH FOOTER */}
      <footer className="prm-full-footer">
        <div className="prm-footer-grid">
          <div className="prm-footer-col">
            <h4>ABOUT COMPANY</h4>
            <p>Primoris is a world-leading travel technology platform. We simplify the way you explore the world with seamless booking and 24/7 support.</p>
            <div className="prm-social-icons">
              <FaInstagram /> <FaTwitter /> <FaFacebook /> <FaLinkedin /> <FaYoutube />
            </div>
          </div>
          <div className="prm-footer-col">
            <h4>HELP & SUPPORT</h4>
            <ul>
              <li>Track Booking</li>
              <li>Cancel Trip</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              </ul>
            </div>
          <div className="prm-footer-col">
            <h4>PAYMENT METHODS</h4>
            <div className="prm-payment-icons">
              <FaGooglePay /> <FaCcVisa /> <FaCcMastercard /> <FaApplePay />
            </div>
            <p className="prm-security-text">100% Safe & Secure Payments</p>
          </div>
        </div>
        <div className="prm-footer-bottom">
          <p>© 2026 Primoris Travels Private Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Bookings;