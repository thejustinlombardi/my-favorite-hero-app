import React, { useState, useEffect } from "react";

function Home(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		Promise.all([
			getRandomHero(),
			getRandomHero(),
			getRandomHero(),
			getRandomHero(),
			getRandomHero(),
		]).then((values) => setHeroes(values));
	}, []);

	function getRandomHero() {
		let randomID = getRandomNumber(1, 731);
		const url = `${searchOptions.api}${searchOptions.token}/${randomID}`;
		return (
			fetch(url)
				.then((res) => res.json())

				// .then((json) => {
				// 	props.setHeroes(json);
				// })
				.catch(console.error)
		);
	}
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return (
		<div className="home-container">
			{heroes.map((hero) => (
				<div key={hero.id} className="random-card">
					<img src={hero.image && hero.image.url} alt={hero.name} />
					<h2>{hero.name}</h2>
				</div>
			))}
		</div>
	);
}

export default Home;
