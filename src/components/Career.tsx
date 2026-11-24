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
                <h4>Founding Engineer</h4>
                <h5>Audora (YC S26)</h5>
              </div>
              <h3>Sep 2026 -<br />Present</h3>
            </div>
            <p>
              Built evals for speaker identity, emotion accuracy, and speed, then tuned IndexTTS-2.5 to replace ElevenLabs at ~8x lower cost, confirmed with blind listening tests. Fixed the bottlenecks capping the rendering pipeline, scaling it from 100 to 1,000 supported users and cutting render time by ~65%. Split the job dispatcher into its own service and added a GPU priority queue, cutting infrastructure cost per book by ~3x.
            </p>
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
              Reworked how search queries and indexes were structured from frontend to backend, improving search efficiency by 80% under heavy traffic and saving ~$500K a year in infrastructure. Engineered event-driven microservices with Spring Boot, Kafka, and Solr processing 100M+ daily transactions, cutting end-to-end latency by 40%. Built a React, Redux, and GraphQL PWA that loads 30% faster.
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
              Owned full-stack development of key modules in a consumer-facing service request portal built with React, Node.js, and MongoDB, supporting 100K+ users and reducing infrastructure costs by 30%. Tuned Spring Boot and Hibernate data access using Actuator metrics, cutting API response time by 25%.
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
