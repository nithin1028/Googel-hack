import React from 'react';
import './Lux.css';

const LuxuryApp = () => {
  
  // Data for the 5 World-Class Hotels
  const services = [
    {
      id: 1,
      title: "LUXURY CARS",
      image: "https://i.pinimg.com/736x/cf/20/99/cf209935bc86e271927e9fb9c558c843.jpg"
    },
    {
      id: 2,
      title: "ROYAL CARAVANS",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "ELITE HOTELS",
      image: "https://miro.medium.com/1*V-1_xLadALuv6ueJsO3o_A.jpeg"
    },
    {
      id: 4,
      title: "PREMIUM ACCOMMODATION",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "GLOBAL ASSISTANTS",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Data for Features List
  const features = [
    { title: "End-to-End Trip Service", icon: "✨" },
    { title: "Personal Trip Agent", icon: "🤵" },
    { title: "Absolute Luxury", icon: "💎" },
    { title: "Expert Time Management", icon: "⏳" }
  ];
  const hotelCollection = [
    {
      id: 1,
      name: "Burj Al Arab",
      country: "Dubai, UAE",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "The Plaza",
      country: "New York, USA",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Ritz Paris",
      country: "Paris, France",
      img: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/10/GourmetTraveller/2016/10/17/45448/ritz_windsor_suite-7.jpg?fit=628%2C733"
    },
    {
      id: 4,
      name: "Marina Bay Sands",
      country: "Singapore",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      name: "Atlantis The Royal",
      country: "Dubai, UAE",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className='lux-main'>
    <div className="lux-body-wrapper">
      
      {/* 1. Shining Header */}
      <header className="lux-header">
        <h1 className="lux-gold-shine-text">LUXURY TRIP</h1>
        <p className="lux-subtitle">EXCLUSIVE • PRIVATE • ELITE</p>
      </header>

      {/* 2. Split Hero Section (Jet vs Ship) */}
      <section className="lux-hero-split">
        
        {/* Left: Private Jet */}
        <div className="lux-split-card">
          <img 
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80" 
            alt="Private Jet" 
            className="lux-bg-img"
          />
          <div className="lux-overlay">
            <h2>PRIVATE AVIATION</h2>
            <p>Book Charter Flight For World Trip</p>
            <button className="lux-gold-btn">INQUIRE JET</button>
          </div>
        </div>

        {/* Right: Yacht */}
        <div className="lux-split-card">
          <img 
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=800&q=80" 
            alt="Luxury Ship" 
            className="lux-bg-img"
          />
          <div className="lux-overlay">
            <h2>OCEAN VOYAGE</h2>
            <p>Book World Class Ship Trip</p>
            <button className="lux-gold-btn">INQUIRE YACHT</button>
          </div>
        </div>

      </section>

      {/* 3. Hotel Collection (5 Items) */}
      <section className="lux-hotel-section">
        <h2 className="lux-section-title">OUR WORLD CLASS HOTEL SERVICES</h2>
        
        <div className="lux-hotel-grid">
          {hotelCollection.map((hotel) => (
            <div key={hotel.id} className="lux-hotel-card">
              <div className="lux-hotel-img-box">
                <img src={hotel.img} alt={hotel.name} />
              </div>
              <div className="lux-hotel-info">
                <h3 className="lux-hotel-name">{hotel.name}</h3>
                <span className="lux-hotel-country">{hotel.country}</span>
              </div>
            </div>
          ))}
        </div>

      </section>



      <div className="lux-service-wrapper">
      
      {/* 1. Header Section */}
      <div className="lux-service-header">
        <h1 className="lux-gold-shine-text">OUR BEST SERVICE IN TOP COUNTRIES</h1>
      </div>

      {/* 2. Hero Flight Section */}
      <div className="lux-hero-flight">
        <img 
          src="https://media.istockphoto.com/id/1426551861/photo/moody-atlantic-ocean-wave-on-black-sand-beach-in-summer-at-iceland.jpg?s=612x612&w=0&k=20&c=qyctUBAbDPHs6MSCC54eCLdb1SAtT0CrKxD3yTGEw8U=" 
          alt="Luxury Flight" 
          className="lux-hero-img"
        />
        <div className="lux-hero-overlay">
          <h2>100 COUNTRIES & HOTELS</h2>
          <p>Experience the world without boundaries.</p>
        </div>
      </div>

      {/* 3. Service Grid (Cars, Caravans, etc.) */}
      <div className="lux-category-grid">
        {services.map((item) => (
          <div key={item.id} className="lux-category-card">
            <div className="lux-category-img-box">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="lux-category-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* 4. Book Trip Button */}
      <div className="lux-cta-section">
        <button className="lux-gold-btn-large">BOOK WORLD CLASS TRIP</button>
      </div>

      {/* 5. Schedule & Features Section */}
      <div className="lux-features-container">
        
        {/* Left Side: Schedule Text */}
        <div className="lux-feature-box">
          <div className="lux-icon-large">📅</div>
          <h2>PLAN YOUR SCHEDULE</h2>
          <p className="lux-feature-sub">Seamless coordination for the elite traveler.</p>
        </div>

        {/* Right Side: Feature List */}
        <div className="lux-feature-list">
          <h3>OUR SERVICES INCLUDE:</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <span className="lux-list-icon">{feature.icon}</span>
                {feature.title}
              </li>
            ))}
          </ul>
          <h4 className="lux-plan-trip-text">PLAN LUXURY TRIP NOW</h4>
        </div>

      </div>
    </div>

    </div>
    </div>
  );
};

export default LuxuryApp;