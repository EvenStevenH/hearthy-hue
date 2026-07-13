import ErrorMessage from "../components/ErrorMessage";
import EventCard from "../components/events/EventCard";
import Spinner from "../components/Spinner";

export default function EventsPage({ eventsData }) {
	const { data, loading, error } = eventsData;

	if (loading) return <Spinner />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<main>
			<h1>Events</h1>

			{data.events.length ? (
				<section className="grid gridEvents">
					{data.events.map((event) => (
						<EventCard
							event={event}
							key={event.id}
						/>
					))}
				</section>
			) : (
				<p className="emptyMsg">No events available!</p>
			)}
		</main>
	);
}
