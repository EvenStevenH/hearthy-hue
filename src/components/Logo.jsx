export default function Logo({ className, color }) {
	return (
		<div className={`logo ${className}`}>
			<img
				src={`/src/assets/icons/sword_rose_${color}.svg`}
				alt="logo"
				className="logoImg"
			/>
			<p className="logoText">Hearthy Hue</p>
		</div>
	);
}
