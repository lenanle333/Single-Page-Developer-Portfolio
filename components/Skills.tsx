import React from "react";
import styles from "../styles/section/_skills.module.scss";
import Image from "next/image";
import { rings } from "@/assets/images/background";
const Skills = () => {
	return (
		<div className={styles.container}>
			<div className={styles.skill}>
				<h2>HTML</h2>
				<p>4 Years Experience</p>
			</div>
			<div className={styles.skill}>
				<h2>CSS</h2>
				<p>4 Years Experience</p>
			</div>
			<div className={styles.skill}>
				<h2>Javascript</h2>
				<p>4 Years Experience</p>
			</div>
			<div className={styles.skill}>
				<h2>Accessibility</h2>
				<p>4 Years Experience</p>
			</div>
			<div className={styles.skill}>
				<h2>React</h2>
				<p>3 Years Experience</p>
			</div>
			<div className={styles.skill}>
				<h2>Sass</h2>
				<p>3 Years Experience</p>
			</div>
			<div className={styles.rings}>
				<Image src={rings} alt="background rings" />
			</div>
		</div>
	);
};

export default Skills;
