const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "resurgeweb@outlook.com",
    pass: "Resurge2023!",
  },
});

app.use(cors());
app.options("/send-email", cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/send-order", upload.single("logo"), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      companyName,
      industry,
      websitePurpose,
      designStyle,
      mainColor,
      features,
      timeline,
      priceRange,
      comments,
    } = req.body;

    const timestamp = new Date().getTime();
    const fileName =
      typeof req.file !== "undefined"
        ? `attachment_${timestamp}_${req.file.originalname}`
        : "undefined.png";
    const filePath =
      typeof req.file !== "undefined"
        ? `./uploads/${fileName}`
        : "./uploads/submitPlaceholder.jpeg";

    if (typeof req.file !== "undefined") {
      fs.writeFileSync(filePath, req.file.buffer);
    }

    const mailOptions = {
      from: "resurgeweb@outlook.com",
      to: "resurgeweb@outlook.com",
      subject: "New Order Submission",
      html: `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Company: ${company ? companyName : "N/A"}</p>
        <p>Industry: ${company ? industry : "N/A"}</p>
        <p>Website Purpose: ${websitePurpose}</p>
        <p>Design Style: ${designStyle}</p>
        <p>Main Color: ${mainColor}</p>
        <p>Features: ${features}</p>
        <p>Timeline: ${timeline}</p>
        <p>Price Range: ${priceRange}</p>
        <p>Comments: ${comments}</p>
      `,
      attachments: {
        fileName,
        path: filePath,
      },
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
    if (typeof req.file !== "undefined") {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email: " + error.message);
  }
});

app.post("/send-contact", async (req, res) => {
  try {
    const { fullName, email, phone, message } = req.body;

    const mailOptions = {
      from: "resurgeweb@outlook.com",
      to: "resurgeweb@outlook.com",
      subject: "Contact/Feedback Submission",
      html: `
        <p>Full Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
