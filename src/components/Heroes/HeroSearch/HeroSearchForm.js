import React from "react";

// This component handles the search field for the Hero List component

function HeroSearchForm({ handleChange, handleSubmit, searchHero }) {
	return (
		<form onSubmit={handleSubmit} className="form-horizontal">
			<label htmlFor="searchHero" className="label">
				Hero:{"  "}
			</label>
			<input
				placeholder="Search Hero"
				type="text"
				name="searchHero"
				required
				onChange={handleChange}
				value={searchHero}
				className="search-bar"
			/>
			<button type="submit" className="form-button">
				Get Hero!
			</button>
		</form>
	);
}

export default HeroSearchForm;
