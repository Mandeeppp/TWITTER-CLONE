import React, { useState } from "react"
import './TweetBox.css'
import PersonIcon from '@mui/icons-material/Person';
import db from "./firebase";

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
     const sendTweet=e=>{
        e.preventDefault();


        db.collection("posts").add({
            displayName: "Rafeh",
            username:"cleverqazi",
            verified: true,
            text : tweetMessage,
            image: tweetImage,
            // avatar:xyz;
           



        });
        setTweetMessage("");
        
        setTweetImage("");



     }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <PersonIcon src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}


                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />


                </div>
                <input
                value={tweetImage}
                onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text"
                />
                <button onClick={sendTweet} type="submitt" className="tweetBox__tweetButton">Tweet</button>



            </form>
        </div>
    );
}

