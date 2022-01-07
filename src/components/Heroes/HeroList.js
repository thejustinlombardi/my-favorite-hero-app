import React, { useState, useEffect } from "react";

import HeroSearchForm from "./HeroSearchForm";
import HeroViewer from "./HeroViewer";

function HeroList(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		endpoint: "/search/",
	};

	const [searchHero, setSearchHero] = useState("");

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

	return (
		<div>
			<HeroSearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchHero={searchHero}
			/>
			<HeroViewer hero={hero} />
		</div>
	);
}

export default HeroList;
