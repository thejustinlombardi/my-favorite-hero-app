import React from "react";
import { Link } from "react-router-dom";

function HeroDetails({ hero }) {
	function handleImageError(event) {
		event.currentTarget.src = "https://i.imgur.com/JNKyLlj.jpg";
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

export default HeroDetails;
