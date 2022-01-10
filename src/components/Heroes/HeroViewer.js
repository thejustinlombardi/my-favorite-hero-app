import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	return <HeroDetails hero={hero} />;
}

export default HeroViewer;
