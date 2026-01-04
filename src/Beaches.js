import React from 'react';
import './Beaches.css';
import {useNavigate} from "react-router-dom"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaStar,
  FaArrowRight,
  FaPlaneDeparture,
  FaUmbrellaBeach
} from "react-icons/fa";

const Beaches = () => {
  // 1. Nearby Destinations (Local)
  const navigate = useNavigate()
  const nearbyDestinations = [
    {
      id: 1,
      name: "Rushikonda Beach",
      desc: "Golden sands of Andhra coast",
      price: "₹1000",
      rating: "4.5",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d8/51/33/rushikonda.jpg?w=900&h=500&s=1",
    },
    {
      id: 2,
      name: "Marina Beach",
      desc: "Iconic shoreline & sunrise views",
      price: "₹1250",
      rating: "4.2",
      img: "https://www.islands.com/img/gallery/one-of-the-worlds-largest-urban-beaches-is-an-indian-attraction-famed-for-beauty-and-danger/l-intro-1732635627.jpg",
    },
    {
      id: 3,
      name: "Kovalam Beach",
      desc: "Palm-lined coast & blue waters",
      price: "₹2000",
      rating: "4.7",
      img: "https://www.worldbeachguide.com/photos/kovalam-beach.jpg",
    },
    {
      id: 4,
      name: "Baga Beach",
      desc: "Vibrant nightlife & ocean fun",
      price: "₹1500",
      rating: "4.6",
      img: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a7/1a/90/goa-quick-guide-largejpg.jpg",
    },
  ];

  // 2. Combo Packages (Bundles)
  const comboOffers = [
    {
      id: 1,
      name: "Coastal Triangle",
      sub: "Goa + Gokarna + Pondicherry",
      price: "₹1500",
      tag: "BEST SELLER",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    },
    {
      id: 2,
      name: "Island Explorer",
      sub: "Maldives + Bali + Phuket",
      price: "₹5,999",
      tag: "PREMIUM",
      img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    },
    {
      id: 3,
      name: "Pacific Shores",
      sub: "Hawaii + Fiji + Bora Bora",
      price: "₹7,999",
      tag: "ADVENTURE",
      img: "https://w0.peakpx.com/wallpaper/188/754/HD-wallpaper-pacific-ocean-beach-rocks-beach-ocean-nature-sunrise-sunset-sea.jpg",
    },
    {
      id: 4,
      name: "Blue Horizon",
      sub: "Kerala + Andaman + Lakshadweep",
      price: "₹3,999",
      tag: "ECO TRIP",
      img: "https://4kwallpapers.com/images/wallpapers/seascape-blue-horizon-clear-sky-ocean-rocks-sunrise-dawn-5119x2185-1594.jpg",
    },
  ];

  // 3. Popular Trips (International)
  const popularTrips = [
    { name: "Maldives", price: "₹2,999", img: "https://afar.brightspotcdn.com/dims4/default/5896a05/2147483647/strip/false/crop/3000x2247+0+0/resize/1486x1113!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg" },
    { name: "Bali", price: "₹1000", img: "https://media.istockphoto.com/id/675172642/photo/pura-ulun-danu-bratan-temple-in-bali.jpg?s=612x612&w=0&k=20&c=_MPdmDviIyhldqhf7t6s63C-bZbTGfNHMlJP9SIa8Y0=" },
    { name: "Goa", price: "₹2000", img: "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=" },
    { name: "Hawaii", price: "₹2,999", img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF3YWlpfGVufDB8fDB8fHww"},
    { name: "Phuket", price: "₹4,999", img: "https://cdn.kimkim.com/files/a/images/eacf17d718fdb851dcdad16f43b63146444db1b0/original-785bfde7b229078d29dda2791dafc7af.jpg" },
    { name: "Seychelles", price: "₹1,599", img: "https://images.unsplash.com/photo-1553829176-61484f865ac3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V5Y2hlbGxlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Andaman", price: "₹999", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsO5FnmsYTCOAzmFgEdtRrEaYkU0lC2BsAg&s" },
    { name: "Pondicherry", price: "₹999", img: "https://blog.mangohillhotels.com/wp-content/uploads/2024/03/1676549119_Pondicherry-1.jpg" },
  ];

  return (
   <div className='main-beaches'>
    <div className="beach-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <header className="hero-header">
        <div className="hero-overlay"></div>
        <img 
          src="https://t4.ftcdn.net/jpg/06/23/46/19/240_F_623461960_JanEVSDP36cFbV5exqVAQJlghPEYPJ6o.jpg" 
          alt="Beach Hero" 
          className="hero-bg-img"
        />
        <div className="hero-content fade-in-up">
          <div className="hero-badge"><FaUmbrellaBeach /> Beach Escapes</div>
          <h1 className="hero-title">Serenity of the <span className="highlight">Beaches</span></h1>
          <p className="hero-subtitle">
            Where the ocean meets the shore. Discover beach journeys that inspire relaxation, joy, and unforgettable memories.
          </p>
        </div>
      </header>

      <main className="main-container">
        
        {/* --- SECTION 1: NEARBY GEMS --- */}
        <section className="content-section fade-in-scroll">
          <div className="section-header">
            <h2 className="section-title">Hidden Coastal Gems Near You</h2>
            <p className="section-desc">Relaxing beach getaways just a short drive away.</p>
          </div>
          
          <div className="card-grid-4">
            {nearbyDestinations.map((item) => (
              <div key={item.id} className="travel-card hover-lift">
                <div className="card-image-wrapper">
                  <img src={item.img} alt={item.name} />
                  <div className="rating-badge"><FaStar /> {item.rating}</div>
                </div>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="card-desc">{item.desc}</p>
                  <div className="card-footer">
                    <span className="price-tag">{item.price}</span>
                    <button onClick={()=>{navigate('/bookings')}} className="btn-icon"><FaArrowRight /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 2: COMBO OFFERS --- */}
        <section className="content-section bg-soft fade-in-scroll">
          <div className="section-header">
            <h2 className="section-title">Exclusive Beach Bundles</h2>
            <p className="section-desc">Multi-destination beach experiences for true explorers.</p>
          </div>

          <div className="card-grid-2">
            {comboOffers.map((offer) => (
              <div  key={offer.id} className="combo-card hover-scale">
                <div className="combo-image">
                  <img src={offer.img} alt={offer.name} />
                  <span className="promo-tag">{offer.tag}</span>
                  <div className="combo-overlay">
                    <h3>{offer.name}</h3>
                    <p>{offer.sub}</p>
                  </div>
                </div>
                <div className="combo-details">
                   <div className="price-block">
                     <span className="label">Package Price</span>
                     <span className="price">{offer.price}</span>
                   </div>
                   <button onClick={()=>{navigate("/bookings")}} className="btn-book">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: POPULAR TRIPS --- */}
        <section className="content-section fade-in-scroll">
          <div className="section-header">
            <h2 className="section-title">Trending Destinations</h2>
            <p className="section-desc">The world’s most requested beach vacations.</p>
          </div>

          <div className="card-grid-4-dense">
            {popularTrips.map((trip, i) => (
              <div  onClick={()=>{navigate("/bookings")}}   kkey={i} className="mini-card hover-glow">
                <div  className="mini-img">
                  <img src={trip.img} alt={trip.name} /> 
                </div>
                <div className="mini-content">
                  <h4>{trip.name}</h4>
                  <div className="mini-footer">
                    <span className="mini-price">{trip.price}</span>
                    <span className="book-link">Book <FaPlaneDeparture /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="primoris-footer">
        <div className="footer-container">
          
          {/* Top: Policies */}
          <div className="footer-row policy-row">
            <div className="footer-col wide">
              <h4>Primoris Booking Policies & Guidelines</h4>
              <p className="policy-text">
                Primoris acts solely as a travel booking platform. Participation in beach vacations and water activities involves inherent risks.
                In the event of injury or loss, <strong>Primoris shall not be held responsible</strong>.
              </p>
              <p className="policy-text">
                We provide access to <strong>third-party travel insurance</strong>. Travelers are advised to assess weather and safety advisories before booking.
              </p>
            </div>
            <div className="footer-col">
               <h4>Secure Payments</h4>
               <p>UPI, Credit/Debit Cards, Net Banking, Wallets</p>
               <div className="payment-icons">
                 <span>VISA</span> <span>MasterCard</span> <span>UPI</span>
               </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Middle: Links & Partners */}
          <div className="footer-row links-row">
             <div className="footer-col">
               <h5>Most Searched</h5>
               <ul className="footer-list">
                 <li>Summer Flash Sale</li>
                 <li>Honeymoon Packages</li>
                 <li>Luxury Cruises</li>
                 <li>International Flights</li>
               </ul>
             </div>
             <div className="footer-col">
               <h5>Global Partners</h5>
               <ul className="footer-list">
                 <li>Indigo, Emirates, Qatar</li>
                 <li>Marriott, Hilton, Taj</li>
                 <li>Uber, Hertz, Eurail</li>
               </ul>
             </div>
             <div className="footer-col">
               <h5>Connect</h5>
               <div className="social-icons">
                 <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube />
               </div>
             </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Primoris Travel Technologies Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Beaches;