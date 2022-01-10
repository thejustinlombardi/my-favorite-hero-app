import React from "react";

// This handles the rendering of the HeroDetails

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	return <HeroDetails hero={hero} />;
}

export default HeroViewer;
