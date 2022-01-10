import React from "react";

import HeroDetails from "./HeroDetails";

function HeroViewer(props) {
	const { hero } = props;

	return (
		<div>
			{hero ? (
				<HeroDetails hero={hero} />
			) : (
				<div>
					{/* <h2 className="try-h2">Sorry! Hero not found. Please try again.</h2> */}
					<h2 className="try-h2">Enter your Hero above!</h2>
				</div>
			)}
		</div>
	);
}

export default HeroViewer;
