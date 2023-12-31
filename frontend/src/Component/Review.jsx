import React, { useEffect, useState } from "react";
import { FaSearch, FaStar, FiMapPin } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import { useAuthContext } from "../customHook/useAuthContext.js";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiTwotoneDislike,
  AiTwotoneLike,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Review({ unique }) {
  const [reviews, setReviews] = useState([]);

  const fetchReview = async () => {
    const response = await fetch(
      `https://tour-et.onrender.com/api/package/${unique}/comment`
    );
    const result = await response.json();

    if (response.ok) {
      setReviews(result.data);
    }
  };
  useEffect(() => {
    fetchReview();
  }, []);

  if (reviews.length === 0) {
    return <h3 className="py-3">No review for this package. Be the first</h3>;
  }

  return (
    <div className="review py-5 container">
      <div
        className="col-md-6 scrollable-div"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {reviews.map((review, idx) => {
          return (
            <div key={idx}>
              <EachReview key={review._id} {...review} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const EachReview = ({ _id, user, text, like, dislike, rating }) => {
  const { user: realUser } = useAuthContext();

  const [liked, setLike] = useState(realUser.detail.likedComment.includes(_id));
  const [disliked, setDislike] = useState(
    realUser.detail.dislikedComment.includes(_id)
  );
  const [likeNO, setLiked] = useState(like);
  const [dislikeNO, setDisliked] = useState(dislike);

  const handelLike = async (e) => {
    let like = likeNO;
    let dislike = dislikeNO;
    setLike(!liked);
    if (liked) {
      setLiked(likeNO - 1);
      like = -1;
    } else {
      if (disliked) {
        setDisliked(dislikeNO - 1);
        dislike -= 1;
      }
      setLiked(likeNO + 1);
      like++;
    }
    setDislike(false);
    await fetch(`http://localhost:5000/api/comment/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({
        like,
        dislike,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${realUser.token}`,
      },
    });
  };
  const handelDislike = async (e) => {
    let like = likeNO;
    let dislike = dislikeNO;
    setLike(false);
    setDislike(!disliked);
    if (dislikeNO) {
      setDisliked(dislikeNO - 1);
      dislike -= 1;
    } else {
      if (liked) {
        setLiked(likeNO - 1);
        like -= 1;
      }
      setDisliked(dislikeNO + 1);
      dislike++;
    }
    await fetch(`http://localhost:5000/api/comment/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({
        like,
        dislike,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${realUser.token}`,
      },
    });
  };
  // const star = Array(parseInt(rating)).fill(0);

  return (
    <>
      <article className=" shadow rounded m-3">
        <div className="">
          <div className="px-5 py-3 d-flex justify-content-between ">
            <div className="left-one">
              <FaUserCircle style={{ fontSize: "30px" }} />
              <span className="text-capitalize fw-bold fs-5">{user} </span>
            </div>
            <div className="right-one">
              <span className="like">
                {!liked && <AiOutlineLike onClick={handelLike} />}
                {liked && <AiTwotoneLike onClick={handelLike} />}
                <span>{likeNO}</span>
                {!disliked && <AiOutlineDislike onClick={handelDislike} />}{" "}
                {disliked && <AiTwotoneDislike onClick={handelDislike} />}
                <span>{dislikeNO}</span>
              </span>
            </div>
          </div>

          {/* <div className="star text-start ms-5">
            {star.map((s) => {
              return <FaStar />;
            })}
          </div> */}
        </div>
        <div className="body text-start px-5 py-3">
          <p>{text} </p>
        </div>
      </article>
    </>
  );
};

export default Review;
