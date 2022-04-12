import "./App.css";
import "./TextArea";
import TextArea from "./TextArea";
import "./TextArea.css";
import Button from "./Button";
import NoteList from "./NoteList";

function App() {
	return (
		<div className="App">
			<NoteList />
			<TextArea />
			<Button />
		</div>
	);
}

export default App;
