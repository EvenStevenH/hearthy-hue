export function formatTimeRange(startDate, endDate) {
	const options = {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	};
	const startTime = new Date(startDate).toLocaleTimeString("en-US", options);
	const endTime = new Date(endDate).toLocaleTimeString("en-US", options);
	return `${startTime} – ${endTime}`;
}

export function formatDate(startDate) {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return new Date(startDate).toLocaleDateString("en-US", options);
}

export function formatPrice(price) {
	return price ? `$${price}` : "Free";
}
