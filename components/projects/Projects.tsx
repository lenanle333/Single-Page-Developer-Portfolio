import React from "react";
import styles from "../../styles/section/_projects.module.scss";
import btn from "../../styles/utilities/_buttons.module.scss";
import {
	projectImg1,
	projectImg2,
	projectImg3,
	projectImg4,
	projectImg5,
	projectImg6,
} from "@/assets/images/projects";

import ProjectsCard from "./ProjectsCard";
const Projects = () => {
	const projects = [
		{
			image: projectImg1,
			title: "DESIGN PORTFOLIO",
			skills: ["HTML", "CSS"],
		},
		{
			image: projectImg2,
			title: "E-LEARNING LANDING PAGE",
			skills: ["HTML", "CSS"],
		},
		{
			image: projectImg3,
			title: "TODO WEB APP",
			skills: ["HTML", "CSS", "JAVASCRIPT"],
		},
		{
			image: projectImg4,
			title: "ENTERTAINMENT WEB APP",
			skills: ["HTML", "CSS", "JAVASCRIPT"],
		},
		{
			image: projectImg5,
			title: "MEMORY GAME",
			skills: ["HTML", "CSS", "JAVASCRIPT"],
		},
		{
			image: projectImg6,
			title: "ART GALLERY SHOWCASE",
			skills: ["HTML", "CSS", "JAVASCRIPT"],
		},
	];
	return (
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<h2>Projects</h2>
				<button className={btn.primaryBtn}>Contact me</button>
			</div>
			<div className={styles.projectsCards}>
				{projects.map((project, index: number) => (
					<ProjectsCard
						key={index}
						image={project.image}
						title={project.title}
						skills={project.skills}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
