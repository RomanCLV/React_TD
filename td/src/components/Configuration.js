import React from 'react';
import { Link } from "react-router-dom";

export default class Configuration extends React.Component {
    setName(event) {
        event.preventDefault();
        this.props.pseudo(event.target[0].value);
    }

    render() {
        
        return (
            <div>
                <h1>Configuration</h1>
                
                <form onSubmit={event => this.setName(event)}>
                    <label>
                        <p>Ton nom : </p>
                        <input type="text" name="pseudo" placeholder="Nom" />
                    </label>
                    <button>Envoyer</button>
                </form>

                <Link to='/'>Accueil</Link>
            </div>
        );
    }
}
