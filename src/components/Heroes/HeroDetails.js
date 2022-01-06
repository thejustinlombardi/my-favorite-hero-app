import React from "react";
import { Link } from "react-router-dom";

function HeroDetails({ hero }) {
	return (
		<div className="hero-card">
			{hero.map((hero) => {
				return (
					<Link to={`heroes/${hero.id}`} key={hero.id}>
						<img src={hero.image?.url} alt={hero.name} className="card-img" />
						<h2 className="card-title">{hero.name}</h2>
					</Link>
				);
			})}
		</div>
	);
}

export default HeroDetails;
