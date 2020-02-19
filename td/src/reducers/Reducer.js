import {ADD_SCORE, EDIT_SCORE} from "../actions/Actions"
import firebase from '../firebase';

const initialState = {
    victory : []
};

const itemRef = firebase.database().ref('victory');

itemRef.on('value', (snapshot) => {
    const items = snapshot.val();
    for (var prop in items) {
        console.log("prop : ", prop)
        initialState.victory.push(items[prop])
    }
    initialState.victory.sort(sortVictory);
    console.log("vic : ", initialState.victory)
 })



function sortVictory(a, b) {
    if (a.tour === -1) {
        return 1;
    }
    if (b.tour === -1) {
        return -1;
    }
    return a.tour >= b.tour ? 1 : -1;
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_SCORE :
            const nextState = {
                ...state,
                victory: [...state.victory , action.value].sort(sortVictory) 
            };

            const itemRef = firebase.database().ref('victory');
            itemRef.push(action.value);

            return  nextState;
        case EDIT_SCORE:
            let i = state.victory.length - 1;
            if (state.victory[i].tour > action.value.tour || state.victory[i].tour === -1) {
                const nextState = {
                    ...state, 
                    victory: [...state.victory.filter( (value, index) => index !== i), action.value].sort(sortVictory) 
                };
                const itemRef = firebase.database().ref('victory');
                itemRef.push(action.value);
                return nextState;
            }
            return state;
        default:
            return state;
    }
}
