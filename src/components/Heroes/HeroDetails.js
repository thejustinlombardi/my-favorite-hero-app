import React from "react";

function HeroDetails({ hero }) {
	return (
		<div className="hero-card">
			{hero.map((hero) => (
				<div key={hero.id} className="card">
					<img src={hero.image.url} alt={hero.name} />
					<h2>{hero.name}</h2>
				</div>
			))}
		</div>
	);
}

export default HeroDetails;
