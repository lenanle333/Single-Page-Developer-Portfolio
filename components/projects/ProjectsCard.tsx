import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/components/_projects-card.module.scss";
import btn from "../../styles/utilities/_buttons.module.scss";

interface ProjectCardProps {
	image: string | StaticImageData;
	title: string;
	skills: string[];
}
const ProjectsCard: React.FC<ProjectCardProps> = ({ image, title, skills }) => {
	const [hover, setHover] = useState(false);
	const [width, setWidth] = useState(() => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
		return null;
	});

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const onHover = (e: any) => {
		e.preventDefault();
		setHover(true);
		console.log("hovered");
	};

	const onHoverOver = (e: any) => {
		e.preventDefault();
		setHover(false);
	};
	return (
		<div className={styles.container}>
			{hover && width && width > 1400 ? (
				<div className={styles.thumbnail}>
					<Image
						onMouseEnter={(e) => onHover(e)}
						onMouseLeave={(e) => onHoverOver(e)}
						src={image}
						alt={title}
					/>
					<div className={styles.lgBtnContainer}>
						<button onMouseEnter={(e) => onHover(e)} className={btn.primaryBtn}>
							View project
						</button>
						<button onMouseEnter={(e) => onHover(e)} className={btn.primaryBtn}>
							View code
						</button>
					</div>
				</div>
			) : (
				<div className={styles.thumbnail}>
					<Image
						onMouseEnter={(e) => onHover(e)}
						onMouseLeave={(e) => onHoverOver(e)}
						src={image}
						alt={title}
					/>
				</div>
			)}
			<h3>{title}</h3>
			<div className={styles.skillsList}>
				{skills.map((skill: string, index: number) => (
					<p key={index}>{skill}</p>
				))}
			</div>
			<div className={styles.smBtnContainer}>
				<button className={btn.primaryBtn}>View project</button>
				<button className={btn.primaryBtn}>View code</button>
			</div>
		</div>
	);
};

export default ProjectsCard;
