const initialState = {
  reviewCardInformation: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHDATA":
        console.log(action.data)
      return { ...state, reviewCardInformation: action.data.data }
    default:
        return state
  }
}
