import { Link, NavLink, useNavigate } from "react-router";

export default function Nav({ setIsLoggedIn }) {
	const navigate = useNavigate();

	function handleLogout() {
		setIsLoggedIn(false);
		navigate("/login");
	}
	return (
		<nav>
			<NavLink to="/dashboard">Dashboard</NavLink>
			<NavLink to="/events">Events</NavLink>
			<NavLink to="/user">Your Profile</NavLink>
			<NavLink to="/about">About</NavLink>
			<Link
				className="logoutLink"
				onClick={handleLogout}
			>
				Log Out
			</Link>
		</nav>
	);
}
