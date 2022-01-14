import React, { useState } from "react";

import HeroSearchForm from "./HeroSearchForm";
import HeroResults from "./HeroResults";

// This component handles the hooks, storing of search data, and distribution of API data for the Hero Viewer

function HeroMain(props) {
	const searchOptions = {
		token: process.env.REACT_APP_HERO_TOKEN,
		api: "https://superheroapi.com/api.php/",
		endpoint: "/search/",
	};

	const [searchHero, setSearchHero] = useState("");

	const [hero, setHero] = useState([]);

	const [notFound, setNotFound] = useState(false);

	const [loading, setLoading] = useState(true);

	const [lastSearch, setLastSearch] = useState("");

	function getHero(searchHero) {
		const url = `${searchOptions.api}${searchOptions.token}${searchOptions.endpoint}${searchHero}`;

		setHero([]);

		fetch(url)
			.then((res) => {
				return res.json();
			})

			.then((json) => {
				if (json.response === "error") {
					setHero([]);
					setNotFound(true);
					setLoading(false);
					setLastSearch(searchHero);
				} else {
					setHero(json.results);
					setNotFound(false);
					setLoading(false);
					setLastSearch(searchHero);
				}
			})
			.catch((error) => {});
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
			{lastSearch ? (
				<h3 className="last-search">
					<em>Showing results for: </em>
					<strong>{lastSearch}</strong>
				</h3>
			) : (
				""
			)}
			{hero === "" || loading ? (
				<h2 className="try-h2">Enter Your Hero Above!</h2>
			) : (
				""
			)}

			{notFound ? (
				<h2 className="try-h2">Sorry! Hero not found. Please try again.</h2>
			) : (
				<HeroResults hero={hero} />
			)}
		</div>
	);
}

export default HeroMain;
