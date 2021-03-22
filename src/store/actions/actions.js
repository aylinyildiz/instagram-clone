export const getPhoto = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PHOTO_REQUEST" });
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PHOTO_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "GET_PHOTO_ERROR", payload: error }));
  };
};

export const getComments = () => {
  return (dispatch) => {
    dispatch({ type: "GET_COMMENTS_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_COMMENTS_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_COMMENTS_ERROR", payload: error })
      );
  };
};

export const addComment = (post) => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts/2/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "ADD_NEW_COMMENT",
          payload: data
        })
      )
      .catch((error) => console.error(error));
  };
};
