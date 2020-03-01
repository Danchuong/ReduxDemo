import {PLUS_TO_COUNTER, MINUS_TO_COUNTER} from './Actions';

// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
  count: 0,
};

// This is a reducer which listens to actions and modifies the state
export default function reducer(state = initialState, action) {
  // A switch is used since if more actions are added in the future, it will be easy
  // to be able to handle this in the reducer since we just add another 'case'.
  switch (action.type) {
    case PLUS_TO_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case MINUS_TO_COUNTER:
      return{
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}
