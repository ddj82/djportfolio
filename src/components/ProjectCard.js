import React from "react";

const ProjectCard = ({ title, description, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 rounded-lg p-6 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </a>
    );
};

export default ProjectCard;
