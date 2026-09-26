import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
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

  const projects = [
    {
      number: "01",
      title: "StayNest",
      subtitle: "Hostel Management System",
      description:
        "A full-stack hostel management platform with authentication, dashboards, hostel management, booking requests, payment information, and role-based features.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Tailwind CSS",
      ],
      live: "https://staynest-hostel-management-system-n.vercel.app/",
      github:
        "https://github.com/Mohima202/Staynest-Hostel-Management-System",
      type: "Full-Stack",
    },

    {
      number: "02",
      title: "MindMate",
      subtitle: "Student Wellness Platform",
      description:
        "A student-focused web application featuring stress checking, mood tracking, journaling, focus tools, relaxation activities, and weekly analytics.",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Local Storage",
      ],
      live: "https://mind-mate-one-rho.vercel.app/",
      github: "https://github.com/Mohima202/MindMate",
      type: "React Application",
    },

    {
      number: "03",
      title: "Event Management System",
      subtitle: "Django-Based Event Platform",
      description:
        "A Django-based event management platform for browsing events, participant registration, organizer management, and event-related activities.",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "SQLite",
      ],
      live: "https://event-management-system-pfzv.onrender.com/",
      github: "https://github.com/Mohima202/Event-Management-System",
      type: "Django Application",
    },

   {
  number: "04",
  title: "My SD Project",
  subtitle: "E-Commerce Website",
  description:
    "A modern e-commerce website designed for browsing products, exploring categories, and providing a smooth and user-friendly shopping experience.",
  technologies: [
   "Python",
        "Django",
        "HTML",
        "CSS",
        "SQLite",
  ],
  live: "https://my-sd-project.onrender.com/",
  github: "https://github.com/Mohima202/My-SD-Project",
  type: "E-Commerce",
},

{
  number: "05",
  title: "Calculator Language Compiler",
  subtitle: "Compiler Design Project",
  description:
    "An academic compiler project developed in C++ to implement fundamental compiler design concepts through a calculator language, including lexical analysis, parsing, and syntax processing.",
  technologies: [
    "C++",
    "Compiler Design",
    "Lexical Analysis",
    "Parsing",
    "Code::Blocks",
  ],
  live: "",
  github: "https://github.com/Mohima202/Calculator-Language-Compiler",
  type: "Academic Project",
},
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= HEADER ================= */}

      <header className="relative z-50 px-5 pt-5 md:px-8">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.045] px-5 shadow-[0_0_60px_rgba(139,92,246,0.12)] backdrop-blur-2xl md:px-8">

          {/* Logo */}

          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-500/10 text-sm font-black text-purple-200 transition duration-300 group-hover:rotate-6 group-hover:bg-purple-500/20">
              MA
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold tracking-wide">
                Mohima Afroze
              </p>

              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                CSE • Developer
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <nav className="flex items-center gap-1 overflow-x-auto">

            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Skills", "/skills"],
              ["Projects", "/projects"],
              ["Education", "/education"],
              ["Contact", "/contact"],
            ].map(([name, path]) => (
              <Link
                key={name}
                to={path}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs transition duration-300 md:px-4 md:text-sm ${
                  name === "Projects"
                    ? "bg-purple-500/15 text-purple-200"
                    : "text-gray-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {name}
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

      {/* ================= MAIN ================= */}

      <main className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

        {/* Background Glows */}

        <div className="pointer-events-none absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[5%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/5 blur-[130px]" />

        {/* ================= HEADING ================= */}

        <div className="relative z-10 mb-16 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-purple-300">
            Selected Work
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            A collection of projects where I turn ideas into practical
            applications using modern web technologies.
          </p>

        </div>

        {/* ================= PROJECTS ================= */}

        <div
          className="relative z-10"
          style={{
            transform: `perspective(1400px) rotateX(${-mouse.y * 1.2}deg) rotateY(${mouse.x * 1.2}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          <div className="grid gap-7 md:grid-cols-2">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_80px_rgba(139,92,246,0.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-purple-300/25 hover:shadow-[0_0_90px_rgba(139,92,246,0.14)] md:p-8"
              >

                {/* Glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[70px] transition duration-500 group-hover:bg-purple-500/20" />

                {/* Top */}

                <div className="relative flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-300">
                    {project.number}
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-500">
                    {project.type}
                  </span>

                </div>

                {/* Title */}

                <div className="relative mt-7">

                  <h2 className="text-3xl font-bold transition group-hover:text-purple-100">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-purple-300">
                    {project.subtitle}
                  </p>

                </div>

                {/* Description */}

                <p className="relative mt-5 min-h-[110px] text-sm leading-7 text-gray-500">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="relative mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-400 transition hover:border-purple-300/30 hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="relative mt-8 flex gap-3">

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-gray-300 transition duration-300 hover:scale-105 hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    GitHub ↗
                  </a>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* ================= PROJECT PHILOSOPHY ================= */}

        <section className="relative z-10 mt-10">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-10">

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300">
                  01
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Learn
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Exploring technologies through hands-on development and
                  continuous practice.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  02
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Build
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Turning ideas into functional applications that solve
                  practical problems.
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
                  03
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  Improve
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Learning from every project and continuously improving
                  both technical and creative skills.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-purple-300/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-blue-500/[0.06] p-10 text-center backdrop-blur-2xl">

            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Let's Connect
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Have an Idea in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
              I am always interested in learning, collaborating, and
              building meaningful digital experiences.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
            >
              Get In Touch
            </Link>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-8 text-center">

          <p className="text-sm text-gray-600">
            © 2026 Mohima Afroze • Built with React + Tailwind CSS
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Projects;