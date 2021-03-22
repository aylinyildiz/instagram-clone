import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getComments, addComment } from "../../store/actions/actions";
import Navbar from "../Navbar";
import {BrowserRouter as Router, Link, withRouter} from "react-router-dom";
// import Image from "../Image/Image"

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoto());
    dispatch(getComments());
  }, []);

  const photoDetails = useSelector((state) => state.photosReducer.data);
  const comments = useSelector((state) => state.commentsReducer.data);

  const [newComment, setNewComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault(); //yorum ekleyince yenilenmesin
    dispatch(addComment(newComment));
  };

  // const getImage =(image) =>{
  //   dispatch(getImage(image));
  // }

  return (
    <div className="center">
      <Navbar/>

      <div className="profile">
        {photoDetails.length > 0 &&
          photoDetails.map((photo) => (
            <>
              <p className="photo-info">{photo.author}</p>
              <Link to="/ImageDetail">
              <img src={photo.download_url} alt="images" width="100%" /></Link>
              {comments.length > 0 &&
                comments.map((comment) => (
                  <>
                    <p className="photo-info">
                      <span>{comment.name}</span> - {comment.body}
                    </p>
                  </>
                ))}
              <form onSubmit={handleSubmit} className="form">
                <input
                  onChange={(event) =>
                    setNewComment({ name: "User", body: event.target.value })
                  }
                  value={newComment.body}
                />
                <button type="submit">Add new comment</button>
              </form>
              {/* <Link to="/Image" onClick={()=>getImage(photoDetails.download_url)}><img src={photoDetails.download_url} width="100%"/></Link> */}
            </>
          ))}
      </div>

      <div className="navbar2">
        <img className="bar" />
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
