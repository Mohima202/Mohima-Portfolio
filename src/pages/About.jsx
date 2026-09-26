import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
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

  const interests = [
    "Full-Stack Development",
    "Web Applications",
    "Problem Solving",
    "Modern Technologies",
    "Creative UI",
    "Learning & Growth",
  ];

  const technologies = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "Python",
  "Django",
  "MongoDB",
  "Firebase",
  "Data Analysis",
];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= HEADER ================= */}

      <header className="relative z-50 px-5 pt-5 md:px-8">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.045] px-5 shadow-[0_0_60px_rgba(139,92,246,0.12)] backdrop-blur-2xl md:px-8">

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
                  name === "About"
                    ? "bg-purple-500/15 text-purple-200"
                    : "text-gray-400 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-300 lg:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">

        {/* Background Glows */}

        <div className="pointer-events-none absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[140px]" />

        {/* Page Heading */}

        <div className="relative z-10 mb-14 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-purple-300">
            Get To Know Me
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            A little glimpse into my journey, interests, and the things
            I love building with technology.
          </p>

        </div>

        {/* ================= 3D ABOUT CARD ================= */}

        <div
          className="relative z-10 mx-auto max-w-6xl"
          style={{
            transform: `perspective(1400px) rotateX(${-mouse.y * 1.5}deg) rotateY(${mouse.x * 1.5}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          <div className="grid gap-6 md:grid-cols-5">

            {/* Identity Card */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_80px_rgba(139,92,246,0.10)] backdrop-blur-2xl md:col-span-2">

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-purple-300/20 bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-3xl font-black text-purple-200 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                MA
              </div>

              <h2 className="mt-7 text-3xl font-bold">
                Mohima Afroze
              </h2>

              <p className="mt-2 text-purple-300">
                CSE Student • Aspiring Full-Stack Developer
              </p>

              <p className="mt-6 text-sm leading-7 text-gray-500">
                I am a Computer Science and Engineering student who enjoys
                transforming ideas into practical and meaningful web
                applications.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                  IIUC
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                  CSE
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400">
                  Developer
                </span>
              </div>

            </div>

            {/* Main About */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_80px_rgba(139,92,246,0.10)] backdrop-blur-2xl md:col-span-3">

              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                My Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Building, Learning,
                <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Exploring.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                I am passionate about software development and enjoy
                creating web applications that solve real-world problems.
                My journey in Computer Science has allowed me to explore
                both frontend and backend development.
              </p>

              <p className="mt-5 leading-8 text-gray-500">
                From designing interfaces with React and Tailwind CSS to
                building backend systems with Node.js, Express.js and
                Django, I am continuously learning and improving my
                development skills.
              </p>

              <p className="mt-5 leading-8 text-gray-500">
                I am currently focused on becoming a strong full-stack
                developer while gaining practical experience through
                projects, problem solving, and continuous exploration of
                modern technologies.
              </p>

            </div>

          </div>

        </div>

        {/* ================= INTERESTS ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-10">

            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
                What I Love
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Areas I'm Exploring
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">

              {interests.map((interest, index) => (
                <div
                  key={interest}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/[0.06]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-300">
                    0{index + 1}
                  </div>

                  <h3 className="font-semibold text-gray-200 transition group-hover:text-white">
                    {interest}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= TECHNOLOGIES ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              My Tech Universe
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Technologies I Work With
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-gray-300 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-purple-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-purple-300/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-blue-500/[0.06] p-10 text-center backdrop-blur-2xl">

            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              What's Next?
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Let's Build Something Meaningful
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
              I am always interested in learning, building new things,
              and exploring opportunities where I can grow as a developer.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
              >
                View My Projects
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                Get In Touch
              </Link>

            </div>

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

export default About;