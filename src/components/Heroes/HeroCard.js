import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// This component handles all data for the individual hero card information

function HeroCard(props) {
	const [card, setCard] = useState(null);
	const { id } = useParams();

	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};

	useEffect(() => {
		const url = `${searchOptions.api}${searchOptions.token}/${id}`;
		fetch(url)
			.then((res) => res.json())

			.then((json) => {
				setCard(json);
			})
			.catch();
	}, []);

	function handleImageError(event) {
		event.currentTarget.src = "https://i.imgur.com/JNKyLlj.jpg";
	}

	if (!card) {
		return <p>Loading Hero information ...</p>;
	}

	return (
		<div className="details-container">
			<img
				src={card.image.url}
				alt={card.name}
				className="info-card"
				onError={handleImageError}
			/>
			<div className="details">
				<h2>Name: {card.name}</h2>
				<h3>Full Name: {card.biography["full-name"]}</h3>
				<h4>Weight: {card.appearance.weight[0]}</h4>
				<h4>Height: {card.appearance.height[0]}</h4>
				<h4>Race: {card.appearance.race}</h4>
				<h4>Place of Birth: {card.biography["place-of-birth"]}</h4>
				<h4>First Appearance: {card.biography["first-appearance"]}</h4>
				<h4>Publisher: {card.biography.publisher}</h4>
				<h4>Group Affiliations: {card.connections["group-affiliation"]}</h4>
				<a
					className="learn-more"
					target="_blank"
					href={"https://www.superherodb.com/search/?q=" + card.name}
					rel="noreferrer">
					Learn More Here!
				</a>
			</div>
		</div>
	);
}

export default HeroCard;
