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
		<main>
			<div className="event-detail">
				<div className="card">
					<img
						src={event.img.url}
						alt={event.img.alt}
					/>

					<div className="cardDetails">
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
							<p className="price">{formatPrice(event.price)}</p>
							<p className="date">
								{formatDate(event.startDate)} | {formatTimeRange(event.startDate, event.endDate)}
							</p>
							<p className="location">{event.location}</p>
						</div>

						<div>
							<p>
								<span className="notes">{event.notes}</span>
							</p>
						</div>

						<div className="cardBtns">
							<button
								id="eventSaveBtn"
								onClick={() => (isSavedEvent ? removeEvent(event.id) : addEvent(event.id))}
								className={isSavedEvent ? "saved" : ""}
							>
								{isSavedEvent ? "Unsave" : "I'm Interested!"}
							</button>

							<Link
								to={`/events`}
								id="backBtn"
								className="button"
							>
								Back
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
