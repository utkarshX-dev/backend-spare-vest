const Contact = require("../models/contact.model");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // const contactEntry = new Contact({ name, email, subject, message });
    // await contactEntry.save();
    console.log(name, email, subject, message);
    res.status(200).json({ message: "Message received. We'll contact you shortly!" });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ message: "Internal server error." });
  }
};
