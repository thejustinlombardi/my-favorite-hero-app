import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RandomHero(props) {
	const randomOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		getRandomHero();
	}, []);

	function getRandomHero() {
		let randomID = getRandomNumber(1, 731);
		const url = `${randomOptions.api}${randomOptions.token}/${randomID}`;
		return fetch(url)
			.then((res) => res.json())

			.then((json) => {
				setHeroes(json);
			})
			.catch(console.error);
	}
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function handleImageError(event) {
		event.currentTarget.src = "https://i.imgur.com/JNKyLlj.jpg";
	}

	if (!heroes) {
		return <p>Loading Hero...Greatness Awaits!</p>;
	}
	return (
		<div className="random-container">
			<button onClick={getRandomHero} className="random-button">
				Get Hero!
			</button>
			<div className="random-hero-card">
				{!heroes.image?.url ? (
					<p>Loading Hero...Greatness Awaits!</p>
				) : (
					<Link to={`/heroes/${heroes.id}`} key={heroes.id}>
						<img
							src={heroes.image?.url}
							alt={heroes.name}
							className="random-card-img"
							onError={handleImageError}
						/>
						<h2 className="card-title">{heroes.name}</h2>
					</Link>
				)}
			</div>
		</div>
	);
}

export default RandomHero;
