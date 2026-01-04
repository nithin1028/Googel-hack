import React, { useEffect, useRef, useState } from "react";
import "./Forest.css";
import {useNavigate} from "react-router-dom"

const forestCards = [
  {
    name: "Amazon Rainforest",
    price: "₹2.5L – ₹3.1L",
    days: "10 – 12 Days",
    img: "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ,to:'/bookings'

  },
  {
    name: "Congo Basin",
    price: "₹2.2L – ₹2.8L",
    days: "8 – 10 Days",
    img: "https://media.istockphoto.com/id/638591634/photo/hut-at-the-shoreline-of-congo-river.jpg?s=612x612&w=0&k=20&c=f4rvzYiYlPUQpCXPcUenaXjigvMiWStmwP43DL6DwiY="
    ,to:'/bookings'
  },
  {
    name: "Daintree Forest",
    price: "₹4.1L – ₹4.5L",
    days: "12 – 15 Days",
    img: "https://static.toiimg.com/thumb/123369566.jpg?imgsize=121164&photoid=123369566&width=375&height=210&resizemode=75"
    ,to:'/bookings'
  },
  {
    name: "Borneo Jungle",
    price: "₹1.6L – ₹1.9L",
    days: "7 – 9 Days",
    img: "https://media.assettype.com/outlooktraveller%2F2025-06-20%2Fyoxns31y%2Fborneo-shutterstock2009598773.jpg?w=640&auto=format%2Ccompress"
    ,to:'/bookings'
  }
];

const forestPlaces = [
  {
    name: "Monteverde Cloud Forest",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ,to:'/bookings'
  },
  {
    name: "Yakushima Forest",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
    ,to:'/bookings'
  },
  {
    name: "Black Forest",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
    ,to:'/bookings'
  },
  {
    name: "Sinharaja Forest",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9"
    ,to:'/bookings'
  }
];

const Forest = () => {
  const navigate =useNavigate()
  const revealRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.45 }
    );

    if (revealRef.current) observer.observe(revealRef.current);
  }, []);

  return (
    <div className="forest-app">

      {/* HERO */}
      <section className="forest-hero">
        <div className="forest-overlay" />
        <div className="forest-hero-content">
          <h1 className="forest-rotate">
            <span>Explore</span>
            <span>Wilderness</span>
            <span>Nature</span>
            <span>Forests</span>
          </h1>
          <p>Lose yourself in forests. Find adventure in every step.</p>
        </div>
      </section>

      {/* SCROLL REVEAL IMAGE */}
      <section
        ref={revealRef}
        className={`forest-reveal ${show ? "active" : ""}`}
      >
        <img
          src="https://images.unsplash.com/photo-1511497584788-876760111969"
          alt="Forest Reveal"
        />
        <h2>Forests That Breathe Life</h2>
      </section>

      {/* FOREST CARDS */}
      <section className="forest-cards">
        {forestCards.map((f, i) => (
          <div onClick={()=>{navigate(f.to)}} className="forest-card" key={i}>
            <img src={f.img} alt={f.name} />
            <div className="forest-card-info">
              <h3>{f.name}</h3>
              <p>{f.days}</p>
              <span>{f.price}</span>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </section>

       <section className="forest-sec">

      <div className="forest-sec-grid">

        {/* LEFT 50% */}
        <div className="forest-sec-left">
          {forestPlaces.map((item, i) => (
            <div onClick={()=>{navigate(item.to)}} className="forest-sec-card" key={i}>
              <img src={item.img} alt={item.name} />
              <div className="forest-sec-card-overlay">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT 50% */}
        <div onClick={()=>{navigate('/bookings')}} className="forest-sec-right">
          <img

            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
            alt="Forest Experience"
          />
          <div className="forest-sec-right-content">
            <h2>Guided Forest Experiences</h2>
            <p>
              Experience untouched forests with expert local guides,
              safe eco-trails, premium ambience stays, and complete
              journey assistance designed for nature lovers.
            </p>

            <ul>
              <li>• Certified Local Forest Guides</li>
              <li>• Eco-Lodges & Nature Camps</li>
              <li>• Wildlife-Safe Exploration Routes</li>
              <li>• End-to-End Trip Coordination</li>
            </ul>
          </div>
        </div>

      </div>

      {/* VISIT BEST FORESTS */}
      <div className="forest-sec-visit">
        <h2>Visit One of the Best Forests</h2>

        <div className="forest-sec-visit-grid">
          <div className="forest-sec-visit-card">Bwindi Forest – Uganda</div>
          <div className="forest-sec-visit-card">Sundarbans – India</div>
          <div className="forest-sec-visit-card">Tongass Forest – USA</div>
          <div className="forest-sec-visit-card">Białowieża Forest – Poland</div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="forest-sec-services">
        <h2>Our Forest Travel Services</h2>

        <div className="forest-sec-services-grid">
          <div className="forest-sec-service-card">End-to-End Traveler Protection</div>
          <div className="forest-sec-service-card">24×7 Guide & Emergency Support</div>
          <div className="forest-sec-service-card">Eco-Friendly Accommodation</div>
          <div className="forest-sec-service-card">Forest Permit & Safety Handling</div>
        </div>
      </div>

    </section>

     <footer className="forest-footer">

      {/* MAIN GRID */}
      <div className="forest-footer-grid">

        {/* MOST SEARCHED */}
        <div className="forest-footer-col">
          <h4>Most Searched on Primoris</h4>
          <p>
            Forest Expeditions | Jungle Safaris | Eco Tourism |
            Rainforest Treks | Wildlife Trails | Nature Retreats |
            Camping Experiences | Forest Lodges | Adventure Tours |
            Guided Nature Walks | Sustainable Travel |
            Offbeat Destinations | Photography Tours
          </p>
        </div>

        {/* PARTNERS */}
        <div className="forest-footer-col">
          <h4>Our Global Travel Partners</h4>

          <div className="forest-footer-partners">
            <span>Indigo</span>
            <span>Emirates</span>
            <span>Qatar Airways</span>
            <span>Air India</span>
            <span>Singapore Airlines</span>
            <span>Lufthansa</span>
          </div>

          <div className="forest-footer-partners">
            <span>Marriott</span>
            <span>Hilton</span>
            <span>Hyatt</span>
            <span>Taj Safaris</span>
            <span>Airbnb</span>
            <span>Radisson</span>
          </div>

          <div className="forest-footer-partners">
            <span>RedBus</span>
            <span>Uber</span>
            <span>ZoomCar</span>
            <span>Hertz</span>
            <span>National Rail</span>
            <span>Eurail Pass</span>
          </div>
        </div>

        {/* POLICIES */}
        <div className="forest-footer-col">
          <h4>Primoris Forest Travel Policies</h4>

          <p>
            Primoris acts solely as a travel booking and facilitation
            platform for forest tours, jungle expeditions, eco stays,
            transport services, and guided nature experiences.
            Participation in forest travel involves inherent risks.
          </p>

          <p>
            Primoris shall not be held responsible for any injury,
            accident, illness, wildlife encounters, loss, or death
            occurring during forest or nature-based travel.
            All journeys are undertaken at the traveler’s own risk.
          </p>

          <p>
            Travel insurance may be provided through third-party
            providers where applicable. Coverage depends on the
            insurer’s terms. Primoris does not guarantee safety,
            health outcomes, or life protection.
          </p>

          <p className="forest-footer-warning">
            Travelers must assess physical fitness, climate,
            forest regulations, wildlife advisories, and
            local laws before booking.
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="forest-footer-bottom">
        <span>© 2026 Primoris Travels</span>
        <span>All Rights Reserved</span>
        <span>Designed for Nature & Adventure Explorers</span>
      </div>

    </footer>

    </div>
  );
};

export default Forest;
