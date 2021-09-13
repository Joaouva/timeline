import React from "react";

import './Timeline.styles.scss'


function Timeline(props) {

    const data = props.data;
    const loading = props.loading;
    
    return (
      <div className="timeline">
        <div className="timeline-header">
          <h1>Our posts</h1>
          <form>
            <input type="text" placeholder="Search title" />
            <input type="text" placeholder="Search by id (asc)" />
          </form>
            </div>
            
            {loading ? (
                <p>loading...</p>
            ) : (
                <div className="timeline-body">
                    {data.map((item, index) => {
                        return (
                            <div className="timeline-item" key={index}>
                                <h2>{item.title}</h2>
                                <h2> id: {item.id}</h2>
                                <p>{item.body}</p>
                            </div>
                        );
                    })}
                </div>
            )}
      </div>
    );
}

export default Timeline;