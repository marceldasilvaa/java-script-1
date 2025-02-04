import "./Photo.css";

import { upload } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem";
import LikeContainer from "../../components/LikeContainer";

// hooks
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetComponentMessage } from "../../hooks/useResetComponentMessage";

// redux
import { getPhoto, like, comment } from "../../slices/PhotoSlice";

const Photo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const resetMessage = resetComponentMessage(dispatch);

  const { user } = useSelector((state) => state.auth);

  const { photo, error, message, loading } = useSelector(
    (state) => state.photo
  );

  const [commentText, setCommentText] = useState("");

  // load photo data
  useEffect(() => {
    dispatch(getPhoto(id));
  }, [dispatch, id]);

  // insert a like
  const handleLike = () => {
    dispatch(like(photo._id));

    resetMessage();
  };

  // insert a comment
  const handleComment = (e) => {
    e.preventDefault();

    const commentData = {
      comment: commentText,
      id: photo._id,
    };

    dispatch(comment(commentData));

    setCommentText("");

    resetMessage();
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="photo">
      <PhotoItem photo={photo} />
      <LikeContainer photo={photo} user={user} handleLike={handleLike} />
      <div className="messageContainer">
        {error && <Message msg={error} type="error" />}
        {message && <Message msg={message} type="success" />}
      </div>
      <div className="comments">
        {photo.comments && (
          <>
            <h3>Comentários: ({photo.comments.length})</h3>
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Insira o seu comentário..."
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText || ""}
              />
              <input type="submit" value="Enviar" />
            </form>
            {photo.comments.length === 0 && <p>Não há comentários ainda...</p>}
            {photo.comments.map((comment) => (
              <>
                <div className="comment" key={comment.comment}>
                  <div className="author">
                    {comment.userImage && (
                      <img
                        src={`${upload}/users/${comment.userImage}`}
                        alt={comment.userName}
                      />
                    )}
                    <Link to={`/users/${comment.userId}`}>
                      <p>{comment.userName}</p>
                    </Link>
                  </div>
                </div>
                <p>{comment.comment}</p>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Photo;
