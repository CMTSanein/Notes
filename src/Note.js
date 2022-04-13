import React from "react";

const Note = (props) => {
	return (
		<div className="Note">
			<p>{props.textfield}</p>
			<p>1.1.2011</p>
		</div>
	);
};

export default Note;
