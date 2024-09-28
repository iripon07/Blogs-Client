
import React from "react";

const Blogs = async () => {
  const res = await fetch(`http://localhost:8000/news`);
  const blogs = await res.json();
  console.log("Blogs from server", blogs);
  return (
    <div>
      <h1>blogs: {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
