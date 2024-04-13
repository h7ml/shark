import { VideoPlayer } from "@dext7r/ui";
import React from "react";

function App() {
  return (
    <div className="App">
      <VideoPlayer height="200px" showControls={true} src="https://www.w3schools.com/html/mov_bbb.mp4" autoPlay={true} />
    </div>
  );
}

export default App;
