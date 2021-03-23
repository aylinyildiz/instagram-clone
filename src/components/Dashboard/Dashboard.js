import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto, getComments, addComment } from "../../store/actions/actions";
import Navbar from "../Navbar";
import { Link, withRouter } from "react-router-dom";
import like from "../../assets/like.png";
import sendd from "../../assets/send (1).png"
import comment from "../../assets/comment.png"
import save from "../../assets/save.png"

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

  return (
    <div className="center">
      <Navbar />
      <div className="profile">
        {photoDetails.length > 0 &&
          photoDetails.map((photo) => (
            <>
              <p className="photo-info">{photo.author}</p>
              <Link
                to={{ pathname: "/ImageDetail", state: photo.download_url}}
              >
                <img className="post" src={photo.download_url} alt="images"/>
              </Link>
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
