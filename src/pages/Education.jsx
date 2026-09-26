import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Education() {
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

  const subjects = [
    "Data Structures & Algorithms",
    "Database Management",
    "Computer Networks",
    "Operating Systems",
    "Compiler Design",
    "Web Development",
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
                  name === "Education"
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

        <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/5 blur-[140px]" />

        {/* Page Heading */}

        <div className="relative z-10 mb-14 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-purple-300">
            Academic Journey
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Education
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            My academic journey in Computer Science & Engineering and
            the knowledge I am building along the way.
          </p>

        </div>

        {/* ================= MAIN EDUCATION CARD ================= */}

        <div
          className="relative z-10 mx-auto max-w-6xl"
          style={{
            transform: `perspective(1400px) rotateX(${-mouse.y * 1.5}deg) rotateY(${mouse.x * 1.5}deg)`,
            transition: "transform 0.15s ease-out",
          }}
        >

          <div className="rounded-[40px] border border-white/10 bg-white/[0.045] p-8 shadow-[0_0_100px_rgba(139,92,246,0.12)] backdrop-blur-2xl md:p-12">

            <div className="grid gap-10 md:grid-cols-[180px_1fr]">

              {/* Degree Badge */}

              <div className="flex items-start justify-center">

                <div className="flex h-36 w-36 items-center justify-center rounded-[35px] border border-purple-300/20 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-blue-500/10 text-center shadow-[0_0_50px_rgba(168,85,247,0.12)]">

                  <div>
                    <p className="text-4xl font-black text-purple-200">
                      CSE
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                      Degree
                    </p>
                  </div>

                </div>

              </div>

              {/* Education Details */}

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-purple-300">
                  Bachelor of Science
                </p>

                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Computer Science & Engineering
                </h2>

                <h3 className="mt-3 text-lg text-gray-300">
                  International Islamic University Chittagong
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  IIUC • Bangladesh
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-gray-300">
                    CSE Student
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm text-gray-300">
                    Undergraduate
                  </span>

                  <span className="rounded-full border border-emerald-400/10 bg-emerald-400/5 px-5 py-2.5 text-sm text-emerald-300">
                    Currently Studying
                  </span>

                </div>

                <p className="mt-8 max-w-3xl leading-8 text-gray-500">
                  My Computer Science & Engineering studies are helping me
                  build a strong foundation in programming, algorithms,
                  databases, software development, and modern web
                  technologies.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= WHAT I'M LEARNING ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl md:p-10">

            <div className="mb-8">

              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
                Academic Focus
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                What I'm Learning
              </h2>

              <p className="mt-3 max-w-2xl text-gray-500">
                Throughout my CSE journey, I have explored different
                areas of computer science and software development.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">

              {subjects.map((subject, index) => (
                <div
                  key={subject}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-purple-500/[0.06]"
                >

                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-xs font-bold text-purple-300">
                    0{index + 1}
                  </div>

                  <h3 className="font-semibold text-gray-300 transition group-hover:text-white">
                    {subject}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= LEARNING MINDSET ================= */}

        <section className="relative z-10 mt-8">

          <div className="grid gap-6 md:grid-cols-3">

            {/* Card 1 */}

            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-300/20">

              <div className="text-3xl">💻</div>

              <h3 className="mt-5 text-xl font-bold">
                Practical Learning
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building real projects to turn academic knowledge into
                practical development experience.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-300/20">

              <div className="text-3xl">🧠</div>

              <h3 className="mt-5 text-xl font-bold">
                Problem Solving
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Improving my logical thinking through algorithms,
                programming and continuous practice.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-300/20">

              <div className="text-3xl">🚀</div>

              <h3 className="mt-5 text-xl font-bold">
                Continuous Growth
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Exploring modern technologies and continuously improving
                my development skills.
              </p>

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="relative z-10 mt-8">

          <div className="rounded-[32px] border border-purple-300/10 bg-gradient-to-br from-purple-500/[0.08] via-white/[0.03] to-blue-500/[0.06] p-10 text-center backdrop-blur-2xl">

            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">
              Explore More
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Want to See What I Can Build?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
              Explore my projects and technologies to see how I apply
              what I learn to real-world applications.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/projects"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-purple-200"
              >
                Explore Projects
              </Link>

              <Link
                to="/skills"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                View Skills
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

export default Education;