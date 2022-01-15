import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import HeroMain from "./components/Heroes/HeroSearch/HeroMain";
import HeroCard from "./components/Heroes/HeroCard";
import RandomHero from "./components/Heroes/RandomHero";
import HeroSearchForm from "./components/Heroes/HeroSearch/HeroSearchForm";
import About from "./components/About/About";
import EasterEgg from "./components/About/EasterEgg";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./App.css";
import "./components/Heroes/Heroes.css";

function App() {
	return (
		<div className="app-container">
			{/* Header is the sites navigation */}
			<header className="app-header">
				<h1>My Favorite Hero</h1>
				<nav className="app-nav">
					<Link to="/">Home</Link>
					<Link to="heroes">Heroes</Link>
					<Link to="random-hero">Random Hero</Link>
					<Link to="about">About</Link>
				</nav>
			</header>
			{/* main represents all routes*/}
			<main className="app-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="heroes" element={<HeroMain />} />
					<Route path="heroes" element={<HeroSearchForm />} />
					<Route path="/hero" element={<Navigate to="/heroes" />} />
					<Route path="random-hero" element={<RandomHero />} />
					<Route path="heroes/:id" element={<HeroCard />} />
					<Route path="about" element={<About />} />
					<Route path="about/easter-egg" element={<EasterEgg />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</main>
			{/* Footer contains linkedin profile */}
			<footer className="app-footer">
				<a href="https://linkedin.com/in/justin-lombardi" target="blank">
					<img
						align="center"
						src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
						alt="justin-lombardi"
						height="30"
						width="40"
					/>
				</a>
				<a href="https://github.com/thejustinlombardi" target="blank">
					<img
						align="center"
						src="https://i.imgur.com/xwOFfCj.png"
						alt="justin-lombardi"
						height="30"
						width="40"
					/>
				</a>
			</footer>
		</div>
	);
}

export default App;
