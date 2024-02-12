// class JSXDemo extends ReadableByteStreamController.component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>My Image!</h1>
// 				<img src="https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
// 			</div>
// 		)
// 	}
// }

// ReactDOM.render(<JSXDemo />, document.getElementById('root'));


function getMood() {
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
	return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My Current Mood is: {getMood()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
