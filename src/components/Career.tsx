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
                <h4>Software Engineer</h4>
                <h5>Securonix</h5>
              </div>
              <h3>Aug 2023 -<br />Aug 2024</h3>
            </div>
            <p>
              Engineered event-driven microservices with Spring Boot and Kafka processing 1M+ daily transactions, cutting end-to-end latency by 40%. Designed async data pipelines on AWS (Aurora PostgreSQL, S3, Lambda) boosting throughput by 80% and saving ~$500K annually. Reduced production bugs by 60% via JUnit TDD, SonarQube, and Jenkins CI/CD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Wipro</h5>
              </div>
              <h3>Jul 2022 -<br />Aug 2023</h3>
            </div>
            <p>
              Built full-stack features with React and Python/Java REST APIs on AWS supporting 100K+ users, independently owning architecture to deployment. Slashed API response time by 65% and accelerated application startup by 12% through Spring Boot performance tuning and lazy initialization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Securonix</h5>
              </div>
              <h3>Mar 2022 -<br />Aug 2022</h3>
            </div>
            <p>
              Developed real-time Apache Solr monitoring solution improving system performance tracking by 60% and reducing downtime by 40%. Designed an intelligent alert system cutting incident response time by 50%; implemented 52 targeted unit tests lowering bug reports by 15%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
