import Head from "next/head";
import { Hero, Skills, Projects, Contact, Navigation } from "../components";

import styles from "../styles/utilities/_containers.module.scss";
import nav from "../styles/components/_navigation.module.scss";
export default function Home() {
	return (
		<>
			<Head>
				<title>Mahjestic | Single Page Developer Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className={styles.mainContainer}>
				<Hero />
				<Skills />
				<Projects />
				<Contact />
				<div className={nav.footer}>
					<div className={nav.line}></div>
					<Navigation />
				</div>
			</div>
		</>
	);
}
