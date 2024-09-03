import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/Resume_genie.jpg";
import projImg2 from "../assets/Resume_genie.jpg";
import projImg3 from "../assets/Resume_genie.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    { title: "xxx", description: "YYY", imgUrl: projImg1 },
    { title: "xxx", description: "YYY", imgUrl: projImg2 },
    { title: "xxx", description: "YYY", imgUrl: projImg3 },
    { title: "xxx", description: "YYY", imgUrl: projImg1 },
    { title: "xxx", description: "YYY", imgUrl: projImg2 },
    { title: "xxx", description: "YYY", imgUrl: projImg3 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-4 mb-4"> 
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="my-20 text-center text-4xl text-neutral-600">
                    Projects
                  </h2>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                      />
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </div>
  );  
}
