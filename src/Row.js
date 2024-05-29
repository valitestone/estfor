import style from './App.css'
import target from './target.js'

function Row ({ commands }) {
	
	const view = () => {
		
	};
	return (
	<div className="Box">
		<div>
			<label>{commands.toString()} </label>
		
		<button onClick ={view} >
			Execute		
		</button>
		</div>
	</div>
	);
}
export default Row;
