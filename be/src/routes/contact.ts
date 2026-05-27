import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

const router = Router();
const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    // Save to DB
    await prisma.contact.create({
      data: { name, email, message },
    });

    // Send email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER!,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
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