import React, { useState } from "react";
import { Link } from "react-router-dom";

import HeroViewer from "./HeroViewer";

function RandomHero(props) {
	const randomOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};
	const [heroes, setHeroes] = useState([]);

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

	if (!heroes) {
		return <p>Loading Hero...Greatness Awaits!</p>;
	}
	return (
		<div className="random-container">
			<button onClick={getRandomHero} className="form-button">
				Get Random Hero!
			</button>

			<div className="hero-card">
				{!heroes.image?.url ? (
					<p>Click 'Get Random Hero' ! </p>
				) : (
					<Link to={`/heroes/${heroes.id}`} key={heroes.id}>
						<img
							src={heroes.image?.url}
							alt={heroes.name}
							className="card-img"
						/>
						<h2 className="card-title">{heroes.name}</h2>
					</Link>
				)}
			</div>
		</div>
	);
}

export default RandomHero;
