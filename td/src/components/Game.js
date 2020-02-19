import React from 'react';
import { connect } from 'react-redux';
import { addScore, editScore } from '../actions/Actions';
import Score from './Score';

 class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            mysteryNumber: null,
            tour: 0,
            result: null
        }
    }
    
    _getRandom() {
        const MIN = 0;
        const MAX = 101;
        return Math.trunc((Math.random() * (MAX - MIN)) + MIN)
    }

    timeToPlay() {
        if (this.props.pseudo.length !== 0 && this.state.mysteryNumber === null) {
            this.setState({
                ...this.state,
                mysteryNumber: this._getRandom(), 
                tour: 0
            });

           
        }
    }

    displayMessage() {
        return  this.props.pseudo.length === 0 ? <p>Entrez votre nom</p> : <p>Entrez un nombre entre 0 et 100 compris : </p>
    }

    displayResult() {
        console.log("mystere : ", this.state.mysteryNumber);
        switch (this.state.result) {
            case "sup":
                return <p>C'est plus petit !</p>;
            case "inf":
                return <p>C'est plus grand !</p>;
            case "equ":
                return <p>C'est gagné biloute !</p>
            case "los":
                return <p>C'est perdu l'italien !</p>
            default:
                return <p>El Muchachos !</p>
        }
    }

    handleRestart(e) {
        e.preventDefault()
        if (this.props.state.victory.length < 5) {
            this.props.dispatch( addScore({ userName: this.props.pseudo, tour: -1, mysteryNumber: this.state.mysteryNumber }));
        }
        this.setState({
            ...this.state,
            mysteryNumber: null,
            result : "los"
        });
    }

    handleSend(e) {
        e.preventDefault();

        let _result;
        let userNumber = parseInt(e.target[0].value);
        if (isNaN(userNumber)) {
            return;
        }
        console.log("user : ", userNumber );
        if (userNumber > this.state.mysteryNumber) {
            _result = "sup";
        }
        else if (userNumber < this.state.mysteryNumber) {
            _result = "inf";
        }
        else {
            _result = "equ";
            if (this.props.state.victory.length < 5) {
                this.props.dispatch( addScore({ userName: this.props.pseudo, tour: this.state.tour + 1, mysteryNumber: this.state.mysteryNumber }));
            }
            else {
                this.props.dispatch( editScore({ userName: this.props.pseudo, tour: this.state.tour + 1, mysteryNumber: this.state.mysteryNumber }));
            }
        }
        if (_result === "equ") {
            this.setState ({
                ...this.state,
                mysteryNumber: null,
                tour: this.state.tour + 1,
                result: _result
            });
        }
        else {
            this.setState ({
                ...this.state,
                tour: this.state.tour + 1,
                result: _result
            });
        }
    }

    render(){
        return(
            <div>
                { this.timeToPlay() }
                { this.displayMessage() }
                <form onSubmit={ (e) => this.handleSend(e) }>
                    <label>
                        <input type="number" disabled={ this.props.pseudo.length === 0 }/>
                        <button>Send</button>
                    </label>
                </form>

                { this.displayResult() }

                <button onClick={ (e) => this.handleRestart(e) }>Restart</button>
                <Score victory={this.props.state.victory} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      state
    };
  }
export default connect(mapStateToProps)(Game);
