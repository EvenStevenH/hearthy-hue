import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserPage from "./pages/UserPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetails from "./components/events/EventDetails.jsx";
import Spinner from "./components/Spinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import { EventsProvider } from "./utils/EventsContext.jsx";
import { Routes, Route, Navigate } from "react-router";
import { useFetch, useLocalStorage } from "./utils/hooks";
import "./styles/App.css";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
	const { data, loading, error } = useFetch("./../data/events.js");
	if (loading) return <Spinner />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<>
			{isLoggedIn ? (
				<>
					<Header />
					<Nav setIsLoggedIn={setIsLoggedIn} />
					<EventsProvider>
						<Routes>
							<Route
								path="/dashboard"
								element={<Dashboard data={data} />}
							/>
							<Route
								path="/events"
								element={<EventsPage data={data} />}
							/>
							<Route
								path="/events/:eventId"
								element={<EventDetails data={data} />}
							/>
							<Route
								path="/user"
								element={<UserPage />}
							/>
							<Route
								path="*"
								element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />}
							/>
						</Routes>
					</EventsProvider>
					<Footer />
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
