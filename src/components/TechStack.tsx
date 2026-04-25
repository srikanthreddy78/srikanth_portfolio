import { useRef, useEffect, useState } from "react";
import "./styles/TechStack.css";

type TechCategory = {
  title: string;
  items: string[];
};

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "Java", "Golang", "C#", "C++", "SQL", "Bash", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["React Native (Expo)", "React.js", "Next.js", "Redux", "GraphQL (AppSync)", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Flask", "Spring Boot", "Kafka", "LangChain", "OpenAI API", "AWS Bedrock", "Pinecone", "RAG", "AWS Lambda", "Fargate", "Step Functions", "S3", "CDK", "EventBridge"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL (Aurora)", "MySQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch", "ChromaDB"],
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="techstack-section" ref={sectionRef}>
      <h2 className="techstack-title">
        Technical <span>&</span>
        <br />Skills
      </h2>
      <div className="techstack-grid">
        {techCategories.map((category, catIdx) => (
          <div
            key={category.title}
            className={`techstack-category ${isVisible ? "techstack-visible" : ""}`}
            style={{ animationDelay: `${catIdx * 0.15}s` }}
          >
            <h3 className="techstack-category-title">{category.title}</h3>
            <div className="techstack-pills">
              {category.items.map((item, itemIdx) => (
                <span
                  key={item}
                  className={`techstack-pill ${isVisible ? "pill-visible" : ""}`}
                  style={{ animationDelay: `${catIdx * 0.15 + itemIdx * 0.04}s` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
