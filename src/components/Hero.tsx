function Hero() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h1 className="inline-flex flex-col">
            Hi, I am{" "}
            <span className="animate-bounce  pt-4 text-xl font-medium min-[415px]:pt-2">
              Ladislav Topolsky
            </span>
            <span>Software Engineer</span>
          </h1>
          <div className="flex flex-col gap-2 pt-4 md:flex-row">
            <a
              href="Topolsky-Ladislav-CV.pdf"
              download="Topolsky_Ladislav_CV"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border-2 border-blue-500 px-2 py-1 text-center hover:bg-blue-500"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded-md border-2 border-indigo-500 px-2 py-1 text-center hover:bg-indigo-500"
            >
              Contact
            </a>
          </div>
        </div>
        <h2></h2>
        <img
          src="./picture.jpg"
          alt="picture"
          className="m-4 h-80 rounded-md border-2 border-blue-500  shadow-md ring-4 ring-indigo-500 "
        />
      </div>
    </div>
  );
}

export default Hero;
