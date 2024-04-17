import React, { useState } from "react";
import styles from "../../styles/components/_contact-form.module.scss";
import btn from "../../styles/utilities/_buttons.module.scss";
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
				<div className={styles.inputWrapper}>
					<input
						name="name"
						type="text"
						placeholder="name"
						autoComplete="name"
					/>
					<label htmlFor="name">Name</label>
				</div>
				<div className={styles.inputWrapper}>
					{errors.email && touched.email ? (
						<input
							name="email"
							type="email"
							placeholder="email"
							autoComplete="email"
							style={{ borderBottom: "solid 1px hsl(7, 100%, 68%)" }}
							onChange={(event) => {
								setInputs({ ...inputs, email: event.target.value });
								setErrors(validate({ ...inputs, email: event.target.value }));
							}}
							onBlur={() => setTouched({ ...touched, email: true })}
							value={inputs.email}
						/>
					) : (
						<input
							name="email"
							type="email"
							placeholder="email"
							autoComplete="email"
							onChange={(event) => {
								setInputs({ ...inputs, email: event.target.value });
								setErrors(validate({ ...inputs, email: event.target.value }));
							}}
							onBlur={() => setTouched({ ...touched, email: true })}
							value={inputs.email}
						/>
					)}
					{errors.email && touched.email ? <p>{errors.email}</p> : null}
					<label htmlFor="email">Email</label>
				</div>
				<div className={styles.inputWrapper}>
					<textarea name="message" placeholder="message" />
					<label htmlFor="message">Message</label>
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
