import Logo from "./Logo";

export default function Header({ menuOpen, setMenuOpen }) {
	return (
		<header>
			<Logo color="light" />

			<button
				id="menu-toggle"
				aria-label="toggle navigation menu"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				&#9776;
			</button>
		</header>
	);
}
