import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero, notFound } = props;

	if (notFound) {
		return <h2 className="try-h2">Sorry! Hero not found. Please try again.</h2>;
	}

	if (!hero.length && !notFound) {
		return <h2 className="try-h2">Enter your Hero above!</h2>;
	}
	return <HeroDetails hero={hero} />;
}

export default HeroViewer;
