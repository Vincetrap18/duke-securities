import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // ✅ Use Gmail service instead of host/port
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // Gmail app password
      },
    });

    const info = await transporter.sendMail({
      from: `"Duke Securities Contact" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject || `📩 New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("✅ Email sent:", info.messageId);
    res.status(200).json({ success: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
