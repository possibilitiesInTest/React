function getNum() {
	const nums  = [5, 6, 7];
	return nums[Math.floor(Math.random() * nums.length)];
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7){
			msg = 
			<div>
				<h2>Congrats!</h2>
			</div>
		} else {
			msg = <h1>Try again!</h1>
		}
		return (
			<div>
				<h1>Your number is: {num}</h1>
				{msg}
			</div>
		);
	}
}


// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		return (
// 			<div>
// 				<h1>Your number is: {num}</h1>
// 				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
// 				{
// 					num === 7 && <img src="https://media.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif" />
// 				}
// 			</div>
// 		);
// 	}
// }



// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		return (
// 			<div>
// 				<h1>Your number is: {num}</h1>
// 				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
// 				{
// 					num === 7
// 					? <img src="https://media.giphy.com/media/3ohryhNgUwwZyxgktq/giphy.gif" />
// 					: null
// 				}
// 			</div>
// 		);
// 	}
// }




// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		return (
// 			<div>
// 				<h1>Your number is: {num}</h1>
// 				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
// 			</div>
// 		);
// 	}
// }

ReactDOM.render(<NumPicker />, document.getElementById('root'));


// function getNum() {
// 	return Math.floor(Math.random() * 10) + 1;
// }
// class NumPicker extends React.Component {
// 	render() {
// 		const num = getNum();
// 		let msg;
// 		if (num === 7) {
// 			msg =
// 				<div>
// 					<h2>CONGRATS YOU WIN!</h2>
// 					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
// 				</div>
// 		} else {
// 			msg = <p>Sorry You Lose!</p>
// 		}
// 		return (
// 			<div>
// 				<h1>Your number is: {num} </h1>
// 				{msg}
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(<NumPicker />, document.getElementById('root'));