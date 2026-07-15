import Randomizer from "./Randomizer";
import PostCard from "./PostCard";
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
	const feedData = useFetch("./../data/feed.js");

	if (eventsData.loading || ideasData.loading || feedData.loading) return <Loader />;
	if (eventsData.error || ideasData.error || feedData.error)
		return (
			<>
				<ErrorMessage message={eventsData.error} />
				<ErrorMessage message={ideasData.error} />
				<ErrorMessage message={feedData.error} />
			</>
		);

	return (
		<main>
			<h1>Dashboard</h1>

			<section className="dashboardSection">
				<section className="container">
					<h2>Feed</h2>

					{feedData.data.feed.length ? (
						<div className="postFeed">
							{feedData.data.feed
								.sort((a, b) => sortByStartDate(a, b, "timestamp"))
								.map((post) => (
									<PostCard
										post={post}
										key={post.id}
									/>
								))}
						</div>
					) : (
						<p className="emptyMsg">No posts available.</p>
					)}
				</section>

				<Randomizer ideas={ideasData.data} />
			</section>

			<section className="savedEvents">
				<h2>Your Events</h2>

				{savedEvents.length ? (
					<div className="gridDashboard">
						{eventsData.data.events
							.filter((event) => savedEvents.includes(event.id))
							.sort((a, b) => sortByStartDate(a, b, "startDate"))
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
