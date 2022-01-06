import React from "react";

function Home(props) {
	return (
		<div className="home-container">
			<div className="welcome-div">
				<h2>Welcome, Heroes!</h2>
				<p>
					This site is designed for all who are wanting more information on
					their favorite heroes!
				</p>
				<p> Click the `HEROES` tab above and search for your favorite hero!</p>
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
