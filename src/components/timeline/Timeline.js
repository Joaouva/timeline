import React, {useState} from "react";

import './Timeline.styles.scss'


function Timeline(props) {
    const [count, setCount] = useState(9);
    const [firstElement, setFirstElement] = useState(0);

    const data = props.data;
    const loading = props.loading;


    const nextPage = () => {
        setCount(count + 9)
        setFirstElement(firstElement + 9)
    }

    const prevPage = () => {
        setCount(count - 9)
        setFirstElement(firstElement - 9);
    }
    
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
            {data.slice(firstElement, count).map((item, index) => {
              return (
                <div className="timeline-item" key={index}>
                  <h2 className="data-title">{item.title}</h2>
                  <h3> id: {item.id}</h3>
                  <p className="data-description">{item.body}</p>
                </div>
              );
            })}
          </div>
        )}
        {count > 9 ? (
          <div>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
          </div>
        ) : (
          <button onClick={nextPage}>Next</button>
        )}
      </div>
    );
}

export default Timeline;