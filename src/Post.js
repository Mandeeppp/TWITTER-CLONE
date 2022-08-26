import React, { forwardRef } from "react";
import './Post.css'
import PersonIcon from '@mui/icons-material/Person';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
      return (
        <div className="post" ref={ref}>
          <div className="post__avatar">
          <PersonIcon src={PersonIcon} />
            
            
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {displayName}{" "}
                  <span className="post__headerSpecial">
                    {verified &&<DomainVerificationIcon className="post__badge" />} @
                    {username}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
              <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      );
    }
  );
  
  export default Post;







        