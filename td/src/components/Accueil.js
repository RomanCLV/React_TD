import React from 'react';
import { Link } from "react-router-dom";
import Game from "./Game"
export default class Accueil extends React.Component {
        render() {
            return (
                <div>
                    <h1>Accueil</h1>
                    <ul>
                        <li>
                            <Link to={'/Configuration/'}>Configuration</Link>
                        </li>
                        <li>
                            <Link to={'/About/'}>About</Link>
                        </li>
                    </ul>
                    <p>Hello {this.props.pseudo} !</p>
                    <Game pseudo={this.props.pseudo} />
                </div>
            );
        }
    }
