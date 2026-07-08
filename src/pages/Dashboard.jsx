import EventCard from "../components/events/EventCard";
import { useEvents } from "./../utils/EventsContext";
import { Link } from "react-router";

export default function Dashboard({ data }) {
	const { savedEvents, removeEvent } = useEvents();

	return (
		<>
			<h1>Dashboard</h1>

			<div className="savedEvents">
				<h2>Your Events</h2>

				{savedEvents.length ? (
					<div className="grid">
						{data.events
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
		</>
	);
}
