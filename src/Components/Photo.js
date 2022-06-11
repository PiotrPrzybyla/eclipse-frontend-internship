import React from "react";

function Photo(props) {
	return (
		<div className="photo">
			<img src={props.source} alt="" />
			<section className="info">
				<div className="info__data">
					<p>by</p>
					<a href={props.authorLink}> {props.author}</a>
				</div>
				<div className="info__data">
					<p>on</p>
					<h3>{props.date.split("T")[0]}</h3>
				</div>
			</section>
		</div>
	);
}

export default Photo;
