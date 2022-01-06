import React, { useState, useEffect } from "react";

function Home(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		Promise.all([
			getRandomHero(68),
			getRandomHero(612),
			getRandomHero(530),
			getRandomHero(201),
			getRandomHero(165),
		]).then((values) => setHeroes(values));
	}, []);

	function getRandomHero(randomID) {
		// let randomID = getRandomNumber(1, 731);
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

	if (!heroes) {
		return <p>Loading Hero...Greatness Awaits!</p>;
	}
	return (
		<div className="home-container">
			<div className="welcome-div">
				<h2>Welcome, Heroes!</h2>
			</div>

			<div className="random-card">
				<img src="https://i.imgur.com/MkUNj1z.jpg" alt="batgirl" />
			</div>
			<div className="random-card">
				<img src="https://i.imgur.com/vPV21zn.jpg" alt="spawn" />
			</div>
			<div className="random-card">
				<img src="https://i.imgur.com/CkEJNR0.jpg" alt="spiderman" />
			</div>
			<div className="random-card">
				<img src="https://i.imgur.com/tQSCnil.jpg" alt="punisher" />
			</div>
			<div className="random-card">
				<img src="https://i.imgur.com/lwfsgxk.jpg" alt="catwoman" />
			</div>
			<div className="random-card">
				<img src="https://i.imgur.com/7mYOH2O.jpg" alt="bucky" />
			</div>
		</div>
	);
}

export default Home;
