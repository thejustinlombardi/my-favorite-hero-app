import { useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import HeroList from "./components/Heroes/HeroList";
import HeroViewer from "./components/Heroes/HeroViewer";
import HeroDetails from "./components/Heroes/HeroDetails";
import HeroFavorites from "./components/Heroes/HeroFavorites";
import HeroSearchForm from "./components/Heroes/HeroSearchForm";

import "./App.css";

function App() {
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
					<Route path="/" element={<Home />} />
					<Route path="heroes" element={<HeroList />} />
					<Route path="heroes" element={<HeroSearchForm />} />
				</Routes>
			</main>
			<footer>LinkedIn: Gmail:</footer>
		</div>
	);
}

export default App;
