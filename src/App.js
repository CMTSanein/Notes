import "./App.css";
import "./TextArea";
import TextArea from "./TextArea";
import "./TextArea.css";
import Button from "./Button";
import Note from "./Note";
import NoteList from "./NoteList";
import { useEffect, useState } from "react";

function App() {
	const [textfield, setTextField] = useState("");
	const [NoteArr, setNoteArr] = useState("");

	const afterTyping = (event) => {
		setTextField(event.target.value);
	};

	const whenPressed = (event) => {
		return (
			<div>
				<Note />
			</div>
		);
	};

	console.log({ textfield });

	return (
		<div className="App">
			<NoteList>
				<Note />
			</NoteList>

			<TextArea typingChange={afterTyping} />
			<Button newNote={whenPressed} />
		</div>
	);
}

export default App;
