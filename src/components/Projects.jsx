import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/ResumeGenie.jpeg";
import projImg2 from "../assets/Resume_parsing_image.jpeg";
import projImg3 from "../assets/air_mouse.jpeg";
import projImg4 from "../assets/LMS.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {motion} from "framer-motion";

export const Projects = () => {
  const projects = [
    { title: "ATS Resume Checker", description: "A Django-based application that uses machine learning and AI techniques to analyze and score resumes. It evaluates resumes based on various parameters, including their alignment with job descriptions, font usage, content structure, and the presence of key sections.", imgUrl: projImg1, url: "https://github.com/monishkumardhanasekar/ResumeGenie.git" },
    { title: "Library Management System", description: "A web-based system for managing libraries, offering features for book tracking, inventory management, user checkouts, and returns. Built using Node and a MongoDB database.", imgUrl: projImg4, url: "https://github.com/monishkumardhanasekar/Library-Management-System-Web-Development-.git" },
    { title: "Air Mouse", description: "An innovative project to control a computer’s cursor using the relative motion of a user's finger. The air mouse tracks hand movements and translates them into cursor movements.", imgUrl: projImg3, url: "https://github.com/monishkumardhanasekar/Air-Mouse.git" },
    { title: "Resume Parsing techniques", description: "This project allows users to upload resume files in various formats. The application extracts relevant data from the resumes and stores it in MongoDB for structured storage and Amazon S3 for file storage. The parsed data is then displayed on a webpage for users to view.", imgUrl: projImg2, url: "https://github.com/monishkumardhanasekar/ResumeParsing.git" },
   
    
  ];

  return (
    <div className="border-b border-neutral-800 pb-4 mb-4"> 
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl text-neutral-600"
                  >
                  Projects
                  </motion.h2>
                  <div className="flex flex-wrap gap-8 justify-center">
                    {projects.map((project, index) => (
                      <motion.div
                      key={index}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        url={project.url}
                      />
                      </motion.div>
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
