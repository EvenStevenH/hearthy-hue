import ContactForm from "./ContactForm";

export default function About() {
	return (
		<main className="about">
			<section className="container aboutSection">
				<h1>About</h1>
				<p>
					<b>Hearthy Hue</b> is an app for visual artists and creatives to discover community events they are interested in!
				</p>

				<ul>
					<li>Trivia on the name:</li>
					<ul>
						<li>A "hearth" is the area around a fireplace (and sounds like "heart"). A "hue" is a color or pigment, standing for arts and creativity (and also sounds like "you"). Together, the name inspires a cozy gathering place where creatives can connect with people like you!</li>
					</ul>
				</ul>
			</section>

			<section className="container contactSection">
				<div>
					<h2>Contact</h2>
					<ContactForm />
				</div>
			</section>
		</main>
	);
}
