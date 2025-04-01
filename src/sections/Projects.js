import React from "react";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-20 py-28 bg-gray-900 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-400 mb-8">Projects</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
