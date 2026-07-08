import { Navigate, useParams } from "react-router";
import { useEvents } from "../../utils/EventsContext.jsx";
import { formatDate, formatTimeRange, formatPrice } from "../../utils/eventUtils.js";
import { Link } from "react-router";
import Spinner from "../Spinner.jsx";
import ErrorMessage from "../ErrorMessage.jsx";

export default function EventDetails({ eventsData }) {
	const { eventId } = useParams();
	const { addEvent, removeEvent, isEvent } = useEvents();
	const { data, loading, error } = eventsData;

	if (loading) return <Spinner />;
	if (error) return error && <ErrorMessage message={error} />;

	const event = data.events.find((event) => String(event.id) === eventId);
	if (!event) return <Navigate to="/events" />;
	const isSavedEvent = isEvent(event.id);

	return (
		<div className="card event-detail">
			<img
				src={event.img.url}
				alt={event.img.alt}
			/>

			<div>
				<div className="tags">
					{event.tags.map((tag) => (
						<span
							key={tag}
							className="tag"
						>
							{tag}
						</span>
					))}
				</div>
				<h3 className="title">{event.title}</h3>
				<p className="description">{event.description}</p>
			</div>

			<div>
				<p className="notes">{event.notes}</p>
				<p className="price">{formatPrice(event.price)}</p>
			</div>

			<div>
				<p className="date">
					{formatDate(event.startDate)} | {formatTimeRange(event.startDate, event.endDate)}
				</p>
				<p className="location">{event.location}</p>
			</div>

			<button
				onClick={() => (isSavedEvent ? removeEvent(event.id) : addEvent(event.id))}
				className="eventBtn"
			>
				{isSavedEvent ? "Remove from Events" : "Add to Events"}
			</button>

			<Link
				to={`/events`}
				className="button"
			>
				Back
			</Link>
		</div>
	);
}
