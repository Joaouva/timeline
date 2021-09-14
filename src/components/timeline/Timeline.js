import React, { useState, useEffect } from "react";
import Post from "../post/Post";
import ApiService from "../../util/api";


import "./Timeline.styles.scss";

function Timeline() {
  const { response, loading } = ApiService();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(9);
  const [firstElement, setFirstElement] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchId, setSearchId] = useState("");
  const [orderedList, setOrderedList] = useState("asc");
  const [dateOrder, setDateOrder] = useState("asc");

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response, data]);


  const nextPage = () => {
    setCount(count + 9);
    setFirstElement(firstElement + 9);
  };

  const prevPage = () => {
    setCount(count - 9);
    setFirstElement(firstElement - 9);
  };

  const sort = () => {
    if (orderedList === "asc") {
      setOrderedList("desc");
    } else {
      setOrderedList("asc");
    }
  };

  const sortByDate = () => {
    if (dateOrder === "asc") {
      setDateOrder("desc");
      console.log(dateOrder);
    } else {
      setDateOrder("asc");
      console.log(dateOrder);
    }
  }

  useEffect(() => {
    let orderedByDate = [...data];
    if (dateOrder === "asc") {
      orderedByDate.sort((a, b) =>
        a.date_of_post < b.date_of_post
          ? 1
          : b.date_of_post < a.date_of_post
            ? -1
            : 0
      );
      setFilteredPosts(orderedByDate);
    } else {
      orderedByDate.sort((a, b) =>
        a.date_of_post > b.date_of_post
          ? 1
          : b.date_of_post > a.date_of_post
            ? -1
            : 0
      );
      setFilteredPosts(orderedByDate);
    }
  }, [dateOrder, data]);

  useEffect(() => {
    if (search === "") {
      setFilteredPosts(data);
    } else {
      let visiblePosts = [...data].filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredPosts(visiblePosts);
    }
  }, [data, search]);

  useEffect(() => {
    if (searchId === "") {
      setFilteredPosts(data);
    } else {
      let visiblePosts = [...data].filter((post) => {
        let id = post.id.toString();
        console.log(searchId);
        return id.includes(searchId);
      });
      if (orderedList === "desc") {
        visiblePosts.reverse();
        setFilteredPosts(visiblePosts);
      } else {
        setFilteredPosts(visiblePosts);
      }
    }
  }, [data, searchId, orderedList]);

 return (
   <div className="post">
     <div className="post-header">
       <h1>Our posts</h1>
       <div className="search-bars">
         <input
           type="text"
           name="search"
           onChange={(event) => setSearch(event.target.value)}
           placeholder="Search title"
         />
         <input
           type="text"
           name="searchId"
           placeholder="Search by id"
           onChange={(event) => setSearchId(event.target.value)}
         />
         {orderedList === "asc" ? (
           <button className="order-btn" onClick={sort}>
             Desc↓
           </button>
         ) : (
           <button className="order-btn" onClick={sort}>
             Asc↑
           </button>
         )}
         <button onClick={sortByDate}>Order by date</button>
       </div>
     </div>

     {loading ? (
       <p>loading...</p>
     ) : (
       <div className="post-body">
         {filteredPosts.slice(firstElement, count).map((item, index) => {
           return (
            <Post key={index} post={item} />
           );
         })}
       </div>
     )}
     {count > 9 && count < data.length ? (
       <div className="pagination">
         <button onClick={prevPage}>Prev</button>
         <button className="next-button" onClick={nextPage}>
           Next
         </button>
       </div>
     ) : count < 10 && count < data.length ? (
       <div className="pagination">
         <button className="next-button" onClick={nextPage}>
           Next
         </button>
       </div>
     ) : (
       <div>
         <button onClick={prevPage}>Prev</button>
       </div>
     )}
   </div>
 );
}

export default Timeline;
