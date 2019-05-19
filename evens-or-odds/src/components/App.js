import React, { Component } from "react";
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import Instructions from './Instructions';

class App extends Component {

    render() {
        console.log('this', this);

        return (
            <div>
                <h2> ♦ ♥ ️ Evens or Odds ♣ ♠</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game in on!</h3>
                            <br />
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={ this.props.startGame }>Start Game</button>
                            <hr />
                            <Instructions />
                        </div>
                    )
                }
            </div>
        )
    }
}


// maps redux state to properties that get attached to component
const mapStateToProps = state => {
    console.log('state', state);

    return { gameStarted: state.gameStarted };
}

// // allows attachment of action creator methods to props { }
const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(startGame()),
        cancelGame: () => dispatch(cancelGame())
    };
}

// react-redux will call function to customize connector result
const componentConnector = connect(mapStateToProps, mapDispatchToProps);

// component now connected to redux store
export default componentConnector(App);
