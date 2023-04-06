import "./post.css";
import {MoreVert} from "@mui/icons-material"
import { useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom"

function Post({post}) {
    
    const [like,setlike] = useState(post.likes.length);    //from api post.likes(this array),   
    const [isLiked,setIsLiked] = useState(false);
    //lets create user
    const[user, setUser] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER; 

    useEffect(() => {
        const fetchUser = async () => {
        //lets go to user in the api=> we have get user, we can fetch this
            const res = await axios.get(`/users?userId=${post.userId}`);  //users now we will use this post ({post}),it includes our userId, and we will say userId
          setUser(res.data);
        };
        fetchUser();
      }, [post.userId]);    //whenever we change this ${post.userId},It should be rerender. if your using something changable insise useEffect,likesome variables, you have to write here its dependency, 

    const likeHandler = ()=> {
        setlike(isLiked ? like-1 : like+1)   //inside this, setlike= (becasue we are going to change this like, and new like going to change according to our logic,** if this isLike which means we already like this post, ? im going to say like-1, : if you didnot like before, like+1. but now the counter is increasing so we need to make isLike state to false
        setIsLiked(!isLiked);
    }

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                    <img className="postProfileImg" src={user.profilePicture || PF+"pictures/noAvator.png"} alt="" /> {/* if there is no profilepicture,or PF+"person/noA"  */}
                </Link>
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>   {/*before here was{post.like} {/* */}
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}</span>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Post
