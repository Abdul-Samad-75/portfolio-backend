const nodemailer = require("nodemailer");
// const brevoTransporter = require("nodemailer-brevo-transport");
require("dotenv").config();

// Transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abdulsamad7523@gmail.com",
    pass: "ypen ajxb ksxj icla",
  },
});

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Email details
    await transporter.sendMail({
      to: "abdulsamad8423@gmail.com",
      from: "abdulsamad8423@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your message was sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while sending the email",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
