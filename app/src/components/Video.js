import React, { useRef } from 'react'
import { useState } from 'react';
import '../assets/CSS/Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, likes, message, share, channel, description, song }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video__player"
                ref={videoRef}
                src={url}
            >
            </video>
            <VideoSidebar likes={likes} message={message} share={share} />
            <VideoFooter channel={channel} description={description} song={song} />
        </div>
    )
}

export default Video;
