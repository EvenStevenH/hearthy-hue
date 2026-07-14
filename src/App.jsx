import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import About from "./components/about/About.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import UserPage from "./components/user/UserPage.jsx";
import EventsPage from "./components/events/EventsPage.jsx";
import EventDetails from "./components/events/EventDetails.jsx";
import { EventsProvider } from "./utils/EventsContext.jsx";
import { Routes, Route, Navigate } from "react-router";
import { useFetch, useLocalStorage } from "./utils/hooks";
import { useState } from "react";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
	const [menuOpen, setMenuOpen] = useState(false);
	const eventsData = useFetch("./../data/events.js");

	return (
		<>
			{isLoggedIn ? (
				<>
					<Header
						menuOpen={menuOpen}
						setMenuOpen={setMenuOpen}
						setIsLoggedIn={setIsLoggedIn}
					/>

					<div className="content">
						<EventsProvider>
							<Routes>
								<Route
									path="/dashboard"
									element={<Dashboard eventsData={eventsData} />}
								/>
								<Route
									path="/events"
									element={<EventsPage eventsData={eventsData} />}
								/>
								<Route
									path="/events/:eventId"
									element={<EventDetails eventsData={eventsData} />}
								/>
								<Route
									path="/user"
									element={<UserPage />}
								/>
								<Route
									path="/about"
									element={<About />}
								/>
								<Route
									path="*"
									element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
								/>
							</Routes>
						</EventsProvider>

						<Footer />
					</div>
				</>
			) : (
				<Routes>
					<Route
						path="/login"
						element={<Login setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route
						path="*"
						element={<Navigate to={"/login"} />}
					/>
				</Routes>
			)}
		</>
	);
}
