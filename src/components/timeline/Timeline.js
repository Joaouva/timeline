import React from "react";
import Post from "../post/Post";

import './Timeline.styles.scss'


function Timeline(props) {
    
    return (
      <div className="timeline">
            <Post {...props}/>
      </div>
    );
}

export default Timeline;