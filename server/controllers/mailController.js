const nodemailer = require('nodemailer')
const Mail = require('../models/mailModel')

require('dotenv').config();

const sendMail = async (req, res) => {
  const {name, email, message} = req.body;
  
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailDetails = {
    from: email, // Sender's email (user's email)
    to: process.env.SMTP_USER, // Your email (the recipient)
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };


  try {
    await transporter.sendMail(mailDetails);
    res.status(200).json({ message: 'Email sent successfully!'});
  } catch(err){
    res.status(500).json({ error: 'Failed to send email.'});
  }
}


module.exports = {sendMail};