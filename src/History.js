import React from "react";
import "./History.css";
import {useNavigate} from 'react-router-dom'

export default function App() {
  const navigate =useNavigate()
  const indianHistory = [
    {
      name: "Taj Mahal",
      desc: "An ivory-white marble mausoleum on the right bank of the river Yamuna.",
      price: "₹1,500",
      rating: "4.9",
      img: "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg"
      ,to:'/bookings'
    },
    {
      name: "Hampi",
      desc: "The austere, grandiose site of the last capital of the Vijayanagara Empire.",
      price: "₹900",
      rating: "4.7",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/31020547/places-to-visit-in-hampi-FEATURE-compressed.jpg"
      ,to:'/bookings'
    },
    {
      name: "Red Fort",
      desc: "A historic fort in Old Delhi that served as the main residence of Mughal Emperors.",
      price: "₹1,000",
      rating: "4.6",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Red_Fort_in_Delhi_03-2016_img3.jpg/1280px-Red_Fort_in_Delhi_03-2016_img3.jpg"
      ,to:'/bookings'
    },
    {
      name: "Ajanta Caves",
      desc: "Rock-cut Buddhist cave monuments which date from the 2nd century BCE.",
      price: "₹1,200",
      rating: "4.8",
      img: "https://media.istockphoto.com/id/629821246/photo/kailas-temple-in-ellora-caves-complex-in-india.jpg?s=612x612&w=0&k=20&c=ei3N4dugQCPoifA-fE5aDIcgkGqkQgQ2_ASvdxxVnV0="
      ,to:'/bookings'
    }
  ];

  const internationalHistory = [
    {
      name: "Colosseum",
      desc: "The largest ancient amphitheatre ever built, located in the heart of Rome.",
      price: "₹95k",
      rating: "4.8",
      img: "https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3NzZXVtfGVufDB8fDB8fHww"
      ,to:'/bookings'
    },
    {
      name: "Machu Picchu",
      desc: "A 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
      price: "₹1.2L",
      rating: "4.9",
      img: "https://www.peruforless.com/_next/image?url=https%3A%2F%2Fwww.peruforless.com%2Fimages%2Fmachu-picchu-ruins.jpg&w=3840&q=75"
      ,to:'/bookings'
    },
    {
      name: "Great Wall",
      desc: "Series of fortifications built across the historical northern borders of China.",
      price: "₹80k",
      rating: "4.8",
      img: "https://whc.unesco.org/uploads/thumbs/site_0438_0035-1200-630-20251217144955.jpg"
      ,to:'/bookings'
    },
    {
      name: "Petra",
      desc: "Historic and archaeological city in southern Jordan, famous for its rock-cut architecture.",
      price: "₹95k",
      rating: "4.7",
      img: "https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg?w=400&h=225&c=crop"
      ,to:'/bookings'
    }
  ];

  const trendingWorld = [
    {
      name: "Angkor Wat",
      img: "https://globalcastaway.com/wp-content/uploads/2019/11/the-ultimate-guide-for-visiting-Angkor-Wat.jpg",
      price: "₹80,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Stonehenge",
      img: "https://media.istockphoto.com/id/542286320/photo/stonehenge-with-blue-sky.jpg?s=612x612&w=0&k=20&c=foArFGQDkH2YIpLrogqLP6E-ZLM1yZlTOD0UFMg9TMU=",
      price: "₹1,35,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Acropolis",
      img: "https://cdn-imgix-open.headout.com/Acropolis+Athens/Acropolis.jpg?auto=compress&fm=pjpg&fit=min&w=1200&h=800&q=80",
      price: "₹1,20,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Chichen Itza",
      img: "https://media.istockphoto.com/id/481272289/photo/el-castillo-of-chichen-itza-at-sunset-mexico.jpg?s=612x612&w=0&k=20&c=vp5jlz0SdiCl4ow_xRUPDgZ-09TdRdWuzE4NW7v130c=",
      price: "₹1,60,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Eiffel Tower",
      img: "https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower.jpg?wp=1&w=1084.125&h=609",
      price: "₹1,25,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Statue of Liberty",
      img: "https://www.historyhit.com/app/uploads/bis-images/5150130/Statue-of-Liberty-e1632495792514-788x537.jpg?x10081",
      price: "₹1,40,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Tower of London",
      img: "https://www.findingtheuniverse.com/wp-content/uploads/2021/10/White-Tower-Tower-of-London_by_Laurence-Norah-4.jpg",
      price: "₹1,15,000",
      rating: "4.8"
      ,to:'/bookings'
    },
    {
      name: "Alhambra",
      img: "https://cdn-imgix.headout.com/media/images/96b67a0d24abee1e70fb3817103f9f96-alhambra-50.jpg?w=1041.6000000000001&h=651&crop=faces&auto=compress%2Cformat&fit=min",
      price: "₹95,000",
      rating: "4.8"
      ,to:'/bookings'
    }
  ];

  return (
    <div className="hist-app-container">
      {/* HERO SECTION */}
      <section className="hist-hero-wrapper">
        <div className="hist-hero-overlay"></div>
        <div className="hist-hero-content">
          <div className="hist-hero-text">
            <span className="hist-category-badge">World Heritage Explorer</span>
            <h1 className="hist-main-title">Unveiling the <span className="hist-highlight">Greatest <br></br> Wonders</span></h1>
            <p className="hist-hero-description">
              Travel back in time and witness the architectural brilliance 
              of civilizations that shaped our world. From the ruins of Rome 
              to the marble gates of India.
            </p>
            <button onClick={()=>navigate("/bookings")} className="hist-btn-primary hist-btn-plane">✈ Start Exploring</button>
          </div>
        </div>
      </section>

      {/* INDIAN HISTORY */}
      <HistorySection title="Treasures of Indian History" data={indianHistory} />

      {/* BANNER BREAK */}
      <div className="hist-mid-banner-cta">
        <div className="hist-mid-banner-content">
          <h2 className="hist-banner-title">Preserving the Past for the Future</h2>
          <p className="hist-banner-text">Over 1,000+ historical sites documented across the globe.</p>
        </div>
      </div>

      {/* INTERNATIONAL HISTORY */}
      <HistorySection title="Global Historical Landmarks" data={internationalHistory} />

      {/* TRENDING WORLDWIDE */}
      <section className="hist-main-section">
        <div className="hist-section-header">
          <h2 className="hist-section-title">Trending Cities & Sites</h2>
          <p className="hist-section-subtitle">Most visited locations this month</p>
        </div>
        <div className="hist-grid-trending-layout">
          {trendingWorld.map((p, i) => (
            <div key={i} onClick={()=>{navigate(p.to)}} className="hist-trending-card">
              <img src={p.img} alt={p.name} className="hist-trending-img" />
              <div className="hist-trending-info-overlay">
                <h4 className="hist-trending-name">{p.name}</h4>
                <div className="hist-trending-meta-row">
                  <span className="hist-trending-rating">★ {p.rating}</span>
                  <p className="hist-trending-price">{p.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function HistorySection({ title, data }) {
  const navigate =useNavigate()
  return (
    <section className="hist-main-section">
      <div className="hist-section-header">
        <h2 className="hist-section-title">{title}</h2>
        <div className="hist-accent-line"></div>
      </div>
      <div className="hist-grid-four-columns">
        {data.map((p, i) => (
          <article key={i} className="hist-content-card">
            <div className="hist-card-image-wrapper">
              <img className="hist-card-main-img" src={p.img} alt={p.name} />
              <div className="hist-card-price-badge">{p.price}</div>
            </div>
            <div className="hist-card-content-body">
              <h3 className="hist-card-title">{p.name}</h3>
              <p className="hist-card-desc-text">{p.desc}</p>
              <div className="hist-card-rating-row">
                <span className="hist-card-rating-value">★ {p.rating}</span>
              </div>
              <button onClick={()=>{navigate(p.to)}} className="hist-btn-primary hist-btn-outline hist-btn-plane">✈ Book Visit</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}