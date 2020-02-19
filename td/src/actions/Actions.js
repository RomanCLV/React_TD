export const ADD_SCORE = "ADD_SCORE"
export const EDIT_SCORE = "EDIT_SCORE"


export function addScore(score) {
    return {type : ADD_SCORE, value: score }
}

export function editScore(score) {
    return {type : EDIT_SCORE, value: score }
}