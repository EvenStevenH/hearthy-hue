import { formatDate, formatTimeRange, formatPrice } from "../utils/eventUtils";

export default function CardEvent({ event }) {
	return (
		<>
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
				{event.websiteURL && <p>{event.websiteURL}</p>}
				<p className="price">{formatPrice(event.price)}</p>
			</div>

			<div>
				<p className="date">
					{formatDate(event.startDate)} | {formatTimeRange(event.startDate, event.endDate)}
				</p>
				<p className="location">{event.location}</p>
			</div>
		</>
	);
}
