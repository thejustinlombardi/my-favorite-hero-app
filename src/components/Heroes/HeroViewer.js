import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	if (!hero.length) {
		return <h2>No Hero Found!</h2>;
	}
	return (
		<div className="hero-card">
			<HeroDetails hero={hero} />
		</div>
	);
}

export default HeroViewer;
