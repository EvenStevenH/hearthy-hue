import { useFetch } from "../utils/hooks";
import CardEvent from "../components/CardEvent";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Events() {
	const { data, loading, error } = useFetch("../data/events.js");

	if (loading) return <Spinner />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<div>
			<h1>Events</h1>
			<div className="grid">
				{data.events.map((event) => (
					<CardEvent
						event={event}
						key={event.id}
						className="card"
					/>
				))}
			</div>
		</div>
	);
}
