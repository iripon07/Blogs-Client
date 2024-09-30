'use client'

import Image from "next/image"
import Cover from "../../assetss/images.jpeg"
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegThumbsDown } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";



interface IBlog {
  id:string, 
  title:string,
  author:string, 
  // cover:string,
  description:string 
  category:string 
  date:string,
  comments:number 
  likes:number 
  dislikes:number
}

const BlogCard = ({blog}:{blog:IBlog}) => {
  const { title, author,  description, category, date, comments, likes, dislikes } = blog



    // console.log(blog);
  return (
    <div style={{ border: "1px solid grey" }} className="rounded-lg p-6">
      <div>
        <Image
          className="w-full rounded-lg"
          src={Cover}
          alt={title}
          width={300}
          height={200}
        ></Image>
      </div>
      <h1 className="text-2xl font-bold text-sky-800">{title}</h1>
      {/* <p>`{description.length >= 50 ? ''}`</p> */}
      <p lang="text-gray-600 font-medium">
        {description.split(" ").slice(0, 30).join(" ")}
      </p>
      <div className="my-4 flex items-center justify-between text-lg text-sky-500">
        <h6>Author: {author}</h6>
        <h6>Date: {date}</h6>
      </div>
      <div style={{ border: "1px solid #9ca3af" }}></div>
      <div className="my-4">
        <a className="rounded-lg bg-gray-300 px-1 py-2" href="">
          {category}
        </a>
      </div>
      <div className="flex items-center justify-evenly text-sky-600">
        <div className="">
          <FaRegComment />
          {comments}
          {/* <h6>{comments}</h6> */}
        </div>
        <FaRegThumbsUp />
        <h6>{likes}</h6>
        <FaRegThumbsDown />
        <h6>{dislikes}</h6>
      </div>
    </div>
  );
}

export default BlogCard

//  "id": 20,
//       "title": "The Power of Positive Thinking",
//       "author": "Zoe Taylor",
//       "cover": "/images/positive-thinking.jpg",
//       "category": "Personal Development",
//       "description": "Positive thinking can change your life. Here's why you should embrace it.",
//       "date": "2024-09-20",
//       "comments": 13,
//       "likes": 165,
//       "dislikes": 6