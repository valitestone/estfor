import logo from './logo.svg';
import './App.css';
import commandList from './commandList.js';
import Row from './Row.js';
function App() {
const rows = () => {
	console.log(commandList);
		return(
			commandList.map(i => 
				<div className="OuterBox" key = {i.id}>
					<Row  commands = {i.commands}/>
				</div>
			)
		);
	};
  return (
    <div className="App">
      <header className="App-header">
        Estfor
      </header>
      <div className="main">
       {rows()}
      </div>
      
    </div>
  );
}

export default App;
