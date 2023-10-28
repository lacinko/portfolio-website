import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
const Skills = lazy(() => import("./components/Skills"));
const JobCardList = lazy(() => import("./components/Jobs"));

function App() {
  return (
    <>
      <Header />
      <main className="container bg-slate-900 py-20 font-mono text-white">
        <section className="flex items-center justify-center">
          <h1 className="inline-flex flex-col">
            Hi, I am{" "}
            <span className="animate-bounce text-xl font-medium">
              Ladislav Topolsky
            </span>
            <span>Software Engineer</span>
          </h1>
          <h2></h2>
          <img
            src="./picture.jpg"
            alt="picture"
            className="m-4 h-80 rounded-md border-2 border-blue-500  shadow-md ring-2 ring-indigo-500 ring-offset-1"
          />
        </section>
        <section id="about-me">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;About Me&gt;
          </h2>
          <p className="bg-slate-800 p-5">
            I'm a seasoned IT professional with a diverse background in web
            development and software engineering. In my first role as an
            HTML/CSS Developer at AnFas, I honed my skills in web design and
            implementation, collaborating closely with designers to bring their
            visions to life. I'm no stranger to version control and teamwork, as
            I contributed to projects daily on GitLab. At Blue Lemons, I
            embraced the role of a Frontend Developer, specializing in React and
            TypeScript to create user-centric interfaces. By leveraging the
            power of Tailwind CSS, I turned design concepts into responsive
            applications, emphasizing clean code and innovative problem-solving.
            My journey continued at SwiftShift, where I wore multiple hats as a
            Software Engineer. On the frontend, I continued to excel with React
            and TypeScript, enhancing user experiences and creating intuitive
            interfaces. I also delved into backend development, contributing to
            a job searching application using Node.js, Express, and Prisma.
            Notably, I spearheaded the creation of a microservice that
            streamlined communication processes, integrating a fax service with
            a third-party API provider. In my current role as an IT Solution
            Lead at The Adecco Group, I focus on cutting-edge solutions using
            the Microsoft Power Platform. My passion lies in optimizing business
            processes, increasing efficiency, and driving productivity. With a
            blend of technical expertise and a deep understanding of business
            objectives, I'm committed to bridging the gap between technology and
            success. I thrive on challenges and look forward to the opportunity
            to contribute my skills and experience to your projects.
          </p>
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;/About Me&gt;
          </h2>
        </section>
        <section id="work" className="pt-10">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;Work&gt;
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <JobCardList />
          </Suspense>
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;/Work&gt;
          </h2>
        </section>
        <section id="technology-stack" className="pt-10">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;Skills&gt;
          </h2>
          <article>
            <h3 className="text-lg font-medium text-blue-500">
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
            <h3 className="text-lg font-medium text-blue-500">
              Other technologies I have worked with
            </h3>
            <Suspense fallback={<div>Loading...</div>}>
              <Skills />
            </Suspense>
          </article>
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;/Skills&gt;
          </h2>
        </section>
        <section id="projects" className="pt-10">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;Projects&gt;
          </h2>
          <Projects />
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;/Projects&gt;
          </h2>
        </section>
        <section id="education" className="pt-10">
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;Education&gt;
          </h2>
          <p>My education</p>
          <h2 className="text-xl font-semibold text-indigo-500">
            &lt;/Education&gt;
          </h2>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
