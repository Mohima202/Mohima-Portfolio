
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const technologies = [
    "MERN Stack",
    "JavaScript",
    "Python",
    "Django",
    "Data Analysis",
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= HEADER / NAVBAR ================= */}

      <header className="relative z-50 px-5 pt-5 md:px-8">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.045] px-5 shadow-[0_0_60px_rgba(139,92,246,0.12)] backdrop-blur-2xl md:px-8">

          {/* Logo */}

          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10 text-sm font-black text-purple-200 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition duration-300 group-hover:rotate-6 group-hover:bg-purple-500/20">
              MA
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide text-white">
                Mohima Afroze
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                CSE • Developer
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <nav className="flex items-center gap-1 overflow-x-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-gray-400 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] hover:text-white md:px-4 md:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Availability */}

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 lg:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden px-6">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[130px]" />

          <div className="absolute left-[5%] top-[15%] h-[220px] w-[220px] rounded-full bg-blue-500/10 blur-[100px]" />

          <div className="absolute bottom-[5%] right-[5%] h-[280px] w-[280px] rounded-full bg-pink-500/10 blur-[110px]" />

        </div>

        {/* Floating Technology Cards */}

        <div className="pointer-events-none absolute left-[8%] top-[20%] hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-400 shadow-2xl backdrop-blur-xl md:block">
          React.js
        </div>

        <div className="pointer-events-none absolute right-[8%] top-[25%] hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-400 shadow-2xl backdrop-blur-xl md:block">
          Node.js
        </div>

        <div className="pointer-events-none absolute bottom-[18%] left-[12%] hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-400 shadow-2xl backdrop-blur-xl md:block">
          Django
        </div>

        <div className="pointer-events-none absolute bottom-[15%] right-[12%] hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-400 shadow-2xl backdrop-blur-xl md:block">
          MongoDB
        </div>

        {/* Main 3D Card */}

        <div
          className="relative z-10 w-full max-w-5xl"
          style={{
            transform: `perspective(1400px) rotateX(${-mouse.y * 2}deg) rotateY(${mouse.x * 2}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          <div className="rounded-[40px] border border-white/10 bg-white/[0.045] px-7 py-16 text-center shadow-[0_0_100px_rgba(139,92,246,0.14)] backdrop-blur-2xl md:px-16 md:py-24">

            {/* Small Label */}

            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-purple-300">
              Computer Science & Engineering
            </p>

            {/* Name */}

            <h1 className="text-5xl font-black tracking-tight md:text-8xl">
              Mohima

              <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                Afroze
              </span>
            </h1>

            {/* Role */}

            <div className="mt-8">
              <p className="text-xl font-semibold text-white md:text-3xl">
                CSE Student
              </p>

              <p className="mt-2 text-lg text-gray-400 md:text-2xl">
                Aspiring Full-Stack Developer
              </p>
            </div>

            {/* Technologies */}

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm text-gray-300 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-purple-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Internship Status */}

            <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-3 text-sm text-emerald-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

              Open to Internship Opportunities
            </div>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
              Passionate about building practical web applications,
              exploring modern technologies, and turning ideas into
              meaningful digital experiences.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
              >
                Explore My Work
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                Contact Me
              </Link>

            </div>

          </div>
        </div>

        {/* Scroll Indicator */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-gray-600">
          Explore My Universe
        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]">

        {/* Footer Glow */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Identity */}

            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10 font-black text-purple-200">
                  MA
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Mohima Afroze
                  </h3>

                  <p className="text-xs text-gray-500">
                    CSE Student • Aspiring Full-Stack Developer
                  </p>
                </div>

              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
                Building practical web applications, exploring modern
                technologies, and turning ideas into meaningful digital
                experiences.
              </p>
            </div>

            {/* Explore */}

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Explore
              </h3>

              <div className="grid grid-cols-2 gap-3 text-sm">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-500 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>
            </div>

            {/* Connect */}

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Connect
              </h3>

              <div className="flex gap-3">

                {/* GitHub */}

                <a
                  href="https://github.com/Mohima202"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-white"
                >
                  GH
                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/mohima-afroze-9a99bb431"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-white"
                >
                  in
                </a>

                {/* Email → Contact Form */}

                <Link
                  to="/contact"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-white"
                >
                  ✉
                </Link>

              </div>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm text-purple-300 transition hover:text-purple-200"
              >
                Let's build something
                <span className="text-base">↗</span>
              </Link>
            </div>

          </div>

          {/* Copyright */}

          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 md:flex-row">

            <p>
              © 2026 Mohima Afroze. All rights reserved.
            </p>

            <p>
              Designed & built with React + Tailwind CSS
            </p>

          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;

