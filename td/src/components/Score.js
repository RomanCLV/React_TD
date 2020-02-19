import React from 'react';


export default class Score extends React.Component {
  
    render() {
        return (
            <div>
                <p>Score :</p>
                { this.props.victory.map( (value, index) => <p key={index}>{value.userName} - Tour{value.tour > 1 ? "s : " : " : " } {value.tour} - Nombre mystère : {value.mysteryNumber}</p> ) }
            </div>
        )
    }
}
