import React from "react";

//this is the input field for the user to get the city and the country

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input onInput={props.getTitle} type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;