import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import { useFetch } from "../../utils/hooks";
import UserCard from "./UserCard";

export default function UserPage() {
	const { data, loading, error } = useFetch("./../data/user.js");
	if (loading) return <Loader />;
	if (error) return <ErrorMessage message={error} />;

	return (
		<main>
			<h1>{data.user.username}'s Profile</h1>

			<section className="userPage">
				<section className="userInfo">
					<UserCard
						user={data.user}
						type="user"
					/>
				</section>

				<section className="userFriends">
					<h2>Your Friends</h2>

					{data.friends.length ? (
						<section className="friends">
							{data.friends.map((friend) => (
								<UserCard
									user={friend}
									type="friend"
									key={friend.userId}
								/>
							))}
						</section>
					) : (
						<p className="emptyMsg">No friends available.</p>
					)}
				</section>
			</section>
		</main>
	);
}
