let initialState = {
  fundingList:[],
}

function reducer(state = initialState, action) {
  const {type, payload} = action
  switch(type) {
    case "ADD_FUNDING":
      return { ...state, fundingList:[...state.fundingList, {name: payload.name, message: payload.message}]}
    default:
      return {...state};
  };
}

export default reducer;