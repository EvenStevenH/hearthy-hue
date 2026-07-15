export default function Logo({ id, color }) {
	return (
		<div
			className={"logo"}
			id={`${id}`}
		>
			<img
				src={`/src/assets/icons/icon_${color}.svg`}
				alt="logo"
				className="logoImg"
			/>
			<p className="logoText">Hearthy Hue</p>
		</div>
	);
}
