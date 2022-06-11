import React, { useEffect, useState } from "react";
function Loading() {
	const [dots, setDots] = useState("");
	useEffect(() => {
		const dotsArray = [".", "..", "..."];
		let index = 0;
		const dotsInterval = setInterval(() => {
			setDots(dotsArray[index++]);
			if (index === dotsArray.length) index = 0;
		}, 400);
		return () => clearInterval(dotsInterval);
	}, []);

	return <div className="loading">Loading{dots}</div>;
}

export default Loading;
