import React, { useState, useEffect } from "react";

function Home(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		id: "/612",
	};

	// const [heroID, setHeroID] = useState("/612");

	useEffect(() => {
		getHero();
	}, []);

	function getHero(heroID) {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.id}`;
		fetch(url)
			.then((res) => res.json())

			.then((json) => {
				console.log(json);
				props.setHeroes(json);
			})
			.catch(console.error);
	}
	return (
		<div className="home-container">
			<img src={props.heroes.image.url} alt="" />
		</div>
	);
}

export default Home;
