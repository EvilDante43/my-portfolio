import React, { useState } from "react";
import toast from "react-hot-toast";
import GlowButton from "../common/GlowButton";
import { sendMessage } from "../../services/contactService";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    try {
      await sendMessage(formData);
      toast.success("Message sent successfully!", { id: toastId });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded bg-[#121212]/50 border border-white/5 space-y-4"
    >
      <div className="space-y-1">
        <label className="block text-xs font-mono text-gray-400">// Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-sans"
          placeholder="Tony Stark"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-mono text-gray-400">// Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-sans"
          placeholder="tony@stark.com"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-mono text-gray-400">// Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-sans"
          placeholder="Project Inquiry"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-mono text-gray-400">// Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500 font-sans resize-none"
          placeholder="Write details..."
        />
      </div>

      <GlowButton
        type="submit"
        variant="red"
        disabled={loading}
        className="w-full mt-2"
      >
        {loading ? "Sending..." : "Send Message"}
      </GlowButton>

    </form>
  );
}

export default ContactForm;
