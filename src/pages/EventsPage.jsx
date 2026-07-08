import ErrorMessage from "../components/ErrorMessage";
import EventCard from "../components/events/EventCard";
import Spinner from "../components/Spinner";

export default function EventsPage({ eventsData }) {
	const { data, loading, error } = eventsData;

	if (loading) return <Spinner />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<div>
			<h1>Events</h1>

			{data.events.length ? (
				<div className="grid">
					{data.events.map((event) => (
						<EventCard
							event={event}
							key={event.id}
						/>
					))}
				</div>
			) : (
				<p className="emptyMsg">No events available!</p>
			)}
		</div>
	);
}
