import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
const Skills = lazy(() => import("./components/Skills"));
const JobCardList = lazy(() => import("./components/Jobs"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const ContactForm = lazy(() => import("./components/ContactForm"));

function App() {
  const softSkills = [
    "Creative spirit",
    "Reliable",
    "Professional",
    "Organized",
    "Time management",
    "Team player",
    "Fast learner",
    "Motivated",
  ];

  const aboutMe = [
    "Seasoned IT professional with a diverse background in web development and software engineering.",
    "HTML/CSS Developer at AnFas, specializing in web design and collaborating with designers.",
    "Experienced with version control and teamwork, contributing to projects on GitLab.",
    "Frontend Developer at Blue Lemons, specializing in React and TypeScript for user-centric interfaces.",
    "Proficient in Tailwind CSS to create responsive applications with clean code.",
    "Software Engineer at SwiftShift, excelling in React and TypeScript and contributing to backend development using Node.js, Express, and Prisma.",
    "Spearheaded the creation of a microservice to streamline communication processes.",
    "Currently, an IT Solution Lead at The Adecco Group, focusing on cutting-edge solutions using the Microsoft Power Platform.",
    "Passion for optimizing business processes, increasing efficiency, and driving productivity.",
    "Dedicated to bridging the gap between technology and success, thriving on challenges, and eager to contribute skills and experience to projects.",
  ];

  return (
    <div className="grid place-items-center bg-slate-900">
      <Header />
      <main className="container bg-slate-900 py-20 font-mono text-white">
        <section>
          <Hero />
        </section>
        <section id="about-me" className="-mt-28 pt-28">
          <h2 className="text-xl font-semibold text-indigo-500 odd:pb-4 even:pt-4">
            &lt;About Me&gt;
          </h2>
          <div className="bg-slate-800 p-5">
            <h3>
              <span className="font-semibold">Soft skills:</span>
            </h3>
            <ul className="grid grid-cols-2">
              {softSkills.map((skill) => (
                <li key={skill} className="text-slate-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex list-inside list-disc flex-col gap-3 bg-slate-800 p-5">
            {aboutMe.map((paragraph) => (
              <li key={paragraph} className="text-slate-300">
                {paragraph}
              </li>
            ))}
          </ul>
          <div className="bg-slate-800 p-5">
            <h3>
              <span className="font-semibold">Languages:</span>
            </h3>
            <ul className="flex justify-between gap-2">
              <li>
                English <span>C1</span>
              </li>
              <li>
                Czech <span>Native</span>
              </li>
              <li>
                Slovak <span>Native</span>
              </li>
            </ul>
          </div>
          <h2 className="pt-4 text-xl font-semibold text-indigo-500">
            &lt;/About Me&gt;
          </h2>
        </section>
        <section id="experience" className="-mt-16 pt-28">
          <h2 className="pb-4 text-xl font-semibold text-indigo-500">
            &lt;Work&gt;
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <JobCardList />
          </Suspense>
          <h2 className="pt-4 text-xl font-semibold text-indigo-500">
            &lt;/Work&gt;
          </h2>
        </section>
        <section id="skills" className="-mt-16 pt-28">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;Skills&gt;
          </h2>
          <article>
            <h3 className="pb-2 pt-4 text-lg font-bold text-blue-500">
              Favourite technologies
              <br />
            </h3>
            <ul className="bg-slate-800 p-5">
              <li>TypeScript</li>
              <li>Front-end: React</li>
              <li>Styling: Tailwind</li>
              <li>State management: Redux Toolkit & Redux Toolkit Query</li>
              <li>Back-end: Node.js, Express</li>
              <li>Database: PostgreSQL, Prisma</li>
            </ul>
          </article>
          <article className="mt-4">
            <h3 className="pb-2 pt-4 text-lg font-bold text-blue-500">
              Other technologies I have worked with
            </h3>
            <Suspense fallback={<div>Loading...</div>}>
              <Skills />
            </Suspense>
          </article>
          <h2 className="pt-4 text-xl font-semibold text-indigo-500">
            &lt;/Skills&gt;
          </h2>
        </section>
        <section id="projects" className="-mt-16 pt-28">
          <h2 className="pb-4 text-xl font-semibold text-indigo-500">
            &lt;Projects&gt;
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
          <h2 className="pt-4 text-xl font-semibold text-indigo-500">
            &lt;/Projects&gt;
          </h2>
        </section>
        <section id="education" className="-mt-16 pt-28">
          <Suspense fallback={<div>Loading...</div>}>
            <Education />
          </Suspense>
        </section>
        <section id="contact" className="-mt-16 pt-28">
          <h2 className="pb-4 text-xl font-semibold text-indigo-500">
            &lt;Contact&gt;
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
          <h2 className="pt-4 text-xl font-semibold text-indigo-500">
            &lt;/Contact&gt;
          </h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
