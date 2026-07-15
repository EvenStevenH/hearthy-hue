import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router";

export default function Header({ menuOpen, setMenuOpen, setIsLoggedIn }) {
	const navigate = useNavigate();

	function handleLogout() {
		setIsLoggedIn(false);
		navigate("/login");
	}

	return (
		<>
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

			<nav className={menuOpen ? "open" : ""}>
				<NavLink to="/dashboard">Dashboard</NavLink>
				<NavLink to="/events">Events</NavLink>
				<NavLink to="/user">Your Profile</NavLink>

				<NavLink
					className="navBottom"
					to="/about"
				>
					About
				</NavLink>
				<NavLink
					to="/login"
					onClick={handleLogout}
				>
					Log Out
				</NavLink>
			</nav>
		</>
	);
}
