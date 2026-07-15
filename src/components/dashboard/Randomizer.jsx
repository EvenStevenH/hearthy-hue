import { useState } from "react";
import { getRandomIdea, getRandomHSL } from "../../utils/ideaUtils";
import { FaRandom } from "react-icons/fa";

export default function Randomizer({ ideas }) {
	const [idea, setIdea] = useState(getRandomIdea(ideas.subjects)); // random idea on load
	const [colors, setColors] = useState(getRandomHSL()); // random harmony on load

	const getIdea = () => {
		setIdea(getRandomIdea(ideas.subjects));
	};
	const getHarmony = () => {
		setColors(getRandomHSL());
	};

	return (
		<section className="container randomizer">
			<h2>Random Ideas</h2>

			<div>
				<div className="randomIdea">
					<p>
						<b>Category</b>: {idea.category}
					</p>
					<p>
						<b>Subject</b>: {idea.subject}
					</p>
				</div>
				<button onClick={getIdea}>
					<FaRandom /> Get a new subject!
				</button>
			</div>

			<hr />

			<div>
				<p>
					<b>Color Harmony</b>: {colors.harmony}
				</p>
				<ul className="randomHarmony">
					{colors.colors.map((color, index) => (
						<li
							key={index}
							className="colorSwatch"
							style={{ backgroundColor: color }}
						></li>
					))}
				</ul>
				<button onClick={getHarmony}>
					<FaRandom /> Get a new color harmony!
				</button>
			</div>
		</section>
	);
}
