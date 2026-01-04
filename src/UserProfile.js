import React, { useState, useEffect, useRef } from 'react';
import { 
  FaSignOutAlt, FaMapMarkerAlt, FaRoute, FaRobot, FaPaperPlane, FaTimes, FaBus, FaPlane
} from 'react-icons/fa';
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
// 1️⃣ IMPORT GOOGLE AI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";
import './UserProfile.css';

const UserProfile = () => {
  // --- 🌍 GOOGLE MAPS CONFIG ---
  // 🔴 NOTE: For production, use process.env.REACT_APP_GOOGLE_API_KEY
  const GOOGLE_MAPS_API_KEY = "AIzaSyDZSfFnr4tEUzWMkdPNjDIAtOL2cDM3bzI"; 
  const defaultCenter = { lat: 28.6139, lng: 77.2090 }; // New Delhi

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // --- 📍 STATE MANAGEMENT ---
  const [currentLocation, setCurrentLocation] = useState(null);
  const [destination, setDestination] = useState("");
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // --- 🤖 BOT STATE ---
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to Primoris Travels! Where do you want to go next?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Added typing state
  const chatEndRef = useRef(null);

  // --- 🔄 EFFECTS ---
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCurrentLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => console.log("Location access denied")
      );
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- 🛣️ ROUTE CALCULATION ---
  const calculateRoute = async () => {
    if (!destination || !currentLocation) return;
    
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    try {
      const results = await directionsService.route({
        origin: currentLocation,
        destination: destination,
        travelMode: "DRIVING",
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (error) {
      alert("Could not find route.");
    }
  };

  // --- 💬 CHAT HANDLER (DIRECT GEMINI API) ---
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // 1. Update UI immediately with User's Message
    const userMsg = { text: inputMessage, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true); // Show typing indicator

    try {
      // 2. Initialize Gemini (Directly in Frontend)
      const genAI = new GoogleGenerativeAI("AIzaSyDVioyL7U2zi3bZz9zs6NX7NLkPXnrB7sE"); // Reusing your API key
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

      // 3. Send Request to Google
      const result = await model.generateContent(userMsg.text);
      const response = await result.response;
      const text = response.text();

      // 4. Update UI with Gemini's Answer
      const botMsg = { text: text, sender: "bot" };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Error connecting to Gemini:", error);
      setMessages(prev => [...prev, { text: "Error: Could not reach Google AI.", sender: "bot" }]);
    } finally {
      setIsTyping(false); // Hide typing indicator
    }
  };

  // --- 👤 MOCK DATA ---
  const user = {
    name: "Rahul Verma",
    role: "Premium Traveler",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  };

  const trips = [
    { id: 1, to: "Delhi", date: "2 Days ago", icon: <FaPlane /> },
    { id: 2, to: "Manali", date: "Last Month", icon: <FaBus /> },
    { id: 3, to: "Goa", date: "Aug 2025", icon: <FaPlane /> },
  ];

  if (!isLoaded) return <div className="loading-screen">Loading Primoris Maps...</div>;

  return (
    <div className="dashboard-container">
      
      {/* 🟢 LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="brand-header">
            <h2>Primoris<span>Travels</span></h2>
        </div>

        <div className="profile-section">
            <div className="profile-img-box">
                <img src={user.image} alt="User" />
                <div className="online-dot"></div>
            </div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
        </div>

        <div className="history-section">
            <h4>Latest Trips</h4>
            <div className="history-list">
                {trips.map(trip => (
                    <div key={trip.id} className="history-card">
                        <div className="trip-icon-box">{trip.icon}</div>
                        <div className="trip-info">
                            <span className="trip-dest">Trip to {trip.to}</span>
                            <span className="trip-date">{trip.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <button className="signout-btn">
            <FaSignOutAlt /> Sign Out
        </button>
      </aside>

      {/* 🔵 RIGHT SIDE - MAP AREA */}
      <main className="map-area">
        <div className="map-overlay-controls">
            <div className="input-box">
                <FaMapMarkerAlt className="input-icon blue" />
                <input type="text" value="Current Location" readOnly />
            </div>
            <div className="connector-line"></div>
            <div className="input-box">
                <FaRoute className="input-icon red" />
                <input 
                    type="text" 
                    placeholder="Where to next? (e.g., Mumbai)" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <button className="go-btn" onClick={calculateRoute}>GO</button>
            
            {distance && (
                <div className="trip-stats-float">
                    <strong>{distance}</strong> • {duration}
                </div>
            )}
        </div>

        <GoogleMap
          center={currentLocation || defaultCenter}
          zoom={13}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{ disableDefaultUI: true, zoomControl: true }}
        >
          {currentLocation && !directionsResponse && <Marker position={currentLocation} />}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </main>

      {/* 🟣 FLOATING AI BOT */}
      <div className="ai-bot-wrapper">
          <div className={`bot-trigger ${isChatOpen ? 'hidden' : ''}`} onClick={() => setIsChatOpen(true)}>
              <div className="glow-ring"></div>
              <FaRobot className="bot-icon" />
          </div>

          <div className={`chat-interface ${isChatOpen ? 'open' : ''}`}>
              <div className="chat-head">
                  <span>AI Assistant</span>
                  <FaTimes onClick={() => setIsChatOpen(false)} />
              </div>
              <div className="chat-content">
                  {messages.map((m, i) => (
                      <div key={i} className={`msg ${m.sender}`}>{m.text}</div>
                  ))}
                  {isTyping && <div className="msg bot">Typing...</div>}
                  <div ref={chatEndRef}></div>
              </div>
              <div className="chat-input">
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <FaPaperPlane onClick={handleSendMessage} />
              </div>
          </div>
      </div>

    </div>
  );
};

export default UserProfile;