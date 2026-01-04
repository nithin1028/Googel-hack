import React from "react";
import "./Travels.css";
import { useNavigate } from "react-router-dom";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, 
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay, 
  FaPlane, FaHotel, FaBus, FaCarSide, FaShuttleVan 
} from 'react-icons/fa';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';

const buses = [
  {
    name: "Volvo Tourist Bus",
    price: "₹4,200 / day",
    img: "https://static.vecteezy.com/system/resources/thumbnails/040/171/979/small/ai-generated-luxury-coach-bus-on-highway-at-sunset-road-trip-travel-concept-photo.jpeg"
  },
  {
    name: "Scania Premium Bus",
    price: "₹4,800 / day",
    img: "https://t4.ftcdn.net/jpg/06/67/56/53/360_F_667565388_5jyKNCXSA2CtHLJ81GOQeXn1JxPG0zfD.jpg"
  },
  {
    name: "Luxury Sleeper Bus",
    price: "₹5,000 / day",
    img: "https://www.shutterstock.com/image-photo/luxury-coach-bus-on-highway-260nw-2598538757.jpg"
  },
  {
    name: "Deluxe Tourist Coach",
    price: "₹4,000 / day",
    img: "https://t4.ftcdn.net/jpg/15/68/08/33/360_F_1568083302_5rupiaGKDJFOXCVoBpSIcGSfkiW10miS.jpg"
  },
  {
    name: "Royal Express Bus",
    price: "₹5,500 / day",
    img: "https://i.pinimg.com/736x/41/13/03/411303d17f079fee504feb4952fc90d0.jpg"
  }
];

const cars = [
  {
    name: "Toyota Innova",
    price: "₹3,200 / day",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwvyatuh8dC0_qa3aiACglC0y2NS693OtWw&s"
  },
  {
    name: "Tempo Traveller",
    price: "₹3,800 / day",
    img: "https://www.jeetbrothers.com/uploaded-files/category/images/thumbs/Tempo-Traveller-Rental6778dd19bbb5e.jpg"
  },
  {
    name: "Mini Van",
    price: "₹2,800 / day",
    img: "https://sitaramtours.com/wp-content/uploads/2023/12/20-Seater-Force-Tempo-Traveller-1.jpg"
  },
  {
    name: "Urban Cruiser",
    price: "₹2,500 / day",
    img: "https://images.financialexpressdigital.com/2021/01/Toyota-Urban-Cruiser-review-16.jpg"
  },
  {
    name: "Family MPV",
    price: "₹3,000 / day",
    img: "https://imgd.aeplcdn.com/600x337/n/cw/ec/199767/triber-exterior-right-front-three-quarter-26.png?isig=0&q=80"
  }
];

const luxury = [
  {
    name: "Mercedes V-Class",
    price: "₹18,000 / day",
    img: "https://www.scuderiamotordesign.com/wp-content/uploads/2023/06/Main_Banner_ghq.jpg"
  },
  {
    name: "BMW Luxury Van",
    price: "₹22,000 / day",
    img: "https://hips.hearstapps.com/hmg-prod/images/mercedes-vision-v-47-68067a89949bd.jpg?crop=1.00xw:0.612xh;0,0.264xh&resize=980:*"
  },
  {
    name: "Toyota Vellfire",
    price: "₹20,000 / day",
    img: "https://www.ecorentacar.com/wp-content/uploads/2024/04/toyota-velfire-interior.png"
  },
  {
    name: "Luxury Caravan",
    price: "₹25,000 / day",
    img: "https://caravanworld.com.au/cdn/shop/articles/luxury-caravan-living-211640.jpg?v=1710991769"
  }
];

const TravelPage = () => {
  const Navigate = useNavigate()
  return (
  <div>
   <div className="travel-container">

      <h1 className="main-title">Travel</h1>
      <p className="sub-title">Book Tourist Vehicle</p>

      {/* BUS ROW */}
      <div className="vehicle-grid">
        {buses.map((item, i) => (
          <div className="vehicle-card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>

      {/* CAR & VAN ROW */}
      <div className="vehicle-grid">
        {cars.map((item, i) => (
          <div className="vehicle-card" key={i}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>

      {/* LUXURY SECTION */}
      <div className="luxury-section">

        <div className="luxury-left">
          {luxury.map((item, i) => (
            <div className="luxury-card" key={i}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Luxury Book</button>
            </div>
          ))}
        </div>

        <div className="luxury-right">
          <img
            src="https://aircraftcharter.com//storage/photos/1/blogs/9.jpg"
            alt="Family Trip"
          />
          <div className="offer-box">
            <h2>Visit Luxuary Store</h2>
         
            <button onClick={()=>{Navigate("/luxuary")}}>Explore Offer</button>
          </div>
        </div>

      </div>
    </div>

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
            <h5><FaBus /> Transport & Rentals</h5>
            <p>RedBus, Uber, Hertz, Avis, ZoomCar, Ola, FlixBus, Greyhound, National Rail, Eurail Pass, Shinkansen</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* --- Section 3: Legal Policy & Guidelines --- */}
      <div className="footer-policy-section">
        <h4 className="footer-heading">Primoris Booking Policies & Guidelines</h4>
        <div className="policy-content">
          <p>
            <strong>Primoris</strong> acts solely as a travel booking and facilitation platform for Buses, Cars, and Mini Vans. Participation in mountain expeditions, adventure treks, high-altitude travel, and nature-based activities involves inherent risks.
          </p>
          <p>
            In the event of <strong>injury, accident, illness, loss, or death</strong> occurring during travel or mountain activities, Primoris shall not be held legally or financially responsible. Travelers undertake such activities at their own risk.
          </p>
          <p>
            Primoris provides access to <strong>third-party travel insurance</strong> where applicable. Insurance coverage is subject to the terms and conditions of the insurance provider. Primoris does not guarantee personal safety, health outcomes, or life protection.
          </p>
          <p className="policy-warning">
            ⚠️ Travelers are advised to assess physical fitness, weather conditions, local regulations, and safety advisories before booking.
          </p>
        </div>
      </div>

      {/* --- Section 4: Main Footer (Brand, Socials & Payments) --- */}
      <div className="footer-main">
        
        {/* Brand & Socials */}
        <div className="footer-brand-column">
          <h2 className="brand-logo">Primoris<span>Travels</span></h2>
          <p>Your trusted partner for spiritual and scenic adventures worldwide. We offer premium Buses, Luxury Cars, and Spacious Mini Vans.</p>
          
          <div className="vehicle-icons-row">
             <span title="Luxury Bus"><FaBus /></span>
             <span title="Premium Car"><FaCarSide /></span>
             <span title="Mini Van"><FaShuttleVan /></span>
          </div>

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

        {/* Payment Gateways */}
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
          <p className="secure-text">🔒 100% Secure Transaction | SSL Encrypted</p>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Primoris Travels PVT LTD. All Rights Reserved.</p>
        <p>Operating in: India | USA | UAE | UK</p>
      </div>
    </footer>
    </div>
  );
};

export default TravelPage;
