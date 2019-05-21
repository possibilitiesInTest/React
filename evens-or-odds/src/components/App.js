import React, { Component } from "react";
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchState';
import Instructions from './Instructions';
import DrawCard from './DrawCard';
import Card from './Card';

class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }


    render() {
        console.log('this', this);

        if(this.props.fetchState === fetchStates.error) {
            return (
                <div>
                    <p>Please try reloading the app. An error occurred.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }

        return (
            <div>
                <h2> ♦ ♥ ️ Evens or Odds ♣ ♠</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The game in on!</h3>
                            <br />
                            <DrawCard />
                            <hr />
                            <Card />
                            <hr />
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits</h3>
                            <br />
                            <button onClick={ this.startGame }>Start Game</button>
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

    const {
        settings: { gameStarted },
        deck: { fetchState, message}
    } = state;

    return { gameStarted, fetchState, message };
}


// react-redux will call function to customize connector result
const componentConnector = connect(
    mapStateToProps,
    { startGame, cancelGame, fetchNewDeck }
);

// component now connected to redux store
export default componentConnector(App);
