export default function UserCard({ user }) {
	return (
		<div className="container card userCard">
			<img
				src={user.profileImg.url || "/default-avatar.png"}
				alt={`${user.username}'s avatar`}
				id="userImg"
			/>

			<div className="cardDetails">
				<h3 className="title">{user.username}</h3>
				<p className="tagline">{user.tagline}</p>

				<div>
					<p className="followers">
						<b>Followers</b>: {user.followers}
					</p>
					<p className="following">
						<b>Following</b>: {user.following}
					</p>
				</div>

				<p className="availability">
					<b>Availability</b>: {user.availability}
				</p>

				<p className="bio">{user.bio}</p>
			</div>
		</div>
	);
}
