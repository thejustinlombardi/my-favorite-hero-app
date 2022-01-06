import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import HeroList from "./components/Heroes/HeroList";
import HeroCard from "./components/Heroes/HeroCard";
import HeroFavorites from "./components/Heroes/HeroFavorites";
import HeroSearchForm from "./components/Heroes/HeroSearchForm";

import "./App.css";

function App() {
	return (
		<div className="app-container">
			<header className="app-header">
				<h1 className="glow">My Favorite Hero</h1>
				<nav className="app-nav">
					<Link to="/">Home</Link>
					<Link to="heroes">Heroes</Link>
					<Link to="favorites">Favorites</Link>
					<Link to="about">About</Link>
				</nav>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="heroes" element={<HeroList />} />
					<Route path="heroes" element={<HeroSearchForm />} />
					<Route path="heroes/:id" element={<HeroCard />} />
				</Routes>
			</main>
			<footer>
				<p>LinkedIn:</p>
				<p>Gmail:</p>
			</footer>
		</div>
	);
}

export default App;
