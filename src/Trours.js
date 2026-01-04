import React from 'react'
import './Tour.css'
import paris from './paris.png'
import { FaChevronRight } from "react-icons/fa"
import {
  FaMountain,
  FaPlaceOfWorship,
  FaUmbrellaBeach,
  FaCity,
  FaTree,
  FaLandmark,
  FaHiking,
} from "react-icons/fa";
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube,
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay 
} from 'react-icons/fa';
import { SiGooglepay, SiPhonepe } from 'react-icons/si';
import india from './india.png'
import Himalayan from './himalaya.png'
import dubai from './Dubai.png'
import Eroupe from './Eroupe.png'
import { useNavigate } from 'react-router-dom';
const categories = [
  { id: 1, name: "Mountains", icon: <FaMountain /> ,to:"/mountain"},
  { id: 2, name: "Temples", icon: <FaPlaceOfWorship />,to:"/temples" },
  { id: 3, name: "Beaches", icon: <FaUmbrellaBeach />,to:"/beaches" },
  { id: 4, name: "Cities", icon: <FaCity />,to:"/cities" },
  { id: 5, name: "Nature", icon: <FaTree /> ,to:"/forest"},
  { id: 6, name: "Historical", icon: <FaLandmark /> ,to:"/historical"},
  { id: 7, name: "Adventure", icon: <FaHiking />,to:"/adventures" },
];
const winterPlaces = [
  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    image: "https://static.toiimg.com/photo/msid-79664955,width-96,height-65.cms"
  },
  {
    name: "Gulmarg",
    location: "Kashmir, India",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/16/91/07/70/winter-night-in-gulmarg.jpg"
  },
  {
    name: "Zermatt",
    location: "Switzerland",
    image: "https://arzotravels.com/wp-content/uploads/2017/11/Matterhorn-and-Zermatt-in-the-Swiss-Alps-best-places-to-ski.jpg"
  },
  {
    name: "Reykjavik",
    location: "Iceland",
    image: "https://www.shutterstock.com/image-photo/reykjavik-capital-city-iceland-winter-600w-2519749195.jpg"
  }
];

const temples = [
  { name: "Tirupati", country: "India", cost: "20% OFF", img: "https://media.newindianexpress.com/TNIE/import/2020/9/20/original/Tirupati_Temple.jpg?w=1200&h=900&auto=format%2Ccompress&fit=max&enlarge=true" },
  { name: "Meenakshi", country: "India", cost: "30% OFF", img: "https://media.istockphoto.com/id/178460372/photo/meenakshi-temple-in-madurai.jpg?s=612x612&w=0&k=20&c=wn6WmRr91bcuJuOh2bita6lX3N-UCFxK75xRAqJHuZ4=" },
  { name: "Angkor Wat", country: "Cambodia", cost: "40% OFF", img: "https://masterpiecer-images.s3.yandex.net/a9ab7db98c1f11ee9d90ca123cab517e:upscaled" },
  { name: "Golden Temple", country: "India", cost: "60% OFF", img: "https://i.pinimg.com/736x/76/1b/21/761b217f189a62daac195ad44532c3e5.jpg" },
  { name: "Wat Arun", country: "Thailand", cost: "10% OFF", img: "https://www.cdn.travejar.com/storage/india_attraction_tour/1748254838.webp" },
  { name: "Kashi Vishwanath", country: "India", cost: "50% OFF", img: "https://kashiyatra.in/wp-content/uploads/2024/04/shri-kashi-vishwanath.jpg" },
  { name: "Borobudur", country: "Indonesia", cost: "20% OFF", img: "https://travelrebels.com/wp-content/uploads/2024/06/beklimmen-Borobudur--1675x1116.jpg" },
  { name: "Somnath", country: "India", cost: "30% OFF", img: "https://static.toiimg.com/thumb/msid-46918916,width-550,height-433/46918916.jpg" },
  { name: "Sensoji", country: "Japan", cost: "40% OFF", img: "https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/sensoji-temple-iStock-1083328636-770x514.jpg" }
];

const historical = [
  { name: "Taj Mahal", country: "India", cost: "42% OFF", img: "https://static.wixstatic.com/media/nsplsh_6d4e466c6e675341515567~mv2_d_4746_3158_s_4_2.jpg/v1/fill/w_640,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_6d4e466c6e675341515567~mv2_d_4746_3158_s_4_2.jpg" },
  { name: "Colosseum", country: "Italy", cost: "28% OFF", img: "https://thumbs.dreamstime.com/b/colosseum-night-rome-italy-ancient-amphitheater-starry-sky-visible-milky-way-407904784.jpg" },
  { name: "Great Wall", country: "China", cost: "30% OFF", img: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg" },
  { name: "Machu Picchu", country: "Peru", cost: "45% OFF", img: "https://media.assettype.com/outlooktraveller%2F2024-08-23%2Fe6lzoqxm%2FIMG_8969.jpg?w=480&auto=format%2Ccompress" },
  { name: "Petra", country: "Jordan", cost: "30% OFF", img: "https://www.gokitetours.com/wp-content/uploads/2025/01/The-10-Best-Things-to-do-in-Petra-Jordan.webp" },
  { name: "Hampi", country: "India", cost: "30% OFF", img: "https://www.tusktravel.com/blog/wp-content/uploads/2022/05/Hampi-Site-1.jpg" },
  { name: "Acropolis", country: "Greece", cost: "30% OFF", img: "https://e498h76z5mp.exactdn.com/wp-content/uploads/2016/07/Acroplis-Athens.jpg" },
  { name: "Red Fort", country: "India", cost: "29% OFF", img: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-about?qlt=82&ts=1742170594323" },
  { name: "Stonehenge", country: "UK", cost: "26% OFF", img: "https://cdn-imgix.headout.com/media/images/e35fb0c7e9e30fa228ae3308f9da1974-stonehenge-06.jpg?auto=format&w=1222.3999999999999&h=687.6&q=90&ar=16%3A9&crop=faces&fit=crop" }
];

const suggestions = [
  {
    name: "Shimla",
    location: "India",
    image: "https://images.news18.com/ibnlive/uploads/2024/05/img-2-2024-05-06t193202.186-2024-05-46ed807a8412bd67e1123c72482ec14e-16x9.jpg?impolicy=website&width=400&height=225"
  },
  {
    name: "Leh",
    location: "India",
    image: "https://thumbs.dreamstime.com/b/aerial-view-bird-eye-s-view-leh-city-night-ladakh-india-aerial-view-leh-city-night-ladakh-india-156787961.jpg"
  },
  {
    name: "Paris",
    location: "France",
    image: "https://farm6.staticflickr.com/5538/11671471365_431de44def_z.jpg"
  },
  {
    name: "Kyoto",
    location: "Japan",
    image: "https://cbx-prod.b-cdn.net/COLOURBOX30179959.jpg?width=800&height=800&quality=70"
  }
];
 // multiple backs 
const combos = [
  {
    title: "India Heritage Combo",
    offer: "20% OFF",
    image: india
  },
  {
    title: "Himalayan Snow Combo",
    offer: "15% OFF",
    image: Himalayan
  },
  {
    title: "Europe Classic Combo",
    offer: "25% OFF",
    image:Eroupe
  },
  {
    title: "Dubai Luxury Combo",
    offer: "18% OFF",
    image: dubai
  }
];



 const Trours =   () => {
  const Navigate =useNavigate()
  const Section = ({ title, data }) => (
   
  <div className="section">
    <h2>{title}</h2>

    <div className="grid">
      {data.map((place, index) => (
        <div className="card" key={index}>
          <img src={place.image} alt={place.name} />
          <h4>{place.name}</h4>
          <p>{place.location}</p>
          <button onClick={()=>{
         Navigate('/bookings')
          }}>Visit</button>
        </div>
      ))}
    </div>
  </div>
);
    
  return (
    <div>
     <div className="categories-container">
      {categories.map((cat) => (
        <div onClick={()=>{Navigate(cat.to)}} className="category-card" key={cat.id}>
          <div  className="category-icon">{cat.icon}</div>
          <p className="category-name">{cat.name}</p>
        </div>
      ))}
   </div>
  <div className="tours-container">
      <Section title="❄️ Winter View" data={winterPlaces} />
      <Section title="✨ Suggested For You" data={suggestions} />

      {/* RIGHT SIDE IMAGE (KEPT) */}
      <div className="image-section">
        <img
          src={paris}
          alt="Winter Scenic"
        />
      </div>
    </div>
                  {/*templess */}

    <div className="th-wrapper">

      {/* TEMPLES */}
      <div className="th-section">
        <h2 className="th-title">🛕 World Temples</h2>
        <div className="th-grid">
          {temples.map((item, i) => (
            <div onClick={()=>{Navigate('/bookings')}} className="th-card" key={i}>
              <img onClick={()=>{Navigate('bookings')}} src={item.img} alt={item.name} />
              <div className="th-content">
                <h4>{item.name}</h4>
                <p>{item.country}</p>
                <span>{item.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HISTORICAL */}
      <div className="th-section">
        <h2 className="th-title">🏛️ Historical Wonders</h2>
        <div className="th-grid">
          {historical.map((item, i) => (
            <div onClick={()=>{Navigate('/bookings')}} className="th-card" key={i}>
              <img src={item.img} alt={item.name} />
              <div className="th-content">
                <h4>{item.name}</h4>
                <p>{item.country}</p>
                <span>{item.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>

   <div className="mc2-wrapper">

      {/* LEFT 50% – COMBO CARDS */}
      
      <div className="mc2-left">
        <h1>Combo pack</h1>
        <div className="mc2-grid">
          {combos.map((combo, index) => (
            <div className="mc2-card" key={index}>
              <div>
                <h4>{combo.title}</h4>
                <span className="mc2-offer">{combo.offer}</span>
              </div>
              <FaChevronRight className="mc2-icon" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT 50% – IMAGES ONLY */}
      <div className="mc2-right">
        <div className="mc2-image-grid">
          {combos.map((combo, index) => (
            <div className="mc2-image-card" key={index}>
              <img src={combo.image} alt={combo.title} />
            </div>
          ))}
        </div>
      </div>

    </div>  

    <footer className="primoris-footer">
      <div className="footer-container">
        
        {/* Section 1: Brand & About */}
        <div className="footer-section">
          <h2 className="footer-logo">Primoris</h2>
          <p className="footer-about">
            Exploring the world with comfort and luxury. Your journey starts with us.
          </p>
          <div className="social-icons">
            <div className="social-link facebook"><FaFacebookF /></div>
            <div href="#" className="social-link twitter"><FaTwitter /></div>
            <div href="#" className="social-link instagram"><FaInstagram /></div>
            <div href="#" className="social-link linkedin"><FaLinkedinIn /></div>
            <div href="#" className="social-link youtube"><FaYoutube /></div>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tours">Popular Tours</a></li>
            <li><a href="#hotels">Hotels</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest travel deals.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      {/* Section 4: Payments & Copyright */}
      <div className="footer-bottom">
        <div className="copyright">
          © 2026 Primoris . All Rights Reserved.
        </div>
        
        <div className="payment-methods">
          <span className="payment-icon"><FaCcVisa /></span>
          <span className="payment-icon"><FaCcMastercard /></span>
          <span className="payment-icon"><FaCcAmex /></span>
          <span className="payment-icon"><FaCcPaypal /></span>
          <span className="payment-icon"><SiGooglepay /></span>
          <span className="payment-icon"><SiPhonepe /></span>
          <span className="payment-icon"><FaCcApplePay /></span>
        </div>
      </div>
    </footer>  
    </div>
  )
};

export default Trours
