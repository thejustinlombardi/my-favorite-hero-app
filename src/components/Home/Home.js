import React, { useEffect } from "react";

function Home(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		id: "/23",
	};

	useEffect(() => {
		getHero();
	}, []);

	function getHero() {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.id}`;
		fetch(url)
			.then((res) => res.json())

			.then((json) => {
				props.setHeroes(json);
			})
			.catch(console.error);
	}
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	return (
		<div className="home-container">
			<img src={props.heroes.image && props.heroes.image.url} alt="" />
			<img src={props.heroes.image && props.heroes.image.url} alt="" />
			<img src={props.heroes.image && props.heroes.image.url} alt="" />
			<img src={props.heroes.image && props.heroes.image.url} alt="" />
			<img src={props.heroes.image && props.heroes.image.url} alt="" />
		</div>
	);
}

export default Home;
