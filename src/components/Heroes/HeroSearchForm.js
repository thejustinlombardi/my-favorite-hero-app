import React from "react";

function HeroSearchForm({ handleChange, handleSubmit, searchHero }) {
	return (
		<form onSubmit={handleSubmit} className="form-horizontal">
			<input
				placeholder="Search your Hero"
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
