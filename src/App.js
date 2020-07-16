import React, { Component } from 'react';
import Button from './components/Button';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: '0',
			previous: []
		}
	}

	reset = () => {
		this.setState({ result: '0' });
	}
	addToCurrent = (symbol) => {
		let operands = ['/', '-', '+', 'X'];
		if(operands.indexOf(symbol) > -1) {
			let {previous} = this.state;
			previous.push(this.state.current + symbol);
			this.setState({previous});
		} else {
			this.setState({ current: this.state.current + symbol});
		}
	}

	render() {
		const buttons = [
			{ symbol: 'C', cols: 3, action: this.reset },
			{ symbol: '/', cols: 1, action: this.addToCurrent },
			{ symbol: '7', cols: 1, action: this.addToCurrent },
			{ symbol: '8', cols: 1, action: this.addToCurrent },
			{ symbol: '9', cols: 1, action: this.addToCurrent },
			{ symbol: 'X', cols: 1, action: this.addToCurrent },
			{ symbol: '4', cols: 1, action: this.addToCurrent },
			{ symbol: '5', cols: 1, action: this.addToCurrent },
			{ symbol: '6', cols: 1, action: this.addToCurrent },
			{ symbol: '-', cols: 1, action: this.addToCurrent },
			{ symbol: '1', cols: 1, action: this.addToCurrent },
			{ symbol: '2', cols: 1, action: this.addToCurrent },
			{ symbol: '3', cols: 1, action: this.addToCurrent },
			{ symbol: '+', cols: 1, action: this.addToCurrent },
			{ symbol: '0', cols: 2, action: this.addToCurrent },
			{ symbol: '.', cols: 1, action: this.addToCurrent },
			{ symbol: '=', cols: 1, action: this.addToCurrent },
		];
		return (
			<div className="calc">
				{this.state.previous.length > 0 ?
					<div className="floaty-last">
						{this.state.previous[this.state.previous.length - 1]}
					</div>
					:
					null
				}
				<input
					className="calc__result"
					type="text"
					value={this.state.current}>
				</input>
				<div className="box-wrap">
					{buttons.map((btn, i) => {
						return <Button key={btn.symbol} symbol={btn.symbol} cols={btn.cols} action={(symbol) => btn.action(symbol)} />
					})}
				</div>

			</div>
		);
	}
}

export default App;
