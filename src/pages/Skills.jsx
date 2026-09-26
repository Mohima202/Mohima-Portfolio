import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Skills() {
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

  const skillCategories = [
    {
      number: "01",
      title: "Programming",
      description: "Languages and core programming concepts.",
      skills: ["C", "C++", "Python", "JavaScript"],
    },
    {
      number: "02",
      title: "Frontend Development",
      description: "Building modern and responsive user interfaces.",
      skills: ["HTML", "CSS", "Tailwind CSS", "React.js"],
    },
    {
      number: "03",
      title: "Backend Development",
      description: "Developing server-side applications and APIs.",
      skills: ["Node.js", "Express.js", "Django"],
    },
    {
      number: "04",
      title: "Database & Authentication",
      description: "Working with databases and application authentication.",
      skills: ["MongoDB", "Firebase"],
    },
    {
      number: "05",
      title: "Computer Science",
      description: "Core concepts that strengthen problem-solving skills.",
      skills: ["Algorithms", "Compiler Design"],
    },
    {
      number: "06",
      title: "Data & Analysis",
      description: "Exploring data and extracting useful insights.",
      skills: ["Data Analysis", "Python"],
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
                  name === "Skills"
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

        <div className="pointer-events-none absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[5%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/5 blur-[130px]" />

        {/* ================= HEADING ================= */}

        <div className="relative z-10 mb-16 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-purple-300">
            My Tech Stack
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Technologies, programming languages, and computer science
            concepts I use and continue to explore.
          </p>

        </div>

        {/* ================= 3D SKILLS CONTAINER ================= */}

        <div
          className="relative z-10"
          style={{
            transform: `perspective(1400px) rotateX(${-mouse.y * 1.2}deg) rotateY(${mouse.x * 1.2}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          <div className="grid gap-6 md:grid-cols-2">

            {skillCategories.map((category) => (
              <div
                key={category.number}
                className="group rounded-[32px] border border-white/10 bg-white/[0.045] p-7 shadow-[0_0_70px_rgba(139,92,246,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-purple-300/20 hover:bg-white/[0.06] md:p-8"
              >

                {/* Top */}

                <div className="flex items-start justify-between">

                  <div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-300">
                      {category.number}
                    </div>

                    <h2 className="mt-5 text-2xl font-bold">
                      {category.title}
                    </h2>

                  </div>

                  <div className="text-3xl text-white/10 transition duration-300 group-hover:text-purple-300/20">
                    ◈
                  </div>

                </div>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {category.description}
                </p>

                {/* Skills */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-gray-300 transition duration-300 hover:border-purple-300/30 hover:bg-purple-500/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================= FULL STACK FLOW ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-10">

            <div className="text-center">

              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Development Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                From Frontend to Backend
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-gray-500">
                Exploring the complete development process — from
                designing interfaces to building backend systems and
                managing data.
              </p>

            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center transition hover:-translate-y-1 hover:border-purple-300/20">
                <div className="text-3xl">🎨</div>
                <h3 className="mt-4 font-bold">Frontend</h3>
                <p className="mt-2 text-xs text-gray-500">
                  HTML • CSS • React
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center transition hover:-translate-y-1 hover:border-purple-300/20">
                <div className="text-3xl">⚙️</div>
                <h3 className="mt-4 font-bold">Backend</h3>
                <p className="mt-2 text-xs text-gray-500">
                  Node • Express • Django
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center transition hover:-translate-y-1 hover:border-purple-300/20">
                <div className="text-3xl">🗄️</div>
                <h3 className="mt-4 font-bold">Database</h3>
                <p className="mt-2 text-xs text-gray-500">
                  MongoDB • Firebase
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center transition hover:-translate-y-1 hover:border-purple-300/20">
                <div className="text-3xl">📊</div>
                <h3 className="mt-4 font-bold">Data</h3>
                <p className="mt-2 text-xs text-gray-500">
                  Python • Data Analysis
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-purple-300/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-blue-500/[0.06] p-10 text-center backdrop-blur-2xl">

            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Let's Create
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Skills Become Meaningful Through Projects
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
              Take a look at the projects where I apply these technologies
              to build practical applications.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
            >
              Explore My Projects
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

export default Skills;