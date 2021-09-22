import { GET_DATA } from "../actions/index";

const initialState = {
  data: [],
  loading: true,
}

 function apiReducer (state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
 }

 export default apiReducer;