import { NavLink, useNavigate } from "react-router";

export default function Nav({ setIsLoggedIn, menuOpen }) {
	const navigate = useNavigate();

	function handleLogout() {
		setIsLoggedIn(false);
		navigate("/login");
	}
	return (
		<nav className={menuOpen ? "open" : ""}>
			<NavLink to="/dashboard">Dashboard</NavLink>
			<NavLink to="/events">Events</NavLink>
			<NavLink to="/user">Your Profile</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink
				to="/login"
				className="logoutLink"
				onClick={handleLogout}
			>
				Log Out
			</NavLink>
		</nav>
	);
}
