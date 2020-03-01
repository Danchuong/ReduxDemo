const initialState = {
  phoneNumber: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    default:
      return state;
  }
}
