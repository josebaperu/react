import * as Redux from 'redux';

const reducer = Redux.combineReducers({
  persons: (state = [], action) => {
    if (action.type === 'listUpdate') {
      console.log(action.data);
      return action.data;
    }
    return state;
  },
});
export default reducer;
