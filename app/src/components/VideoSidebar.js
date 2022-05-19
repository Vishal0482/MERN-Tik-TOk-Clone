import React from 'react';
import { useState } from 'react';
import '../assets/CSS/VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, message, share }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ?
                    <FavoriteIcon style={{ color: 'red' }} onClick={e => setLiked(false)} /> :
                    <FavoriteBorderIcon onClick={e => setLiked(true)} />}
                <p>{liked ? (likes + 1) : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon />
                <p>{message}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon />
                <p>{share}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
