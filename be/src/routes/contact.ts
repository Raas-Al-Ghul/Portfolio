import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const router = Router();
const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("BODY RECEIVED:", req.body);

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Save message in database
    const savedMessage = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    console.log("DB SAVED:", savedMessage);

    // Send email to YOUR gmail
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      // IMPORTANT:
      // This MUST be the SAME gmail used in your Resend account
      to: "adarsh.m9137@gmail.com",

      subject: `New Portfolio Message from ${name}`,

      replyTo: email,

      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("EMAIL RESPONSE:", emailResponse);

    // Check resend error
    if (emailResponse.error) {
      return res.status(400).json({
        success: false,
        error: emailResponse.error,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
});

// Test route
router.get("/", async (req, res) => {
  return res.status(200).json({
    msg: "Contact API Working",
  });
});

export default router;