import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-gray-800 transition-transform transform hover:scale-105">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#AA367C] via-[#AA367C] to-[#4A2FBD] opacity-0 hover:opacity-80 transition-opacity">
          <div className="text-center text-white px-2 sm:px-4 py-2">
            <h4 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{title}</h4>
            <span className="text-sm sm:text-base italic">{description}</span>
          </div>
        </div>
      </div>
      </a>
    </Col>
  );
};
