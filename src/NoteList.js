import React from "react";
import "./NoteList.css";
import Note from "./Note";

const NoteList = (props) => {
	return (
		<div className="NoteList">
			<Note />

			{props.children}
		</div>
	);
};

export default NoteList;
