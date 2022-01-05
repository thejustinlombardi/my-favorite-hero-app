import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import Navigation from "./components/Nav/Navigation";
import HeroList from "./components/Heroes/HeroList";
import HeroViewer from "./components/Heroes/HeroViewer";
import HeroDetails from "./components/Heroes/HeroDetails";
import HeroFavorites from "./components/Heroes/HeroFavorites";
import HeroSearchForm from "./components/Heroes/HeroSearchForm";

import "./App.css";

function App() {
	const hero = [
		{
			response: "success",
			id: "732",
			name: "Ironman",
			powerstats: {
				intelligence: "100",
				strength: "85",
				speed: "58",
				durability: "85",
				power: "100",
				combat: "64",
			},
			biography: {
				fullname: "Tony Stark",
				alteregos: "No alter egos found.",
				aliases: [
					"Iron Knight",
					"Hogan Potts",
					"Spare Parts Man",
					"Cobalt Man II",
					"Crimson Dynamo",
					"Ironman",
				],
				placeofbirth: "Long Island, New York",
				firstappearance: "Tales of Suspence #39 (March, 1963)",
				publisher: "Marvel Comics",
				alignment: "good",
			},
			appearance: {
				gender: "Male",
				race: "Human",
				height: ["6'6", "198 cm"],
				weight: ["425 lb", "191 kg"],
				eyecolor: "Blue",
				haircolor: "Black",
			},
			work: {
				occupation:
					"Inventor, Industrialist; former United States Secretary of Defense",
				base: "Seattle, Washington",
			},
			connections: {
				groupaffiliation:
					"Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
				relatives:
					"Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)",
			},
			image: {
				url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
			},
		},
		{
			response: "success",
			id: "612",
			name: "Spawn",
			powerstats: {
				intelligence: "75",
				strength: "60",
				speed: "50",
				durability: "90",
				power: "100",
				combat: "95",
			},
			biography: {
				fullname: "Al Simmons",
				alteregos: "No alter egos found.",
				aliases: ["The One", "Hellspawn"],
				placeofbirth: "Detroit, Michigan (8th level of Hell after rebirth)",
				firstappearance: "Spawn #1 (May, 1992)",
				publisher: "Image Comics",
				alignment: "good",
			},
			appearance: {
				gender: "Male",
				race: "Demon",
				height: ["6'11", "211 cm"],
				weight: ["900 lb", "405 kg"],
				eyecolor: "Brown",
				haircolor: "Black",
			},
			work: {
				occupation: "-",
				base: "Hell",
			},
			connections: {
				groupaffiliation:
					"Eighth Circle of Hell; formerly (as Al Simmons) CIA (U.S. Security Service), U.S. Secret Service, U.S. Marine Corps",
				relatives: "Wanda (widow), Cyan (widow's daughter)",
			},
			image: {
				url: "https://www.superherodb.com/pictures2/portraits/10/100/842.jpg",
			},
		},
	];

	const [heroes, setHeroes] = useState([]);

	return (
		<div className="app-container">
			<header className="app-header">
				<Link to="/">
					<h1>My Favorite Hero</h1>
					<img src="" alt="" />
				</Link>
				<nav className="app-nav">
					<Link to="/">Home</Link>
					<Link to="heroes">Heroes</Link>
					<Link to="favorites">Favorites</Link>
					<Link to="about">About</Link>
				</nav>
			</header>

			<main>
				<Routes>
					<Route
						path="/"
						element={<Home heroes={heroes} setHeroes={setHeroes} />}
					/>
					<Route path="heroes" element={<HeroList />} />
					<Route path="heroes" element={<HeroSearchForm />} />
				</Routes>
			</main>
			<footer>LinkedIn: Gmail:</footer>
		</div>
	);
}

export default App;
