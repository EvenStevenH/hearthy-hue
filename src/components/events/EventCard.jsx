import { formatDate, formatTimeRange, formatPrice } from "../../utils/eventUtils.js";
import { useEvents } from "../../utils/EventsContext.jsx";
import { Link } from "react-router";

export default function EventCard({ event }) {
	const { addEvent, removeEvent, isEvent } = useEvents();
	const savedEvent = isEvent(event.id);

	return (
		<div className="card">
			<img
				src={event.imgURL}
				alt={event.imgAlt}
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
				className="eventBtn"
				onClick={() => (savedEvent ? removeEvent(event.id) : addEvent(event.id))}
			>
				{savedEvent ? "Unsave Event" : "I'm Interested!"}
			</button>

			<Link
				to={`/events/${event.id}`}
				className="button"
			>
				See More Details
			</Link>
		</div>
	);
}
