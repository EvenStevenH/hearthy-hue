import ContactForm from "./ContactForm";
import { postImages as images } from "../../data/images";

export default function About() {
	return (
		<main className="about">
			<section className="container aboutSection">
				<img
					id="aboutImg"
					src={images.art2.url}
					alt={images.art2.alt}
				/>

				<div className="aboutContent">
					<h1>About</h1>

					<p>
						<b>Hearthy Hue</b> is an app created by me,{" "}
						<a
							href="https://github.com/EvenStevenH"
							target="_blank"
						>
							Steven Huang
						</a>
						, that helps creatives discover events! It utilizes frontend technologies such as HTML for structure, CSS for styling, JavaScript for interactivity, and React for component-based UI and state management.
					</p>

					<ul>
						<li>A few features of this demo app include:</li>
						<ul>
							<li>An event Page to view and save of events, with event details in a separate view</li>
							<li>A dashboard with a mock social media feed, your saved events, and a simple tool to roll random subjects and color harmonies</li>
							<li>A profile page to view information about you and your friends</li>
						</ul>

						<li>Trivia on the naming:</li>
						<ul>
							<li>A "hearth" is the area around a fireplace (and sounds like "heart"). A "hue" is a color or pigment, standing for arts and creativity (and also sounds like "you"). Together, the name inspires a cozy gathering place where we can connect our community members!</li>
						</ul>
					</ul>
				</div>
			</section>

			<section className="container contactSection">
				<h2>Contact</h2>
				<ContactForm />
			</section>
		</main>
	);
}
