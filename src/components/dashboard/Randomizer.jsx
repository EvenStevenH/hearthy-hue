import { useState } from "react";
import { getRandomIdea, getRandomHSL } from "../../utils/ideaUtils";
import ColorSwatch from "./ColorSwatch";

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
		<div>
			<h2>Random Ideas</h2>

			<div>
				<p className="randomIdea">
					<b>{idea.category}</b>: {idea.subject}
				</p>
				<button onClick={getIdea}>Get a new idea!</button>
			</div>

			<div>
				<p>Your Color Harmony: {colors.harmony}</p>
				<ul className="randomHarmony">
					{colors.colors.map((color, index) => (
						<ColorSwatch
							key={index}
							color={color}
						/>
					))}
				</ul>
				<button onClick={getHarmony}>Get a new color harmony!</button>
			</div>
		</div>
	);
}
