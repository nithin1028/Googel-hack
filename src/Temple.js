import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Temple.css';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, 
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay, 
  FaPlane, FaHotel, FaBus 
} from 'react-icons/fa';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';


// --- Data Arrays (Kept as provided, with minor fixes) ---
const destinationst = [
  { name: "Tirumala", price: "Package: ₹8k–₹9k", Duration: "1–2 days", img: "https://wallpapers.com/images/hd/tirupati-balaji-evening-temple-u5jye4arrupbhb6v.jpg" },
  { name: "Sri Kalahasti", price: "Package: ₹1k", Duration: "1 day", img: "https://temple.yatradham.org/public/Product/temple/temple_Lq2dSVqU_202507101609140.webp" },
  { name: "CSI Zion", price: "Package: ₹2k–₹3k", Duration: "1 day", img: "https://content.jdmagicbox.com/v2/comp/bangalore/c2/080p1234465036f8j1c2/catalogue/csi-zion-church-magadi-road-bangalore-churches-vqegukuzbl.jpg" },
  { name: "Jama Masjid", price: "Package: ₹12k–₹13k", Duration: "1 day", img: "https://cdn.britannica.com/09/189809-050-FAC505B0/Jama-Masjid-Delhi.jpg" },
];

const destinationsofft = [
  { name: "Dwaraka, Jerusalem, Vatican", price: "Package: ₹1.2L–₹1.25L", Duration: "10–12 days", img: "https://cdn.britannica.com/09/189809-050-FAC505B0/Jama-Masjid-Delhi.jpg" },
  { name: "Kedarnath, Badrinath", price: "Package: ₹49k–₹50k", Duration: "5–6 days", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg" },
  { name: "Rome, Istanbul", price: "Package: ₹1.45L–₹1.5L", Duration: "8–10 days", img: "https://media.istockphoto.com/id/509628540/photo/sagrada-familia-barcelona-spain.jpg?s=612x612&w=0&k=20&c=Wcmb2q7rhc_O4ab6HQhf_lqDeqe7b5pfoFIJXYxEikw=" },
  { name: "Mixed Faith in Bali", price: "Package: ₹49k–₹50k", Duration: "5–6 days", img: "https://www.uluwatukecakdance.com/wp-content/uploads/Kawasan-Wisata-Pura-di-Uluwatu.jpg" },
];

const destinationspopt = [
  { name: "Kedarnath", price: "Package: ₹32k–₹33k", Duration: "3–4 days", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg" },
  { name: "Sagrada Familia", price: "Package: ₹1.65L–₹1.66L", Duration: "3–4 days", img: "https://media.istockphoto.com/id/509628540/photo/sagrada-familia-barcelona-spain.jpg?s=612x612&w=0&k=20&c=Wcmb2q7rhc_O4ab6HQhf_lqDeqe7b5pfoFIJXYxEikw=" },
  { name: "Mecca, Madina", price: "Package: ₹24k–₹25k", Duration: "5–6 days", img: "https://gdb.voanews.com/77615968-4661-4f98-ae96-e688481dd3c9_cx0_cy1_cw0_w1080_h608_s.jpg" },
  { name: "Pashupatinath", price: "Package: ₹49k–₹50k", Duration: "2–3 days", img: "https://t4.ftcdn.net/jpg/02/39/78/31/360_F_239783155_1FaMnF4ozdvSTg29iyNMSBhXD7fisNok.jpg" },
  { name: "Varanasi", price: "Package: ₹24k–₹25k", Duration: "2–3 days", img: "https://www.wildernesstravel.com/wp-content/uploads/2024/11/varanasi-ganges-river-india-1680x826.jpg" },
  { name: "Pura Uluwatu", price: "Package: ₹66k–₹67k", Duration: "3-4 days", img: "https://www.uluwatukecakdance.com/wp-content/uploads/Kawasan-Wisata-Pura-di-Uluwatu.jpg" },
  { name: "Dwaraka", price: "Package: ₹24k–₹25k", Duration: "2-3 days", img: "https://mantrayatra.com/wp-content/uploads/2024/12/4-636x426.png" },
  { name: "Jerusalem", price: "Package: ₹1.24L–₹1.25L", Duration: "4-5 days", img: "https://i0.wp.com/www.touristjordan.com/wp-content/uploads/2017/10/Dome-of-the-Rock-Tourist-Israel.jpg?fit=1024%2C577&ssl=1" },
];

const Temples = () => {
  const navigate = useNavigate()
  return (
    <div className='temple-body '>
    <div className="travel-page">
      
      {/* 1. Hero / Banner Section */}
      <section className="hero-section fade-in-up">
        <div className="hero-image-wrapper">
          <img
            src="https://img.freepik.com/premium-photo/temple-with-tree-background_1271244-167157.jpg"
            alt="Spiritual Journey"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Discover Spiritual & Scenic Wonders</h1>
          <p>
            Explore the most sacred temples, majestic mountains, and iconic places of worship around the world. 
            Your journey of faith and adventure begins with Primoris.
          </p>
        </div>
      </section>

      {/* 2. Section: Near by Me */}
      <section className="category-section">
        <h2 className="section-title">Near by Me</h2>
        <div onClick={()=>{navigate('/bookings')}} className="card-grid">
          {destinationst.map((item, index) => (
            <TravelCard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* 3. Section: Combo Offers */}
      <section className="category-section">
        <h2 className="section-title">Exclusive Combo Offers</h2>
        <div onClick={()=>{navigate('/bookings')}} className="card-grid">
          {destinationsofft.map((item, index) => (
            <TravelCard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* 4. Section: Popular Trips */}
      <section className="category-section">
        <h2 className="section-title">Popular Trips</h2>
        <div onClick={()=>{navigate('/bookings')}} className="card-grid">
          {destinationspopt.map((item, index) => (
            <TravelCard key={index} data={item} />
          ))}
        </div>
      </section>

      {/* 5. Policy Section */}
      <section className="policy-section">
        <h2 className="section-title">Our Policies</h2>
        <div className="policy-container">
          <div className="policy-card">
            <h3>🔒 Privacy Policy</h3>
            <p>We value your privacy. All your personal data is encrypted and stored securely. We do not share your information with third-party vendors without consent.</p>
          </div>
          <div className="policy-card">
            <h3>💸 Refund Policy</h3>
            <p>Get a 100% refund if cancelled 48 hours before the trip. 50% refund for cancellations within 24 hours. Terms and conditions apply.</p>
          </div>
          <div className="policy-card">
            <h3>🛡️ Safety Guarantee</h3>
            <p>Your safety is our priority. All our travel partners are verified, and we provide 24/7 support during your journey.</p>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
     <footer className="primoris-footer">
      
      {/* --- Section 1: Most Searched (SEO Links) --- */}
      <div className="footer-top-links">
        <h4 className="footer-heading">Most Searched for on Primoris</h4>
        <div className="link-tags">
          <span>Summer Flash Sale</span> | <span>Honeymoon Packages</span> | <span>Adventure Treks</span> | 
          <span>Solo Travel Guide</span> | <span>Corporate Offsites</span> | <span>Last Minute Deals</span> | 
          <span>Luxury Cruises</span> | <span>Visa Assistance</span> | <span>Travel Insurance</span> | 
          <span>International Flight Booking</span> | <span>Resort Stays</span> | <span>Weekend Getaways</span> | 
          <span>Group Tours</span> | <span>Student Discounts</span> | <span>Winter Expeditions</span> | 
          <span>Eco-Tourism</span> | <span>Pilgrimage Tours</span>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* --- Section 2: Global Partners --- */}
      <div className="footer-partners">
        <h4 className="footer-heading">Our Global Travel Partners</h4>
        <div className="partners-grid">
          <div className="partner-category">
            <h5><FaPlane /> Flights</h5>
            <p>Indigo, Emirates, Qatar Airways, Air India, Singapore Airlines, Lufthansa, British Airways</p>
          </div>
          <div className="partner-category">
            <h5><FaHotel /> Hotels</h5>
            <p>Marriott, Hilton, Hyatt, Taj Hotels, Airbnb, Radisson, OYO</p>
          </div>
          <div className="partner-category">
            <h5><FaBus /> Transport</h5>
            <p>RedBus, Uber, Hertz, Avis, ZoomCar, Ola, FlixBus, Greyhound, National Rail, Eurail Pass, Shinkansen</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* --- Section 3: Legal Policy & Guidelines --- */}
      <div className="footer-policy-section">
        <h4 className="footer-heading">Primoris Booking Policies & Guidelines</h4>
        <p className="policy-text">
          <strong>Primoris</strong> acts solely as a travel booking and facilitation platform. Participation in mountain expeditions, adventure treks, high-altitude travel, and nature-based activities involves inherent risks.
        </p>
        <p className="policy-text">
          In the event of <strong>injury, accident, illness, loss, or death</strong> occurring during travel or mountain activities, Primoris shall not be held legally or financially responsible. Travelers undertake such activities at their own risk.
        </p>
        <p className="policy-text">
          Primoris provides access to <strong>third-party travel insurance</strong> where applicable. Insurance coverage is subject to the terms and conditions of the insurance provider. Primoris does not guarantee personal safety, health outcomes, or life protection.
        </p>
        <p className="policy-warning">
          ⚠️ Travelers are advised to assess physical fitness, weather conditions, local regulations, and safety advisories before booking.
        </p>
      </div>

      {/* --- Section 4: Main Footer (Socials & Payments) --- */}
      <div className="footer-main">
        <div className="footer-brand-column">
          <h2 className="brand-logo">Primoris<span>Travels</span></h2>
          <p>Your trusted partner for spiritual and scenic adventures worldwide.</p>
          
          <div className="social-media-wrapper">
            <span>Connect with us:</span>
            <div className="social-icons">
              <div href="#" className="social-icon fb"><FaFacebookF /></div>
              <div href="#" className="social-icon tw"><FaTwitter /></div>
              <div href="#" className="social-icon ig"><FaInstagram /></div>
              <div href="#" className="social-icon li"><FaLinkedinIn /></div>
              <div href="#" className="social-icon yt"><FaYoutube /></div>
            </div>
          </div>
        </div>

        <div className="footer-payment-column">
          <h4>Secure Payment Gateways</h4>
          <div className="payment-icons">
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="Mastercard" />
            <FaCcAmex title="Amex" />
            <FaCcPaypal title="Paypal" />
            <SiGooglepay title="Google Pay" />
            <SiPhonepe title="PhonePe" />
            <SiPaytm title="Paytm" />
            <FaCcApplePay title="Apple Pay" />
          </div>
          <p className="secure-text">🔒 100% Secure Transaction</p>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Primoris Travels PVT LTD. All Rights Reserved.</p>
        <p>Country India USA UAE UK</p>
      </div>
    </footer>
    </div>
    </div>
  );
};

// --- Reusable Card Component ---
const TravelCard = ({ data }) => {
  return (
    <div className="travel-card">
      <div className="img-container">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="card-details">
        <h3>{data.name}</h3>
        <p className="price">{data.price}</p>
        <p className="duration">Duration: {data.Duration}</p>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Temples;