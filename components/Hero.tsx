import React from "react";
import { Navigation } from "./index";
import styles from "../styles/section/_hero.module.scss";
import btn from "../styles/utilities/_buttons.module.scss";
import Image, { getImageProps } from "next/image";
import { circle, rings } from "@/assets/images/background";
import {
	profileMobile,
	profileTablet,
	profileDesktop,
} from "@/assets/images/profile";
const Hero = () => {
	const common = { alt: "profile" };
	const {
		props: { srcSet: desktop },
	} = getImageProps({
		...common,
		src: profileDesktop,
	});
	const {
		props: { srcSet: tablet },
	} = getImageProps({
		...common,
		src: profileTablet,
	});
	const {
		props: { srcSet: mobile },
	} = getImageProps({
		...common,
		src: profileMobile,
	});
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Navigation />
			<div className={styles.container}>
				<div className={styles.rings}>
					<Image src={rings} alt="background rings" />
				</div>
				<picture>
					<source
						media="(min-width: 1400px)"
						srcSet={desktop}
						className={styles.profile}
					/>
					<source
						className={styles.profile}
						media="(min-width: 740px)"
						srcSet={tablet}
					/>
					<img className={styles.profile} srcSet={mobile} />
				</picture>
				<div className={styles.circle}>
					<Image src={circle} alt="background circle" />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.introText}>
						Nice to
						<br className={styles.tabletBR} /> meet you!
						<br className={styles.desktopBR} />
						<br className={styles.mobileBR} /> I’m{" "}
						<br className={styles.tabletBR} />
						<span>Adam Keyes</span>.
					</h1>
					<p>
						Based in the UK, I’m a front-end developer
						<br />
						passionate about building accessible web
						<br />
						apps that users love.
					</p>
					<button className={btn.primaryBtn}>Contact me</button>
				</div>
			</div>
		</div>
	);
};
export default Hero;
