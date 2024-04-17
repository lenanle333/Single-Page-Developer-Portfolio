import React from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/section/_contact.module.scss";
import Image from "next/image";
import { rings } from "@/assets/images/background";
const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2>Contact</h2>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I’ll get back to you as soon as possible.
				</p>
			</div>
			<div className={styles.rings}>
				<Image src={rings} alt="background rings" />
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;
