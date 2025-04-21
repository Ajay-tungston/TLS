const sendMail = require("../services/mailServices");
const validator = require("validator");

const contact = async (req, res) => {
  const {
    firstName,
    lastName,
    company,
    email,
    help,
    companySize,
    heardFrom,
    message,
  } = req.body;

  // Simple validation
  if (
    !firstName ||
    !company ||
    !email ||
    !help ||
    !companySize ||
    !heardFrom ||
    !message
  ) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }
  // Compose the message text
  const mailText = `
  Name: ${firstName} ${lastName ? lastName : ""}
  Company: ${company}
  Email: ${email}
  
  How can we help: ${help}
  Company Size: ${companySize}
  Heard about Tungstonlabs via: ${heardFrom}
  
  Message:
  ${message}
    `;

  // Mail Data
  const mailData = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Tungstonlabs Contact from ${firstName} ${lastName}`,
    text: mailText,
  };

  const result = await sendMail(mailData);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message, error: result.error });
  }
};

const getInTouch = async (req, res) => {
  const { company, email, employeeCount, phone, stack } = req.body;

  // Simple validation
  if (!company || !email || !employeeCount || !phone || !stack) {
    return res.status(400).json({ message: "Please fill all fields." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  // Compose the message text
  const mailText = `
  Company: ${company}
  Email: ${email}
  Phone: ${phone}
  
  Employee Count: ${employeeCount}
  Tech Stack: ${stack}
    `;

  // Mail Data
  const mailData = {
    from: email,
    to: process.env.EMAIL_RECEIVER, // Your receiving address from .env
    subject: `New Get In Touch Contact from ${company}`,
    text: mailText,
  };

  const result = await sendMail(mailData);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(500).json({ message: result.message, error: result.error });
  }
};

module.exports = { contact, getInTouch };
