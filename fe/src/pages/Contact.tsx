import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      setStatus("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 
            dark:border-gray-700 bg-transparent outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 
            dark:border-gray-700 bg-transparent outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 
            dark:border-gray-700 bg-transparent outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-medium 
            bg-black text-white dark:bg-white dark:text-black 
            hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-sm text-center mt-2">
              {status}
            </p>
          )}
        </motion.form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:your@email.com">
            Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;