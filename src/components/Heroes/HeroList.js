import React, { useState, useEffect } from "react";

import HeroSearchForm from "./HeroSearchForm";
import HeroViewer from "./HeroViewer";

function HeroList(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		endpoint: "/search/",
	};

	const [searchHero, setSearchHero] = useState("A");

	const [hero, setHero] = useState([]);

	useEffect(() => {
		getHero(searchHero);
	}, []);

	function getHero(searchHero) {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.endpoint}${searchHero}`;
		fetch(url)
			.then((res) => res.json())

			.then((json) => {
				setHero(json.results);
			})
			.catch(console.error);
	}

	function handleChange(e) {
		setSearchHero(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		getHero(searchHero);
	}

	const randomOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
	};
	const [heroes, setHeroes] = useState([]);
	useEffect(() => {
		Promise.all([getRandomHero()]).then((values) => setHeroes(values));
	}, []);

	function getRandomHero() {
		let randomID = getRandomNumber(1, 731);
		const url = `${randomOptions.api}${randomOptions.token}/${randomID}`;
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
		<div>
			<HeroSearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchHero={searchHero}
				getRandomHero={getRandomHero}
			/>
			<HeroViewer hero={hero} heroes={heroes} />
		</div>
	);
}

export default HeroList;
