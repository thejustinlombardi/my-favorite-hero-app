import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import HeroList from "./components/Heroes/HeroList";
import HeroCard from "./components/Heroes/HeroCard";
import RandomHero from "./components/Heroes/RandomHero";
import HeroSearchForm from "./components/Heroes/HeroSearchForm";
import About from "./components/About/About";
import EasterEgg from "./components/Heroes/EasterEgg";

import "./App.css";
import "./components/Heroes/Heroes.css";

function App() {
	return (
		<div className="app-container">
			<header className="app-header">
				<h1>My Favorite Hero</h1>
				<nav className="app-nav">
					<Link to="/">Home</Link>
					<Link to="heroes">Heroes</Link>
					<Link to="random-hero">Random Hero</Link>
					<Link to="about">About</Link>
				</nav>
			</header>

			<main className="app-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="heroes" element={<HeroList />} />
					<Route path="heroes" element={<HeroSearchForm />} />
					<Route path="random-hero" element={<RandomHero />} />
					<Route path="heroes/:id" element={<HeroCard />} />
					<Route path="about" element={<About />} />
					<Route path="about/easter-egg" element={<EasterEgg />} />
				</Routes>
			</main>
			<footer className="app-footer">
				<a href="https://www.linkedin.com/in/justin-lombardi-creates/">
					LinkedIn
				</a>
			</footer>
		</div>
	);
}

export default App;
