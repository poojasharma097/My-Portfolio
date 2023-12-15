export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <div className="navbarLogo">
          <a href="/"><img className="navimg" src="/navpic.jpg"></img></a>
          </div>
          <div className="navbarHeading"><a href="/">POOJA SHARMA</a></div>
        </div>
        <div className="flex flex-row gap-20 navbarSubHeading">
          <div className="navbarHeading1"><a href="/">HOME</a></div>
          <div className="navbarHeading2"><a href="#about">ABOUT</a></div>
          <div className="navbarHeading3"><a href="#skills">SKILLS</a></div>
          <div className="navbarHeading4"><a href="#projects">PROJECTS</a></div>
          <div className="navbarHeading5 navcontact"><a href="#contact">CONTACT</a></div>
        </div>
      </div>
    </nav>
  );
}
