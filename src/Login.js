import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, ArrowRight, CheckCircle, Smartphone } from 'lucide-react';
import './Login.css';
import { verifyOtp } from './reduxslice';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const otpRefs = useRef([]);
  console.log(otp)
  // Handle Phone Input
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Numbers only
    if (value.length <= 10) {
      setPhone(value);
    }
  };
 const dispatch = useDispatch();
let otpverify = true;

const verify = () => {
  if (otp[0] !== '1') return otpverify = false;
  if (otp[1] !== '0') return otpverify = false;
  if (otp[2] !== '2') return otpverify = false;
  if (otp[3] !== '8') return otpverify = false;
  if (otp[4] !== '8') return otpverify = false;

  otpverify = true;
};
dispatch(verifyOtp(otpverify))
  
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      // Simulate API call
      setStep('otp');
    } else {
      alert("Please enter a valid 10-digit number");
    }
  };

  // Handle OTP Input
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      otpRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace in OTP
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    alert(`Logged in with Phone: ${phone} and OTP: ${otp.join('')}`);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        
        {/* LEFT SIDE: Company Info & Branding */}
        <div className="login-left">
          <div className="overlay-gradient"></div>
          <div className="left-content">
            <div className="brand-header">
              <Plane size={32} className="brand-icon" />
              <span className="brand-name">Primoris Travel</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-block"
            >
              <h1>Your Journey <br /> <span className="highlight">Starts Here.</span></h1>
              <p>
                Join 1.2M+ travelers exploring the world's most exclusive destinations. 
                Seamless booking, premium partners, and 24/7 global support.
              </p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>No passwords to remember</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Secure OTP verification</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Instant account access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: Interactive Form */}
        <div className="login-right">
          <motion.div 
            className="form-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {step === 'phone' ? (
                /* --- STEP 1: PHONE NUMBER --- */
                <motion.form 
                  key="phone-step"
                  onSubmit={handleSendOtp}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2>Welcome Back</h2>
                  <p className="subtext">Enter your mobile number to continue</p>
                  
                  <div className="input-group">
                    <label>Mobile Number</label>
                    <div className="input-wrapper">
                      <Smartphone size={20} className="input-icon" />
                      <span className="country-code">+91</span>
                      <input 
                        type="text" 
                        placeholder="00000 00000" 
                        value={phone}
                        onChange={handlePhoneChange}
                        autoFocus
                      />
                    </div>
                  </div>

                  <button  
                  
                    type="submit" 
                    className={`submit-btn ${phone.length === 10 ? 'active' : ''}`}
                    disabled={phone.length !== 10}
                  >
                    Get OTP <ArrowRight size={18} />
                  </button>
                </motion.form>
              ) : (
                /* --- STEP 2: OTP VERIFICATION --- */
                <motion.form 
                  key="otp-step"
                  onSubmit={handleVerify}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button type="button" onClick={() => setStep('phone')} className="back-link">
                    &larr; Change Number
                  </button>
                  <h2>Verify Details</h2>
                  <p className="subtext">Enter the 5-digit code sent to +91 {phone}</p>

                  <div className="otp-container">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpRefs.current[index] = el)}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="otp-box"
                      />
                    ))}
                  </div>

                  <button 
                     onClick={verify}
                    type="submit" 
                    className={`submit-btn ${otp.every(d => d !== '') ? 'active' : ''}`}
                  >
                    Verify & Login
                  </button>
                  
                  <p className="resend-text">
                    Didn't receive code? <span className="resend-link">Resend in 30s</span>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;