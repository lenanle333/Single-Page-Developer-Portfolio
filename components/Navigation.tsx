import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/components/_navigation.module.scss";
import {
	Github,
	Linkedin,
	Twitter,
	FrontendMentor,
} from "../assets/images/icons";
const Navigation = () => {
	const [isHoveredLink, setIsHoveredLink] = useState<String>("");

	const handleMouseEnter = (link: String) => {
		setIsHoveredLink(link);
	};
	const handleMouseLeave = () => {
		setIsHoveredLink("");
	};
	const hoverStyle = {
		filter:
			"brightness(0) saturate(100%) invert(90%) sepia(46%) saturate(704%) hue-rotate(73deg) brightness(95%) contrast(86%)",
	};
	return (
		<div className={styles.navBar}>
			<div className={styles.logo}>adamkeyes</div>
			<div className={styles.linksBar}>
				<a
					href="#"
					onMouseEnter={() => handleMouseEnter("github")}
					onMouseLeave={handleMouseLeave}
				>
					<Image
						style={isHoveredLink === "github" ? hoverStyle : {}}
						src={Github}
						alt="github"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => handleMouseEnter("frontend mentor")}
					onMouseLeave={handleMouseLeave}
				>
					<Image
						style={isHoveredLink === "frontend mentor" ? hoverStyle : {}}
						src={FrontendMentor}
						alt="frontend mentor"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => handleMouseEnter("linkedin")}
					onMouseLeave={handleMouseLeave}
				>
					<Image
						style={isHoveredLink === "linkedin" ? hoverStyle : {}}
						src={Linkedin}
						alt="linkedin"
					/>
				</a>
				<a
					href="#"
					onMouseEnter={() => handleMouseEnter("twitter")}
					onMouseLeave={handleMouseLeave}
				>
					<Image
						style={isHoveredLink === "twitter" ? hoverStyle : {}}
						src={Twitter}
						alt="twitter"
					/>
				</a>
			</div>
		</div>
	);
};

export default Navigation;
