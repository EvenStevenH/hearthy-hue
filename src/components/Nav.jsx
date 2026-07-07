import { Link, useNavigate } from "react-router";

export default function Nav({ setIsLoggedIn }) {
	const navigate = useNavigate();

	function handleLogout() {
		setIsLoggedIn(false);
		navigate("/login");
	}
	return (
		<nav>
			<div className="nav-links">
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/events">Events</Link>
				<Link to="/user">Your Profile</Link>
				<button onClick={handleLogout}>Log Out</button>
			</div>
		</nav>
	);
}
