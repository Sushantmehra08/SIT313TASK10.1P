// signup.jsx
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      if (response.data.success) {
        setResponseMessage('Subscription successful!');
      } else {
        setResponseMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error subscribing:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">SIGN UP FOR OUR DAILY INSIDER</h2>
      <div className="signup-form">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <button 
          className="subscribe-button"
          onClick={handleSubscribe} // Call the function when button is clicked
        >
          Subscribe
        </button>
      </div>
      {responseMessage && <p>{responseMessage}</p>} {/* Display success/failure message */}
    </div>
  );
};

export default Signup;
