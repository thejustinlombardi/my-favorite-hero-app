import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	return (
		<div>
			{hero ? (
				<HeroDetails hero={hero} />
			) : (
				<h2 className="try-h2">Enter your Hero above!</h2>
			)}
		</div>
	);
}

export default HeroViewer;
