import FadeInSection from "./FadeIn";

export default function About() {
  return (
    <FadeInSection>
    <div className="about" id="about">
      <h1 className="aboutHeading">ABOUT ME</h1>
      <div className="aboutPara">
      <p>
        I am a third year student pursuing Bachelor of Technology in <span className="font-bold">Computer
        Science and Engineering</span> from Jaypee Institute of Information Technology,
        Noida, UP. I am proficient in Data Structures and Algorithms, Database
        Management, and MERN stack Web Development. You can check out my work in
        the <span className="font-bold">Projects</span> section.{" "}
      </p>
      <p>
        I like to solve problems and fix errors. I am a detail-oriented person
        and I keep my goals and tasks organized to maintain productivity. I am
        an excellent team player with effective communication and collaboration
        skills. I love learning new skills and meeting new people. {" "}
      </p>
      <p>
        I&apos;m open to <span className="font-bold">Job</span> opportunities where I can contribute, learn and
        grow. If you have a good opportunity that matches my skills then please don&apos;t hesitate to contact me.
      </p>
      </div>
    </div>
    </FadeInSection>
  );
}
