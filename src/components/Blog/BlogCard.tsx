import Image from 'next/image'
import React from 'react'


interface IBlog {
  id:string, 
  title:string,
  author:string, 
  cover:string,
  description:string 
  category:string 
  date:string,
  comments:number 
  likes:number 
  dislikes:number
}

const BlogCard = ({blog}):IBlog => {
  const {id, title, author, cover, description, category, date, comments, likes, dislikes } = blog
    // console.log(blog);
  return (
    <div>
      {/* <div>
        <Image src={cover} alt="" width={150} height={200}></Image>
      </div> */}
      <h1>{title}</h1>
      <p>`{description.length >= 50 ? ''}`</p>
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