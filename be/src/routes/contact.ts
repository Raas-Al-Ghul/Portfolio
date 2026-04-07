import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const router = Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await prisma.contact.create({
      data: { name, email, message },
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // 👈 always YOUR email
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email, // 👈 THIS IS KEY 🔥
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
  `,
    });

console.log("Message received:", { name, email, message });

    res.json({ success: true });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});


router.get("/", async (req, res) => {
  return res.status(200).json({ msg: "Working" });
});

export default router;