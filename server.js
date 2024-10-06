require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require('@sendgrid/mail');
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Handle POST request to send email
app.post('/send-email', async (req, res) => {
    const { email } = req.body;

    const msg = {
        to: email,
        from: "jirongling@gmail.com",  // Your verified SendGrid sender email
        subject: "Welcome!",
        text: "thank you for subscribe our dev@deakin"
    };

    try {
        await sgMail.send(msg);
        console.log("Email sent successfully!");
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Failed to send email");
    }
});

app.listen(3007, function () {
    console.log("Server is running on port 3007");
});