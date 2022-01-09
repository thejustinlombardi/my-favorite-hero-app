import React from "react";
import { Link } from "react-router-dom";

import "./About.css";

function About(props) {
	return (
		<div className="about-div">
			<Link to="easter-egg" className="about-a">
				<h2 className="about-title">About</h2>
			</Link>

			<div className="about-p">
				<p>
					My Favorite Hero is a place where fellow heroes can come and explore
					700+ superheroes! Always wanted to know Venom's real name? Or ever
					wanted to know how much Thanos weighs? You can find that all out here!
					If that's not enough and you're hungry for more, click the 'Learn
					More' button on the Hero Cards to get even more knowledge on your
					favorite heroes!
				</p>
				<p>
					Special thanks to:
					<a className="about-a" href="superheroapi.com">
						superheroapi.com
					</a>
					<a className="about-a" href="superherodb.com">
						superherodb.com
					</a>
					for their wonderful database that helped make this project possible.
					Also to memegenerator.net for being a good laugh when an image can't
					be found. Try searching for heroes to see what I meme...I mean,
					'mean'!
				</p>
			</div>
		</div>
	);
}

export default About;
