import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
  
    render() {
        return (
            <div>
                <h1>About</h1>
                <ul>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                </ul>
                <p>
                    Team Agar.iOS <br />
                    Marie <br />
                    Ilias <br />
                    Francesco <br />
                    Roman <br />
                </p>
            </div>
        );
    }
}

export default About;
