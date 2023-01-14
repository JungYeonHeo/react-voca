export default function Hello() {
	function showAge(age) {
		console.log(age);
	}

	function showText(e) {
		console.log(e.target.value);
	}

	return (
		<div>
			<h1>Hello</h1>
			<button>Show name</button>
			<button
				onClick={() => {
					showAge(30);
				}}
			>
				Show age
			</button>
			<input type="text" onChange={showText} />
		</div>
	);
}
