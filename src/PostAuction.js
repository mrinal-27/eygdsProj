import React from "react";

const PostAuction = () => {
  return (
    <div className="container">
      <h2>Post Auction</h2>
      <form>
        <img src="" alt="product"></img>
        <input type="text" placeholder="Auction Title" required />
        <input type="text" placeholder="Description" required />
        <input type="number" placeholder="Starting Price" required />
        <button type="submit">Post Auction</button>
      </form>
    </div>
  );
};

export default PostAuction;
