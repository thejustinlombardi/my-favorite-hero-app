import React from "react";
import { Link } from "react-router-dom";

// This component handles all of the information for the search result cards

function HeroResults({ hero }) {
	function handleImageError(event) {
		event.currentTarget.src = "https://i.imgur.com/JNKyLlj.jpg";
	}

	if (!hero.image) {
		<p>Loading Hero...</p>;
	}
	return (
		<div className="hero-card">
			{hero.map((hero) => {
				return (
					<Link to={`${hero.id}`} key={hero.id}>
						<img
							src={hero.image?.url}
							alt={hero.name}
							className="card-img"
							onError={handleImageError}
						/>
						<h2 className="card-title">{hero.name}</h2>
					</Link>
				);
			})}
		</div>
	);
}

export default HeroResults;
