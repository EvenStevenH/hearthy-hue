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
				<p>Thank you for your interest! This is just a demo app, so please use the following credentials:</p>
				<div className="credentials">
					<p>
						<b>Email</b>: steven@email.com
					</p>
					<p>
						<b>Password</b>: grilledCheese
					</p>
				</div>
			</>,
		);
	}

	return (
		<main className="loginPage">
			<div className="leftPane">
				<Logo
					className="logoLoginLeft"
					color="light"
				/>
				<img
					src="/src/assets/img/bianca-fazacas-kVtJBTRvWQA-unsplash.jpg"
					className="loginBg"
				/>
			</div>

			<div className="rightPane">
				<section className="loginPanel">
					<Logo
						className="logoLoginRight"
						color="dark"
					/>

					<div className="loginTop">
						<h1>Welcome back, traveler!</h1>
						<p>Let's find some cozy new events.</p>
					</div>

					<form onSubmit={handleLogin}>
						<div>
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								name="email"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="steven@email.com"
								value={email}
								required
							/>
						</div>

						<div>
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
						</div>

						<button
							type="submit"
							onClick={handleLogin}
							className="loginBtn"
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
				</section>
			</div>
		</main>
	);
}
