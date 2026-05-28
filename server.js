/* eslint-disable no-undef */
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New message from Website",
      text: message,
    });

    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ ok: false });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
