export default function Home() {
  return (
    <div>
    <div className="home min-h-screen flex flex-col gap-10">
      <div className="homeHeading">HEY, I&apos;M POOJA SHARMA</div>
      <div className="homeSubHeading">Aspiring Software Engineer & Web Developer</div>
      <div className="hometag">Transforming lines of code into meaningful experiences.</div>
    </div>
    <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
    </div>
  );
}
