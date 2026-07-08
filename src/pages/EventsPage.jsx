import EventCard from "../components/events/EventCard";

export default function EventsPage({ eventsData }) {
	return (
		<div>
			<h1>Events</h1>

			{eventsData.events.length ? (
				<div className="grid">
					{eventsData.events.map((event) => (
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
