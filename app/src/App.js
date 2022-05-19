import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import videoUrl from './test.mp4';
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({ url, channe, description, song, likes, message, share }) => (
          <Video url={url}
            channe={channel}
            description={description}
            song={song}
            likes={likes}
            message={message}
            share={share}
          />
        ))}
      </div>
    </div>

  );
}

export default App;
