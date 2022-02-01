import React, { useState } from "react";
import PropTypes from "prop-types";

const TrafficLight = props => {
	return (
		<div
			className={`traffic_light ${props.color}`}
			onClick={props.switchLight(props.color)}></div>
	);
};

TrafficLight.propTypes = {
	color: PropTypes.string,
	light: PropTypes.bool,
	switchLight: PropTypes.func
};

export default TrafficLight;
