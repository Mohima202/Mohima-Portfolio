
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_nmdk2eq",
        "template_tlwgp73",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "N4ZLz6M-vnGJwj48R"
      );

      setStatus("Message sent successfully! ✨");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[15%] h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="/"
          className="text-2xl font-black tracking-tight text-white"
        >
          MA<span className="text-purple-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-gray-400 transition hover:text-white">
            Home
          </a>

          <a href="/about" className="text-sm text-gray-400 transition hover:text-white">
            About
          </a>

          <a href="/skills" className="text-sm text-gray-400 transition hover:text-white">
            Skills
          </a>

          <a href="/projects" className="text-sm text-gray-400 transition hover:text-white">
            Projects
          </a>

          <a href="/education" className="text-sm text-gray-400 transition hover:text-white">
            Education
          </a>

          <a href="/contact" className="text-sm font-medium text-white">
            Contact
          </a>
        </div>

        <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 sm:block">
          ● Available for Opportunities
        </div>
      </nav>

      {/* Main */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-10 lg:pt-20">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
            Let&apos;s Connect
          </p>

          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Something Great.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            I&apos;m always interested in learning, collaborating, and working
            on meaningful projects. Feel free to reach out for internships,
            projects, or professional opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          style={{
            transform: `perspective(1200px) rotateX(${mouse.y * -1.2}deg) rotateY(${mouse.x * 1.2}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          {/* Left Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Get In Touch
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Have a project in mind?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Whether it&apos;s a web application, full-stack project, or a
                new idea worth exploring, I&apos;d love to hear about it.
              </p>
            </div>

            {/* Email */}
            <a
              href="#contact-form"
              className="group mb-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-xl">
                ✉
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  Send a message through the form
                </p>
              </div>

              <span className="ml-auto text-xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-purple-300">
                ↗
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Mohima202"
              target="_blank"
              rel="noreferrer"
              className="group mb-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold">
                GH
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  GitHub
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  github.com/Mohima202
                </p>
              </div>

              <span className="ml-auto text-xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                ↗
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohima-afroze-9a99bb431"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-sm font-bold">
                in
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm font-medium text-gray-200">
                  Connect with me
                </p>
              </div>

              <span className="ml-auto text-xl text-gray-500 transition group-hover:translate-x-1 group-hover:text-blue-300">
                ↗
              </span>
            </a>
          </div>

          {/* Right Card */}
          <div
            id="contact-form"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-cyan-500/[0.08] p-8 backdrop-blur-xl sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl shadow-xl">
                ✦
              </div>

              <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Let&apos;s Talk
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-400/50"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-400/50"
                />

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-400/50"
                />

                {/* Status */}
                {status && (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.includes("successfully")
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded-2xl border border-purple-400/20 bg-purple-500/10 px-6 py-4 font-semibold text-purple-200 transition duration-300 hover:-translate-y-1 hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Me a Message ↗"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-600">
            Keep Learning • Keep Building • Keep Growing
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Mohima Afroze. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Mohima202"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-bold text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              GH
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohima-afroze-9a99bb431"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-bold text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              in
            </a>

            {/* Email */}
            <a
              href="#contact-form"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              ✉
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;

