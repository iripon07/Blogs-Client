

import Image from "next/image";
import img1 from "../assetss/1.jpg"
import Blogs from "@/components/Blog/Blogs";
// import img2 from "../assetss/2.jpg"


export default function Home() {



  return (
   <div>
    <Image  src={img1} alt=""/>
    <Blogs/>
   </div>
  );
}
