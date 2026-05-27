import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const prisma = new PrismaClient();

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY?.slice(0, 10));
console.log("EMAIL_USER:", process.env.EMAIL_USER);

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("BODY RECEIVED:", req.body);

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields required",
      });
    }

    // Save to database
    const savedContact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    console.log("DB SAVED:", savedContact);

    // Send email
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER!,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("EMAIL SENT RESPONSE:", emailResponse);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
      emailResponse,
    });
  } catch (err) {
    console.error("FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      error: "Something went wrong",
      details: err,
    });
  }
});

router.get("/", async (req, res) => {
  return res.status(200).json({
    msg: "Working",
  });
});

export default router;