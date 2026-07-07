import Navbar from "./components/common/NavBar.jsx";
import Footer from "./components/common/Footer.jsx";
import Header from "./components/common/Header.jsx";
import Login from "./components/pages/Login.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import UserPage from "./components/user/UserPage.jsx";
import EventsPage from "./components/events/EventsPage.jsx";
import EventDetails from "./components/events/EventDetails.jsx";
import { EventsProvider } from "./utils/EventsContext.jsx";
import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import { useFetch } from "./utils/hooks";
import Spinner from "./components/common/Spinner";
import ErrorMessage from "./components/common/ErrorMessage";

export default function App() {
	const { data, loading, error } = useFetch("./../data/events.js");
	if (loading) return <Spinner />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<>
			<Header />
			<Navbar />

			<EventsProvider>
				<Routes>
					<Route
						path="/dashboard"
						element={<Dashboard />}
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
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/user"
						element={<UserPage />}
					/>
					<Route
						path="*"
						element={<Navigate to="/events" />}
					/>
				</Routes>
			</EventsProvider>

			<Footer />
		</>
	);
}
