
import React from "react";
import BlogCard from "./BlogCard";


interface IBlog {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: string;
  date: string;
  comments: number;
  likes: number;
  dislikes: number;
}

const Blogs = async () => {
  const res = await fetch(`http://localhost:8000/blogs`);
  const blogs = await res.json();
//   console.log("Blogs from server", blogs);
  return (
    <div>
      <h1>blogs: {blogs.length}</h1>
      <div className="grid grid-cols-2 gap-6">
        {
            blogs.map( (blog:IBlog) => <BlogCard blog={blog} key={blog.id}></BlogCard>)
        }
      </div>
    </div>
  );
};

export default Blogs;
