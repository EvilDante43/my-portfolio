import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import api from "../api/axios.js";

gsap.registerPlugin(ScrollTrigger);

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact({ data }) {
  const rootRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", text: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", text: "Transmitting..." });
    try {
      const res = await api.post("/contact", form);
      setStatus({ state: "success", text: res.data.message || "Message sent." });
      setForm(initialForm);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        "Transmission failed. Backend offline — is the Express/MongoDB server running?";
      setStatus({ state: "error", text: msg });
    }
  };

  return (
    <section id="contact" ref={rootRef} className="relative border-t border-white/5 bg-panel/30 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="contact-reveal">
          <p className="eyebrow mb-3">// Open Channel</p>
          <h2 className="section-heading mb-6">
            Let's <span className="text-gradient-arc">Build</span>
          </h2>
          <p className="max-w-md text-ink-300">
            Open to Software Development Engineer roles and interesting collaborations.
            Send a transmission — I read every message that comes through the mainframe.
          </p>

          <div className="mt-10 space-y-4 font-mono text-sm">
            <p className="text-ink-500">
              EMAIL <br />
              <a href={`mailto:${data.contact.email}`} className="text-arc-cyan hover:underline">
                {data.contact.email}
              </a>
            </p>
            <p className="text-ink-500">
              PHONE <br />
              <span className="text-ink-100">{data.contact.phone}</span>
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-reveal panel hud-frame relative space-y-5 p-8">
          <span className="hud-tr" />
          <span className="hud-bl" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-500">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tony Stark"
                className="w-full border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-700 focus:border-arc-cyan/60"
              />
            </div>
            <div>
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-500">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@starkindustries.com"
                className="w-full border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-700 focus:border-arc-cyan/60"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-500">
              Subject
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              className="w-full border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-700 focus:border-arc-cyan/60"
            />
          </div>

          <div>
            <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-ink-500">
              Message
            </label>
            <textarea
              required
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you're building..."
              className="w-full resize-none border border-white/10 bg-void/60 px-4 py-3 text-sm text-ink-100 outline-none placeholder:text-ink-700 focus:border-arc-cyan/60"
            />
          </div>

          <button type="submit" disabled={status.state === "loading"} className="btn-repulsor w-full justify-center disabled:opacity-60">
            {status.state === "loading" ? "Transmitting..." : "Send Transmission"}
          </button>

          {status.state !== "idle" && status.state !== "loading" && (
            <p
              className={`font-mono text-xs ${
                status.state === "success" ? "text-arc-cyan" : "text-stark-redBright"
              }`}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
