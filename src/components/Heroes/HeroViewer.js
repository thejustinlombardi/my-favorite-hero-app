import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	return (
		<div>
			{hero ? (
				<HeroDetails hero={hero} />
			) : (
				<h2 className="try-h2">No Hero matches that search. Try Again!</h2>
			)}
		</div>
	);
}

export default HeroViewer;
