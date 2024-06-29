import FadeInSection from "./FadeIn";

export default function Contact() {
  return (
    <FadeInSection>
    <div className="contact about" id="contact">
      <h1 className="aboutHeading">CONTACT ME</h1>
      <div className=" contactPara">
        <p>
          I&apos;m always open to discussing project ideas, work or partnership
          opportunities. Feel free to contact me on the following platforms and
          I will get back to you as soon as possible.
        </p>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/pooja-sharma-a80458222/">
          <img
            className="social"
            src="/icons8-linkedin-50.png"
            alt="linkedin-icon"
          />
        </a>
        <a href="https://github.com/poojasharma097">
          <img
            className="social"
            src="/icons8-github-50.png"
            alt="github-icon"
          />
        </a>
        <a href="https://twitter.com/Poojasharma097">
          <img
            className="social"
            src="/icons8-twitter-50.png"
            alt="twitter-icon"
          />
        </a>
      </div>
      <div className="copyright">
          Crafted with love and caffeine by <a href="/">Pooja Sharma</a>.
      </div>
    </div>
    </FadeInSection>
  );
}
