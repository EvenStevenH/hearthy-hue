import { useState } from "react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formMsg, setFormMsg] = useState("");
	const isFormValid = formData.name && formData.email && formData.message;

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setFormMsg("");
	}

	function handleForm(event) {
		event.preventDefault();

		if (isFormValid) {
			setFormData({
				name: "",
				email: "",
				message: "",
			});
			setFormMsg("Thanks for your message, traveler!");
		} else {
			return setFormMsg("Please complete all required fields.");
		}
	}

	return (
		<form
			className="contactForm"
			onSubmit={handleForm}
		>
			<div className="contactFormTop">
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your name"
						required
					/>
				</div>

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your email address"
						required
					/>
				</div>
			</div>

			<div>
				<label htmlFor="message">Message:</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					value={formData.message}
					onChange={handleChange}
					maxLength="200"
					placeholder="Enter your message here..."
					required
				/>
				<div id="character-counter">{`${formData.message.length} / 200 characters`}</div>
			</div>

			<button
				id="submitBtn"
				type="submit"
			>
				Submit
			</button>

			{formMsg && <p id="formMsg">{formMsg}</p>}
		</form>
	);
}
