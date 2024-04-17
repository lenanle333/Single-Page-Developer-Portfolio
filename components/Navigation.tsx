import React from "react";
import Image from "next/image";
import styles from "../styles/components/_navigation.module.scss";
import {
	Github,
	Linkedin,
	Twitter,
	FrontendMentor,
} from "../assets/images/icons";
const Navigation = () => {
	return (
		<div className={styles.navBar}>
			<div className={styles.logo}>adamkeyes</div>
			<div className={styles.linksBar}>
				<a href="#">
					<Image src={Github} alt="github" />
				</a>
				<a href="#">
					<Image src={FrontendMentor} alt="frontend mentor" />
				</a>
				<a href="#">
					<Image src={Linkedin} alt="linkedin" />
				</a>
				<a href="#">
					<Image src={Twitter} alt="twitter" />
				</a>
			</div>
		</div>
	);
};

export default Navigation;
