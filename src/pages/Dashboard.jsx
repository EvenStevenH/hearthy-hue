import Randomizer from "../components/dashboard/Randomizer";
import EventCard from "../components/events/EventCard";
import { useEvents } from "./../utils/EventsContext";
import { Link } from "react-router";
import { useFetch } from "../utils/hooks";
import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";

export default function Dashboard({ eventsData }) {
	const { savedEvents, removeEvent } = useEvents();
	const ideasData = useFetch("./../data/ideas.js");

	if (eventsData.loading || ideasData.loading) return <Spinner />;
	if (eventsData.error || ideasData.error)
		return (
			<>
				<ErrorMessage message={eventsData.error} />
				<ErrorMessage message={ideasData.error} />
			</>
		);

	return (
		<main>
			<h1>Dashboard</h1>

			<div className="savedEvents">
				<h2>Your Events</h2>

				{savedEvents.length ? (
					<div className="grid">
						{eventsData.data.events
							.filter((event) => savedEvents.includes(event.id))
							.map((event) => (
								<EventCard
									event={event}
									key={event.id}
									removeEvent={() => removeEvent(event.id)}
								/>
							))}
					</div>
				) : (
					<p className="emptyMsg">
						No events saved. <Link to="/events">Find some here!</Link>
					</p>
				)}
			</div>

			<Randomizer ideas={ideasData.data} />
		</main>
	);
}
