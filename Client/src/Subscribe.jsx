import React, { useState } from 'react';
import './Subscribe.css'; // Import the CSS file for styling

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSendEmail = async () => {
        try {
            const response = await fetch('http://localhost:3007/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert("Email sent successfully!");
            } else {
                alert("Failed to send email.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("An error occurred while sending the email.");
        }
    };

    return (
        <div className="subscribe-container">
            <span className="subscribe-text">SIGN UP FOR OUR DAILY INSIDER</span>
            <input
                type="email"
                className="subscribe-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
            />
            <button className="subscribe-button" onClick={handleSendEmail}>Subscribe</button>
        </div>
    );
};

export default Subscribe;