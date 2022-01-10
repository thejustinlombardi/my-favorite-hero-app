import React, { useState } from "react";

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

	const [notFound, setNotFound] = useState(false);

	function getHero(searchHero) {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.endpoint}${searchHero}`;
		setNotFound(false);
		setHero([]);

		fetch(url)
			.then((res) => {
				return res.json();
			})

			.then((json) => {
				if (json.response === "error") {
					setHero([]);
					setNotFound(true);
				} else {
					setHero(json.results);
				}
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

			<HeroViewer hero={hero} notFound={notFound} />
		</div>
	);
}

export default HeroList;
