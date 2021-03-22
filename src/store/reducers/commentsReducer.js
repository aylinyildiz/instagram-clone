const initialState = {
    data: {},
    isLoading: false
  };
  
  export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_NEW_COMMENT":
        return {
          ...state,
          data: [...state.data, action.payload] // eklediğimiz yorumun sayfada durması için
        };
      case "GET_COMMENTS_REQUEST":
        return {
          ...state,
          isLoading: true
        };
      case "GET_COMMENTS_SUCCESS":
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case "GET_COMMENTS_ERROR":
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  