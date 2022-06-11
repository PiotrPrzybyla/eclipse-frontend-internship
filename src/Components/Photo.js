import React, { useEffect, useState } from "react";
import axios from "axios";

function Photo() {
	useEffect(() => {
		fetchPhotos();
	}, []);
	const [photos, setPhotos] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	function fetchPhotos() {
		axios
			.get(
				"https://api.unsplash.com/photos?client_id=z57ZXwyPe2AbNMh4yvHoT6IZXVNny3tCDnCGB7KzuLI"
			)
			.then((res) => {
				setPhotos(res.data);
				setIsLoaded(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	if (isLoaded)
		return (
			<div>
				<img src={photos[0].urls.full} alt="" />
			</div>
		);
	else return <div>Loading</div>;
}

export default Photo;
