import React from "react";
import {
  MdPlaylistAddCheck,
  IoIosArrowDown,
  AiOutlineMessage,
  FaShare,
  FiHeart,
  FiUpload,
} from "react-icons/all";
import "./Post.css";

const Post = ({
  authorData,
  content,
  image,
  date,
  msgs,
  shares,
  likes,
  contentHandler,
  isContentOpen,
}) => (
  <div className="post-data">
    <div className="user-block">
      <img src={authorData.photo} alt="user-public" />
    </div>

    <div className="post-info">
      <div className="user-info">
        <p>
          <span className="user-name">
            {authorData.name} {<MdPlaylistAddCheck />}
          </span>
          <span className="post-settings">
            {authorData.nickname} • {date}
          </span>
        </p>

        <div onClick={contentHandler} className="arrow-btn">
          {<IoIosArrowDown />}
        </div>
      </div>
      {isContentOpen ? (
        <div className="main-content">
          <p>{content}</p>
          <img src={image} alt="content-img" />
        </div>
      ) : null}
    </div>

    <ul className="bottom-data">
      <li>
        <AiOutlineMessage /> {msgs}
      </li>
      <li>
        <FaShare /> {shares}
      </li>
      <li>
        <FiHeart /> {likes}
      </li>
      <li>
        <FiUpload />
      </li>
    </ul>
  </div>
);

export default Post;
