import React, { useState, useEffect } from "react";
import './Feed.css'
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase";
import FlipMove from "react-flip-move";
// import PersonIcon from '@mui/icons-material/Person';


export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
            <FlipMove>

                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        PersonIcon={post.PersonIcon}
                        image={post.image}



                    />
                ))}
            </FlipMove>






        </div>
    )
}
