import { useNavigate, Link } from "react-router";
import { useState } from "react";
import Logo from "../components/Logo";

export default function Login({ setIsLoggedIn }) {
	const validEmail = "steven@email.com";
	const validPassword = "grilledCheese";

	const [email, setEmail] = useState(validEmail);
	const [password, setPassword] = useState(validPassword);
	const [loginMsg, setLoginMsg] = useState("");
	const navigate = useNavigate();

	function handleLogin(event) {
		event.preventDefault();

		if (email === validEmail && password === validPassword) {
			setIsLoggedIn(true);
			setLoginMsg("");
			navigate("/dashboard");
		} else {
			return setLoginMsg(<p>Invalid email or password!</p>);
		}
	}

	function handleRegister() {
		return setLoginMsg(
			<>
				<p>Thank you for your interest! This is just a demo app, so please use the following credentials to log in:</p>
				<p>
					<b>Email</b>: steven@email.com
				</p>
				<p>
					<b>Password</b>: grilledCheese
				</p>
			</>,
		);
	}

	return (
		<>
			<Logo />

			<div>
				<h2>Welcome back, traveler!</h2>

				<form onSubmit={handleLogin}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="steven@example.com"
						value={email}
						required
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						placeholder="••••••••••••"
						value={password}
						required
					/>

					<button
						type="submit"
						onClick={handleLogin}
					>
						Log In
					</button>
				</form>

				<p className="register">
					Don't have an account?{" "}
					<Link
						onClick={handleRegister}
						to="/login"
					>
						Register here
					</Link>
					!
				</p>

				{loginMsg && <div className="loginMsg">{loginMsg}</div>}
			</div>
		</>
	);
}
