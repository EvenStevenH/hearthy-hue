import { Navigate, useParams } from "react-router";
import { useEvents } from "../../utils/EventsContext.jsx";
import { formatDate, formatTimeRange, formatPrice } from "../../utils/eventUtils.js";
import { Link } from "react-router";

export default function EventDetails({ data }) {
	const { eventId } = useParams();
	const { addEvent, removeEvent, isEvent } = useEvents();
	const event = data.events.find((event) => String(event.id) === eventId);
	const isSavedEvent = isEvent(event.id);

	return (
		<>
			{event ? (
				<div className="event-detail">
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
			) : (
				<Navigate to="/events" />
			)}
		</>
	);
}
