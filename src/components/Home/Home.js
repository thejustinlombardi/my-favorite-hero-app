import React, { useEffect } from "react";

function Home(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		id: "/63",
	};

	// const [heroID, setHeroID] = useState("/678");

	useEffect(() => {
		getHero();
	}, []);

	function getHero() {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.id}`;
		fetch(url)
			.then((res) => res.json())

			.then((json) => {
				props.setHeroes(json);
				console.log(props.heroes);
			})
			.catch(console.error);
	}

	return (
		<div className="home-container">
			<h2>{props.heroes.name}</h2>
			<img src={props.heroes.image.url} alt="" />
		</div>
	);
}

export default Home;
