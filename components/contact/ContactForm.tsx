import React, { useState } from "react";
import styles from "../../styles/components/_contact-form.module.scss";
import btn from "../../styles/utilities/_buttons.module.scss";
import Image from "next/image";
const ContactForm = () => {
	const validate = (newInputs: Inputs): Errors => {
		const newErrors: Errors = {};

		if (!newInputs.email.includes("@")) {
			newErrors.email = "Please enter a valid email";
		}

		return newErrors;
	};

	type Inputs = { email: string };
	const [inputs, setInputs] = useState<Inputs>({ email: "" });

	type Errors = Partial<Record<keyof Inputs, string>>;
	const [errors, setErrors] = useState<Errors>(validate(inputs));

	type Touched = Partial<Record<keyof Inputs, boolean>>;
	const [touched, setTouched] = useState<Touched>({});
	return (
		<div className={styles.container}>
			<form action="">
				<div>
					<label htmlFor="name">Name</label>
					<input
						autoComplete="name"
						placeholder="name"
						type="text"
						name="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					{errors.email && touched.email ? (
						<input
							style={{ borderBottom: "solid 1px hsl(7, 100%, 68%)" }}
							placeholder="email"
							type="email"
							name="email"
							autoComplete="email"
							onChange={(event) => {
								setInputs({ ...inputs, email: event.target.value });
								setErrors(validate({ ...inputs, email: event.target.value }));
							}}
							onBlur={() => setTouched({ ...touched, email: true })}
							value={inputs.email}
						/>
					) : (
						<input
							placeholder="email"
							type="email"
							name="email"
							onChange={(event) => {
								setInputs({ ...inputs, email: event.target.value });
								setErrors(validate({ ...inputs, email: event.target.value }));
							}}
							onBlur={() => setTouched({ ...touched, email: true })}
							value={inputs.email}
						/>
					)}
					{errors.email && touched.email ? <p>{errors.email}</p> : null}
				</div>
				<div>
					<label htmlFor="message">Message</label>
					<textarea placeholder="message" name="message" />
				</div>
				<button
					onClick={(event) => {
						event.preventDefault();
					}}
					className={btn.primaryBtn}
				>
					Send message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
