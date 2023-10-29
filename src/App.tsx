import { lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Skills = lazy(() => import("./components/Skills"));
const JobCardList = lazy(() => import("./components/Jobs"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const AboutMe = lazy(() => import("./components/About"));

function App() {
  const sections = [
    {
      heading: "About Me",
      id: "about-me",
      component: <AboutMe />,
    },
    {
      heading: "Work",
      id: "experience",
      component: <JobCardList />,
    },
    {
      heading: "Skills",
      id: "skills",
      component: <Skills />,
    },
    {
      heading: "Projects",
      id: "projects",
      component: <Projects />,
    },
    {
      heading: "Education",
      id: "education",
      component: <Education />,
    },
    {
      heading: "Contact",
      id: "contact",
      component: <ContactForm />,
    },
  ];

  return (
    <div className="grid place-items-center bg-slate-900">
      <ToastContainer />
      <Header />
      <main className="container bg-slate-900 py-20 font-mono text-white">
        <Hero />
        {sections.map((section) => (
          <Section heading={section.heading} id={section.id} key={section.id}>
            {section.component}
          </Section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
