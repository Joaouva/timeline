import React, { useState } from "react";


function CustomModal(props) {
  const { showMessage, setShowMessage } = useState(false);
  const {
    post,
    body,
    setBody,
    title,
    setTitle,
    updateItem,
    closeModal,
    error,
    setIsOpen,
  } = props;
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }


  return (
    <div>
      <form onSubmit={updateItem}>
        <input placeholder={post.id} />
        <input
          type="text"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="body"
          onChange={(event) => setBody(event.target.value)}
        />
        <button type="submit" disabled={!title + !body}>
          Submit
        </button>
        {error ? <div>{error}</div> : null}
      </form>
    </div>
  );
}

export default CustomModal;
