import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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

	let [searchParams, setSearchParams] = useSearchParams();

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
			.catch((error) => {
				if (error) {
					setHero([]);
					setNotFound(true);
					setLoading(false);
					setLastSearch(searchHero);
				}
			});
	}

	function handleChange(e) {
		setSearchHero(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setSearchParams({ heroes: searchHero });
		getHero(searchHero);
	}

	useEffect(() => {
		const userSearch = searchParams.get("heroes");
		if (userSearch) {
			setSearchHero(userSearch);
			getHero(userSearch);
		}
	}, []);

	return (
		<div className="search-container">
			<HeroSearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchHero={searchHero}
			/>
			{lastSearch && (
				<h3 className="last-search">
					<span className="italic-result">Showing results for: </span>
					<span className="bold-result">{lastSearch}</span>
				</h3>
			)}
			{hero === "" ||
				(loading && <h2 className="try-h2">Enter Your Hero Above!</h2>)}

			{notFound ? (
				<h2 className="try-h2">Sorry! Hero not found. Please try again.</h2>
			) : (
				<HeroResults hero={hero} />
			)}
		</div>
	);
}

export default HeroMain;
