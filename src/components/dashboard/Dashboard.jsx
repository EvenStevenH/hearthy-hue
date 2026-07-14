import Randomizer from "./Randomizer";
import EventCard from "../events/EventCard";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import { useEvents } from "../../utils/EventsContext";
import { Link } from "react-router";
import { useFetch } from "../../utils/hooks";
import { sortByStartDate } from "../../utils/eventUtils";

export default function Dashboard({ eventsData }) {
	const { savedEvents, removeEvent } = useEvents();
	const ideasData = useFetch("./../data/ideas.js");

	if (eventsData.loading || ideasData.loading) return <Loader />;
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

			<section className="dashboardSection">
				<section className="container userFeed">
					<h2>Feed</h2>

					<div>Feed here!</div>
				</section>
				<Randomizer ideas={ideasData.data} />
			</section>

			<section className="savedEvents">
				<h2>Your Events</h2>

				{savedEvents.length ? (
					<div className="grid gridDashboard">
						{eventsData.data.events
							.filter((event) => savedEvents.includes(event.id))
							.sort((a, b) => sortByStartDate(a, b))
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
			</section>
		</main>
	);
}
