import React from "react";

const TextArea = (props) => {
	return (
		<div className="Text">
			<textarea onChange={props.typingChange}></textarea>
		</div>
	);
};

export default TextArea;
