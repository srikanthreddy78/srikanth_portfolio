import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Founding Engineer at Audora (YC S26) and a Master's in Computer Science graduate from
          Boston University. I've scaled an AI audiobook rendering pipeline 10x, replaced ElevenLabs with a
          tuned open model at ~8x lower cost, engineered event-driven microservices processing 100M+ daily
          transactions, and saved ~$500K a year in search infrastructure. Passionate about building scalable
          systems and AI-powered solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
