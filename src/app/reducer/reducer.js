import * as Redux from "redux";

const reducer = Redux.combineReducers({
    todo: (state = [], action) => {
        const newState = Object.assign([], state);
        if (action.type === 'add') {
            newState.push(action.item);
        }
        return newState;
    }
});
export default reducer;