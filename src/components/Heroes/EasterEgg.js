import React from "react";

function EasterEgg(props) {
	return (
		<div className="details-container">
			<img
				src="https://i.imgur.com/C4vE4JT.png"
				alt="author"
				className="info-card"
			/>
			<div className="details">
				<h2>Name: Super Dev</h2>
				<h3>Full Name: Justin Lombardi</h3>
				<h4>Weight: 195 lb</h4>
				<h4>Height: 6' 1"</h4>
				<h4>Race: Human</h4>
				<h4>Place of Birth: Philadelphia, PA</h4>
				<h4>
					First Appearance:
					<a
						target="_blank"
						href="https://thejustinlombardi.github.io/simon-browser-game/"
						rel="noreferrer">
						#01 - The Game
					</a>
				</h4>
				<h4>Publisher: Self</h4>
				<h4>Group Affiliations: General Assembly, SNHU </h4>
				<a
					className="learn-more"
					target="_blank"
					href="https://www.linkedin.com/in/justin-lombardi-creates/"
					rel="noreferrer">
					Learn More Here!
				</a>
			</div>
		</div>
	);
}

export default EasterEgg;
