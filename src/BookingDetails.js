import React, { useState} from 'react';
import './BookingDetails.css';

const BookingDetails = () => {
  // --- Constants ---
  const USER_NAME = "Nithin"; // Replace with dynamic user data
  const TRIP_NAME = "Manali Adventure 2026"; // Fixed Name

  // --- Pricing Rates ---
  const RATES = {
    basePerPerson: 1000,
    accommodation: 800, // Hostel
    food: 500,
    car: 3000,
    miniVan: 7000,
    bus: 12000,
  };

  // --- State Management ---
  const [tripType, setTripType] = useState('National');
  const [numPersons, setNumPersons] = useState(1);
  const [vehicles, setVehicles] = useState({ car: 0, miniVan: 0, bus: 0 });
  const [facilities, setFacilities] = useState({ hostel: false, food: false });
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  // --- Helpers ---
  const getCapacity = () => {
    return (vehicles.car * 4) + (vehicles.miniVan * 15) + (vehicles.bus * 30);
  };

  // --- Event Handlers ---
  const handleVehicleChange = (type, operation) => {
    if (tripType === 'International') return; // Disable for international

    setVehicles(prev => {
      const current = prev[type];
      const newValue = operation === 'inc' ? current + 1 : current - 1;
      return { ...prev, [type]: Math.max(0, newValue) };
    });
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
    // Reset vehicles if switching to International (assuming Flight/Other handled elsewhere)
    if (type === 'International') {
      setVehicles({ car: 0, miniVan: 0, bus: 0 });
    }
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === 'TRAVEL20') {
      setDiscount(0.10); // 10% discount
      alert("Coupon Applied! 10% Off.");
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  // --- Calculation Algorithm ---
  const calculateTotal = () => {
    // 1. Base Cost
    let total = numPersons * RATES.basePerPerson;

    // 2. Facilities
    if (facilities.hostel) total += (numPersons * RATES.accommodation);
    if (facilities.food) total += (numPersons * RATES.food);

    // 3. Vehicles (Only if National)
    if (tripType === 'National') {
      total += (vehicles.car * RATES.car);
      total += (vehicles.miniVan * RATES.miniVan);
      total += (vehicles.bus * RATES.bus);
    } else {
      // International base cost might be higher, adding dummy logic
      total += 5000 * numPersons; 
    }

    // 4. Discount
    const discountAmount = total * discount;
    return Math.round(total - discountAmount);
  };

  const finalPrice = calculateTotal();
  const seatsSelected = getCapacity();
  const isVehicleShortage = tripType === 'National' && seatsSelected < numPersons;

  return (
    <div className="booking-page">
      {/* Header */}
      <header className="top-bar">
        <h1>Travel<span>Booker</span></h1>
        <div className="user-profile">
          <div className="avatar">{USER_NAME.charAt(0)}</div>
          <span>{USER_NAME}</span>
        </div>
      </header>

      <main className="main-content">
        {/* LEFT SIDE: Booking Details */}
        <section className="booking-form">
          <h2>Trip Configuration</h2>
          
          {/* Trip Info */}
          <div className="input-group">
            <label>Trip Name (Fixed)</label>
            <input type="text" value={TRIP_NAME} readOnly className="fixed-input" />
          </div>

          <div className="input-group">
            <label>Trip Type</label>
            <div className="toggle-buttons">
              <button 
                className={tripType === 'National' ? 'active' : ''} 
                onClick={() => handleTripTypeChange('National')}>National</button>
              <button 
                className={tripType === 'International' ? 'active' : ''} 
                onClick={() => handleTripTypeChange('International')}>International</button>
            </div>
          </div>

          <div className="input-group">
            <label>Number of Persons</label>
            <input 
              type="number" 
              min="1" 
              value={numPersons} 
              onChange={(e) => setNumPersons(parseInt(e.target.value) || 0)} 
            />
          </div>

          {/* Vehicle Selection Logic */}
          <div className={`vehicle-section ${tripType === 'International' ? 'disabled' : ''}`}>
            <h3>Select Vehicles</h3>
            <p className="hint">Required Seats: {numPersons} | Selected: {seatsSelected}</p>
            
            {/* Car */}
            <div className="vehicle-control">
              <div className="v-info">
                <span>Car (Max 4)</span>
                <span className="price-tag">₹{RATES.car}</span>
              </div>
              <div className="counter">
                <button onClick={() => handleVehicleChange('car', 'dec')}>-</button>
                <span>{vehicles.car}</span>
                <button onClick={() => handleVehicleChange('car', 'inc')}>+</button>
              </div>
            </div>

            {/* Mini Van */}
            <div className="vehicle-control">
              <div className="v-info">
                <span>Mini Van (Max 15)</span>
                <span className="price-tag">₹{RATES.miniVan}</span>
              </div>
              <div className="counter">
                <button onClick={() => handleVehicleChange('miniVan', 'dec')}>-</button>
                <span>{vehicles.miniVan}</span>
                <button onClick={() => handleVehicleChange('miniVan', 'inc')}>+</button>
              </div>
            </div>

             {/* Bus */}
             <div className="vehicle-control">
              <div className="v-info">
                <span>Bus (Max 30)</span>
                <span className="price-tag">₹{RATES.bus}</span>
              </div>
              <div className="counter">
                <button onClick={() => handleVehicleChange('bus', 'dec')}>-</button>
                <span>{vehicles.bus}</span>
                <button onClick={() => handleVehicleChange('bus', 'inc')}>+</button>
              </div>
            </div>

            {isVehicleShortage && (
              <div className="error-msg">⚠️ You need {numPersons - seatsSelected} more seats!</div>
            )}
          </div>

          {/* Facilities */}
          <div className="facilities-section">
            <h3>Facilities</h3>
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={facilities.hostel}
                onChange={(e) => setFacilities({...facilities, hostel: e.target.checked})} 
              />
              <span className="checkmark"></span>
              Hostel Accommodation (+₹{RATES.accommodation}/person)
            </label>

            <label className="checkbox-container">
              <input 
                type="checkbox" 
                checked={facilities.food}
                onChange={(e) => setFacilities({...facilities, food: e.target.checked})} 
              />
              <span className="checkmark"></span>
              Include Food (+₹{RATES.food}/person)
            </label>
          </div>
        </section>

        {/* RIGHT SIDE: Pricing & Summary */}
        <aside className="price-summary">
          <div className="sticky-wrapper">
            <h2>Price Details</h2>
            
            <div className="price-row">
              <span>Base Cost ({numPersons} x ₹{RATES.basePerPerson})</span>
              <span>₹{numPersons * RATES.basePerPerson}</span>
            </div>

            {tripType === 'National' && (
              <>
                <div className="price-row">
                  <span>Vehicles Cost</span>
                  <span>₹{(vehicles.car * RATES.car) + (vehicles.miniVan * RATES.miniVan) + (vehicles.bus * RATES.bus)}</span>
                </div>
              </>
            )}

            {(facilities.hostel || facilities.food) && (
              <div className="price-row">
                <span>Facilities</span>
                <span>₹{(facilities.hostel ? numPersons * RATES.accommodation : 0) + (facilities.food ? numPersons * RATES.food : 0)}</span>
              </div>
            )}

            <div className="coupon-section">
              <input 
                type="text" 
                placeholder="Enter Coupon (TRAVEL20)" 
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={applyCoupon}>Apply</button>
            </div>

            {discount > 0 && (
              <div className="price-row discount">
                <span>Discount</span>
                <span>-10%</span>
              </div>
            )}

            <div className="divider"></div>

            <div className="total-row">
              <span>Total Amount</span>
              <span>₹{finalPrice}</span>
            </div>

            <button 
              className="pay-btn" 
              disabled={isVehicleShortage}
              onClick={() => setShowPayment(true)}
            >
              {isVehicleShortage ? 'Select More Vehicles' : 'Proceed to Pay'}
            </button>

            {/* Policy Section (Flipkart style) */}
            <div className="policy-text">
              <p>🛡️ <strong>Safe & Secure Payments.</strong> Easy returns. 100% Authentic products.</p>
              <p>Cancelling within 24 hours of booking attracts 0% fee. Post that standard T&C apply.</p>
            </div>
          </div>
        </aside>
      </main>

      {/* Payment Modal Overlay */}
      {showPayment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select Payment Method</h3>
            <div className="upi-options">
              <button className="upi-btn googlepay">Google Pay</button>
              <button className="upi-btn phonepe">PhonePe</button>
              <button className="upi-btn paytm">Paytm</button>
            </div>
            <div className="upi-input">
              <label>Or enter UPI ID</label>
              <input type="text" placeholder="example@oksbi" />
            </div>
            <button className="close-btn" onClick={() => setShowPayment(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;