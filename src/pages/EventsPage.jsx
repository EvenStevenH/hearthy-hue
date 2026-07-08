import EventCard from "../components/events/EventCard";

export default function EventsPage({ data }) {
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
