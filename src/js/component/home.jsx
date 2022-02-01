import React, { useState } from "react";
import TrafficLight from "./trafficLight.jsx";

const Home = () => {
	const [lightStop, setLightStop] = useState(false);
	const [lightSlow, setLightSlow] = useState(false);
	const [lightGo, setLightGo] = useState(false);

	const switchBuld = color => {
		if (color == "stop") {
			setLightStop(true);
			setLightSlow(false);
			setLightGo(false);
		} else if (color == "slow") {
			setLightStop(false);
			setLightSlow(true);
			setLightGo(false);
		} else if (color == "go") {
			setLightStop(false);
			setLightSlow(false);
			setLightGo(true);
		}
	};
	return (
		<div className="container">
			<TrafficLight
				color="red"
				light={lightStop}
				switchLight={switchBuld}
			/>
			<TrafficLight
				color="yellow"
				light={lightSlow}
				switchLight={switchBuld}
			/>
			<TrafficLight
				color="green"
				light={lightGo}
				switchLight={switchBuld}
			/>
		</div>
	);
};

export default Home;
