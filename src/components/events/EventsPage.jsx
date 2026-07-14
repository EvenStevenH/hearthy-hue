import ErrorMessage from "../ErrorMessage";
import EventCard from "./EventCard";
import Loader from "../Loader";
import { sortByStartDate } from "../../utils/eventUtils";

export default function EventsPage({ eventsData }) {
	const { data, loading, error } = eventsData;

	if (loading) return <Loader />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<main>
			<h1>Events</h1>

			{data.events.length ? (
				<section className="grid gridEvents">
					{data.events
						.sort((a, b) => sortByStartDate(a, b, "startDate"))
						.map((event) => (
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
