import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Associate</h4>
                <h5>Securonix</h5>
              </div>
              <h3>Aug 2023 - Aug 2024</h3>
            </div>
            <p>
              Architected event-driven API microservices using Spring Boot and Kafka. Redesigned Apache Solr query pipelines and automated CI/CD pipelines with Jenkins and SonarQube via TDD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Wipro</h5>
              </div>
              <h3>Jul 2022 - Aug 2023</h3>
            </div>
            <p>
              Optimized Hibernate-based data access layers and transactional workflows in a high-traffic PostgreSQL environment. Configured Spring Boot to fine-tune application performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Securonix</h5>
              </div>
              <h3>Mar 2022 - Aug 2022</h3>
            </div>
            <p>
              Developed Metrics Service, a real-time performance monitoring solution for Apache Solr tracking CPU, memory, and disk metrics. Engineered an intelligent alert system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
