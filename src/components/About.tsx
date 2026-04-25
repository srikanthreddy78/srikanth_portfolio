import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Software Engineer and Master's in Computer Science graduate from Boston University.
          With 2+ years of industry experience, I've engineered event-driven microservices processing 1M+ daily 
          transactions, designed data pipelines saving ~$500K annually, and built full-stack applications 
          supporting 100K+ users. Passionate about building scalable systems and AI-powered solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
