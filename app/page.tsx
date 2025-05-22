"use client";
import React from "react";
import CreationDate from "@/components/Date";
import Image from "next/image";
import usNews from "@/constants/consumerprotection";
import Link from "next/link";
import Post2 from "@/components/Post2";
import Outbrain from "@/components/ads/outbrain";
import allArticles from "@/constants/all";
import Blogs from "@/components/Blogs"
import Blogs2 from "@/components/Blogs2"
import medicalclaims from "@/constants/medicalclaims";
import Post3 from "@/components/Post3";




function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomArticles = getRandomArticles(allArticles, 8);
const randomArticles4 = getRandomArticles(allArticles, 4);
const randomArticles1 = getRandomArticles(allArticles, 1);


const page = () => {
  return (

    <>


   

<div className="max-w-7xl mx-auto mt-10 px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Column 1 - Editors' Choice */}
    <div>
      <h2 className="text-2xl text-black font-bold mb-2">Editors Pick</h2>
      <hr className="border-gray-300 mb-4" />
      {usNews.slice(0, 1).map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <div>
            <Post2
              pimg={`/articles/${post.imgUrl}`}
              pheading={post.title}
              pcontent={post.contents}
              articlenumber={post.articleNumber}
              author={post.authorName}
              
            />
          </div>
        </Link>
      ))}
    </div>

    {/* Column 2 - Editors' Choice */}
    <div>
      <h2 className="text-2xl text-black font-bold mb-2 invisible md:visible">Dont Miss</h2>
      <hr className="border-gray-300 mb-4 invisible md:visible" />
      {usNews.slice(1, 4).map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <div>
              <Post3
                    pimg={`articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    articleNumber={post.articleNumber}
                   
                    author = {post.authorName}
                    readtime = {post.readTime}
                  />
          </div>
        </Link>
      ))}
    </div>

    {/* Column 3 - Trending Now */}
   <div className=" px-4 lg:px-0 ">
  <h2 className="text-2xl font-bold text-black mb-2">Trending Now</h2>
  <hr className="border-gray-300 mb-4" />
  {usNews.slice(4, 8).map((post, index) => (
    <Link
      key={index}
      href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
      passHref
    >
      <div className="mb-6 flex gap-4 cursor-pointer hover:opacity-90">
        {/* Number on left */}
        <div className="text-gray-400 font-bold text-lg min-w-[30px]">
          0{index + 1}
        </div>

        {/* Content on right */}
        <div>
          <h3 className="text-lg text-black mb-2 font-semibold hover:text-emerald-600">
            {post.title}
          </h3>
          <span className="text-[13px] text-gray-700 ">
          By <span className="font-semibold text-emerald-700">{post.authorName}</span>
        </span>
          <div className="text-sm text-gray-500"><CreationDate articleNumber={post.articleNumber} /> &middot; {post.readTime}</div>
        </div>
      </div>
    </Link>
  ))}
</div>



  </div>
   {/* Bottom Separator */}
  <hr className="border-t border-gray-300 my-18" />

  <aside className="max-w-7xl  mx-auto">
         <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
         <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
       </aside> 

{/* Bottom Separator */}
  <hr className="border-t border-gray-300 my-18" />

<div className="bg-gray-100 py-6">
  <div className="max-w-7xl mx-auto px-4 space-y-8">
    {randomArticles1.map((item, index) => (
      <Link
        key={index}
        href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center cursor-pointer  p-4 rounded-md transition">
          {/* LEFT: Text Content */}
          <div className="py-2 text-left">
            <h4 className="text-gray-900 text-lg sm:text-2xl mt-2 font-bold line-clamp-2">
              {item.title}
            </h4>
            <p className="line-clamp-3 text-[14px] mt-1 tracking-wide text-gray-500">
              {item.contents[0]}
            </p>
            <p className="text-[13px] text-emerald-700 mt-2 flex flex-wrap items-center gap-x-1">
              <span className="text-gray-600">By</span>
              <span className="font-semibold text-emerald-700">{item.authorName}</span>
              <span className="text-emerald-400">•</span>
              <span className="text-gray-600">
                <CreationDate articleNumber={item.articleNumber} />
              </span>
            </p>
          </div>

          {/* RIGHT: Image */}
          <div>
            <Image
              src={`/articles/${item.imgUrl}`}
              alt={item.title}
              height={1000}
              width={1000}
              className="w-full h-full max-h-[350px] object-cover "
            />
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

{/* Bottom Separator */}
  <hr className="border-t border-gray-300 my-18" />


  <div className="flex items-center   mb-6">
    
    <h2 className=" text-lg text-left md:text-3xl font-semibold text-black capitalize">
      Today’s Highlights
    </h2>
  
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 w-full gap-4">
    {medicalclaims.slice(0, 4).map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div>
          <Blogs
            maincontent={post.title}
            maindesc={post.contents[0]}
            mainimg={`articles/${post.imgUrl}`}
            author={post.authorName}
            days={post.articleNumber}
            maintitle={post.category}
            readtime={post.readTime}
          />
        </div>
      </Link>
    ))}
  </div>


{/* Bottom Separator */}
  <hr className="border-t border-gray-300 my-18" />

   <aside className="max-w-7xl  mx-auto">
         <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
         <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
       </aside>



  {/* Bottom Separator */}
  <hr className="border-t border-gray-300 my-18" />

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
  {/* LEFT COLUMN - MOST RECENT (takes 2/3 width on large screens) */}
  <div className="lg:col-span-2">
    <h2 className="text-2xl font-bold text-black mb-2">Most Recent</h2>
    <hr className="border-gray-300 mb-4" />
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {randomArticles.map((post, index) => (
        <Link
          key={index}
          href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
          passHref
        >
          <div>
            <Blogs2
              maincontent={post.title}
              maindesc={post.contents[0]}
              mainimg={`articles/${post.imgUrl}`}
              author={post.authorName}
              days={post.articleNumber}
              maintitle={post.category}
              readtime={post.readTime}
            />
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* RIGHT COLUMN - NOW POPULAR */}
  <div>
    <div className="OUTBRAIN outbrain-desktop" data-widget-id="SB_1"></div>
    <h2 className="text-2xl font-bold text-black mb-2">Now Popular</h2>
    <hr className="border-gray-300 mb-4" />
    {randomArticles4.map((post, index) => (
      <Link
        key={index}
        href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
        passHref
      >
        <div className="mb-6 flex gap-4 mt-8 cursor-pointer hover:opacity-90">
          {/* Number */}
          <div className="text-gray-400 font-bold text-lg min-w-[30px]">
            0{index + 1}
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg text-black mb-2 font-semibold hover:text-emerald-600">
              {post.title}
            </h3>
            <span className="text-[13px] text-gray-700">
              By <span className="font-semibold text-emerald-700">{post.authorName}</span>
            </span>
            <div className="text-sm text-gray-500">
              <CreationDate articleNumber={post.articleNumber} /> &middot; {post.readTime}
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>  
</div>

 <aside className="max-w-7xl mt-30 mx-auto">
         <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
         <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
       </aside> 

          <Outbrain/> 





    </>



















































     





  


























































  );
};

export default page;
