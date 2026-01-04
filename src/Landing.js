import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { 
  LogIn, Globe,  ShieldCheck, CreditCard, 
  Facebook, Twitter, Instagram, Linkedin, 
  Plane, Calendar 
} from 'lucide-react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';


// --- 3D Components ---
const RotatingGlobe = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });
 

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <points ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <pointsMaterial 
          color="#4ade80" 
          size={0.02} 
          transparent 
          opacity={0.8} 
          sizeAttenuation={true} 
        />
      </points>
      <mesh>
         <sphereGeometry args={[2.45, 64, 64]} />
         <meshBasicMaterial color="#0f172a" transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

// --- UI Components ---

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    className="service-card"
    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="icon-box"><Icon size={32} /></div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <h3>{number}</h3>
    <p>{label}</p>
  </div>
);

const LoginPage= () => {
    const navigate =useNavigate();
  return (
    <div className="app-container">
      
      {/* --- HERO SECTION WITH 3D --- */}
      <section className="hero-section">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <RotatingGlobe />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

      <nav className="navbar">
     <div className="logo-container">
      <Plane className="logo-icon" />
      <span className="logo-text">Primoris Travel</span>
    </div>
    <button onClick={()=>{navigate('/home')}} className="login-btn">
      <LogIn size={18} />
      <span>Explore</span>
    </button>
    </nav>

        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience the World <br /> <span className="highlight">Without Limits</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Primoris Travel connects you to over 1,000 destinations globally. 
            Curated journeys, premium partners, and memories that last a lifetime.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button onClick={()=>{navigate('/beaches')}} className="primary-btn">Start Your Journey</button>
            <button onClick={()=>{navigate('/bookings')}} className="secondary-btn">View Packages</button>
          </motion.div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section">
        <StatItem className="lan-s" number="1.2M+" label="Happy Travelers" />
        <StatItem className="lan-s"number="150+" label="Countries" />
        <StatItem className="lan-s"number="1,000+" label="Travel Partners" />
        <StatItem className="lan-s"number="24/7" label="Global Support" />
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="services-section" id="services">
        <div className="section-header">
          <h2>Why Choose Primoris?</h2>
          <p>We redefine luxury and comfort in modern travel.</p>
        </div>
        <div className="services-grid">
          <ServiceCard 
            icon={Globe} 
            title="Global Connectivity" 
            desc="Access to exclusive flights and accommodations in every corner of the world." 
          />
          <ServiceCard 
            icon={ShieldCheck} 
            title="Secure Booking" 
            desc="State-of-the-art encryption and insurance policies for peace of mind." 
          />
          <ServiceCard 
            icon={Calendar} 
            title="Flexible Scheduling" 
            desc="Change of plans? No problem. We offer the most flexible cancellation policies." 
          />
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section className="partners-section" id="partners">
        <h2>Trusted by Industry Leaders</h2>
        <div className="partners-marquee">
          {/* Mock logos text for demonstration */}
          <span>EMIRATES</span>
          <span>AIRBNB</span>
          <span>HILTON</span>
          <span>MARRIOTT</span>
          <span>QATAR AIRWAYS</span>
          <span>EXPEDIA</span>
          <span>LUFTHANSA</span>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Primoris Travel</h3>
            <p>Your gateway to the extraordinary.</p>
            <div className="social-icons">
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <div href="#">About Us</div>
            <div href="#">Careers</div>
            <div href="#">Privacy Policy</div>
            <div href="#">Terms of Service</div>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <div href="#">Help Center</div>
            <div href="#">Safety</div>
            <div href="#">Cancellation Options</div>
          </div>

          <div className="footer-col">
            <h4>Secure Payments</h4>
            <div className="payment-icons">
              <CreditCard size={24} />
              <span className="card-text">VISA</span>
              <span className="card-text">MC</span>
              <span className="card-text">PAYPAL</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Primoris Travel Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;