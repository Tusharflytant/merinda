'use client';
import React, { useState } from 'react';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Outbrain from '@/components/ads/outbrain';
import Blogs2 from '@/components/Blogs2';
import CreationDate from './Date';

interface Post {
  title: string;
  imgUrl: string;
  contents: string[];
  category: string;
  readTime: string;
  authorName: string;
  articleNumber: number;
}

interface GenericPostPageProps {
  title: string;
  posts: Post[];
}

const GenericPostPage: React.FC<GenericPostPageProps> = ({ title, posts }) => {
  const [visibleCount, setVisibleCount] = useState(5); // Show 5 posts initially
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 5); // Load 5 more posts each time
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-7xl mt-10 lg:p-4 mx-auto">
      <div className="text-black">
        <Breadcrumb />
      </div>

      <div className="grid grid-cols-1 mt-10 lg:grid-cols-3 gap-6 w-full">
        {/* LEFT COLUMN - MOST RECENT */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl font-bold text-black mb-2">{title}</h2>
          <hr className="border-gray-300 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {posts.slice(0, visibleCount).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div>
                  <Blogs2
                    maincontent={post.title}
                    maindesc={post.contents[0]}
                    mainimg={`/articles/${post.imgUrl}`}
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
          <h2 className="text-2xl font-bold text-black uppercase mt-2 mb-2">Popular in {title}</h2>
          <hr className="border-gray-300 mb-4" />
          {posts.slice(7, 11).map((post, index) => (
            <Link
              key={index}
              href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
              passHref
            >
              <div className="mb-6 flex gap-4 mt-8 cursor-pointer hover:opacity-90">
                <div className="text-gray-400 font-bold text-lg min-w-[30px]">0{index + 1}</div>
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

      <aside className="max-w-7xl mt-2  0 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

      {/* Load More Button */}
      {visibleCount < posts.length && (
        <div className="flex justify-center mt-10">
          {isLoading ? (
            <div className="flex justify-center items-center space-x-2 h-20">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
            </div>
          ) : (
            <button
              onClick={loadMore}
              className="bg-emerald-600 text-white px-10 py-4 rounded-md hover:bg-emerald-700 hover:scale-105 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg hover:cursor-pointer tracking-wider"
            >
              Load More Posts
            </button>
          )}
        </div>
      )}

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      {/* Additional Outbrain Widgets */}
      <Outbrain />
    </div>
  );
};

export default GenericPostPage;
