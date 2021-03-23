import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment } from "./../../store/actions/actions";
import { useLocation } from "react-router";
import Navbar from "../Navbar";
import like from "../../assets/like.png";
import sendd from "../../assets/send (1).png"
import comment from "../../assets/comment.png"
import save from "../../assets/save.png"


const ImageDetail = (props) => {
  const dispatch = useDispatch();
  const [photoUrl, setPhotoUrl] = useState();
  const [newComment, setNewComment] = useState({});
  const location = useLocation();
  const comments = useSelector((state) => state.commentsReducer.data);

  useEffect(() => {
    dispatch(addComment());
    dispatch(getComments());
    setPhotoUrl(location.state);
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(newComment));
  };
  return (
    <div className="center">
      <Navbar />
      <div className="profile">
        <img className="" src={photoUrl} alt="images" />
        <div className="icon-menu">
              <div className="interactions">
              <img src={like} className="icon"/>
              <img src={comment} className="icon"/>
              <img src={sendd} className="icon"/>
            </div>
            <img src={save} className="icon"/>
              </div>
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
     
      </div>

      <div className="navbar2">
        <img className="bar" />
      </div>
    </div>
  );
};

export default ImageDetail;
