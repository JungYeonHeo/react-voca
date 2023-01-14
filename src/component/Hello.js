export default function Hello() {
	function showName() {
		console.log('Mike');
	}

	return (
		<div>
			<h1>Hello</h1>
			<button onClick={showName}>Show name</button>
			<button>Show age</button>
		</div>
	);
}
