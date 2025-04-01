import React from "react";
import { FiExternalLink } from "react-icons/fi"; // 외부 링크 아이콘
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => {
    return (
        <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 shadow-md hover:shadow-blue-500/20 transition-all duration-300"
        >
            <div className="absolute top-4 right-4 text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                <FiExternalLink size={20}/>
            </div>

            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
            </h3>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {description}
            </p>
        </motion.a>
    );
};

export default ProjectCard;
