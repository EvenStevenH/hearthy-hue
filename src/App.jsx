import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserPage from "./pages/UserPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetails from "./components/events/EventDetails.jsx";
import { EventsProvider } from "./utils/EventsContext.jsx";
import { Routes, Route, Navigate } from "react-router";
import { useFetch, useLocalStorage } from "./utils/hooks";
import About from "./pages/About.jsx";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
	const eventsData = useFetch("./../data/events.js");

	return (
		<>
			{isLoggedIn ? (
				<>
					<Header />
					<Nav setIsLoggedIn={setIsLoggedIn} />

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
