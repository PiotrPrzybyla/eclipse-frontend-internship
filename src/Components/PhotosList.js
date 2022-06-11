import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";

function PhotosList() {
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
			<div className="photos">
				{photos.map((photo, id) => {
					return (
						<Photo
							key={id}
							source={photo.urls.regular}
							authorLink={photo.user.portfolio_url}
							author={photo.user.name}
							date={photo.created_at}
						></Photo>
					);
				})}
			</div>
		);
	else return <div>Loading</div>;
}

export default PhotosList;
