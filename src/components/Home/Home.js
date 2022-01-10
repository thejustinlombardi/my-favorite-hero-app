import React from "react";

// This component handles all text and images for the Home component

import "./Home.css";

function Home(props) {
	return (
		<div className="home-container">
			<div className="welcome-div">
				<h2>Welcome, Heroes!</h2>
				<h3>Click the `HEROES` tab above and search for your favorite hero!</h3>
			</div>

			<div className="home-card">
				<img src="https://i.imgur.com/MkUNj1z.jpg" alt="batgirl" />
			</div>
			<div className="home-card">
				<img src="https://i.imgur.com/vPV21zn.jpg" alt="spawn" />
			</div>
			<div className="home-card">
				<img src="https://i.imgur.com/CkEJNR0.jpg" alt="spiderman" />
			</div>
			<div className="home-card">
				<img src="https://i.imgur.com/tQSCnil.jpg" alt="punisher" />
			</div>
			<div className="home-card">
				<img src="https://i.imgur.com/lwfsgxk.jpg" alt="catwoman" />
			</div>
			<div className="home-card">
				<img src="https://i.imgur.com/7mYOH2O.jpg" alt="bucky" />
			</div>
		</div>
	);
}

export default Home;
