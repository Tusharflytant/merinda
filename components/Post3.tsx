import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
 
  pcontent: string[];
  articleNumber: number;
  readtime: string;
  author: string;
}

const Posts: React.FC<PostProps> = ({
  pimg,
  pheading,
  
  author,
  readtime,
  articleNumber,
}) => {
  return (
    <div className="flex space-x-4 py-3 px-3">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-28 h-30 overflow-hidden rounded-md">
        <Image
          src={pimg}
          className="object-cover w-full h-full"
          width={1000}
          height={1000}
          alt="Post Image"
          title="Post"
        />
      </div>

      {/* Text content on the right */}
      <div className="flex flex-col justify-between">
        {/* Title */}
        <h4 className="text-[16px] font-semibold text-black leading-snug line-clamp-2">
          {pheading}
        </h4>

        {/* Author */}
        <span className="text-[13px] text-gray-700 mt-1">
          By <span className="font-semibold text-emerald-700">{author}</span>
        </span>

        {/* Date + Read time */}
        <p className="text-[12px] text-gray-500 mt-0.5">
          <CreationDate articleNumber={articleNumber} /> &middot; {readtime} 
        </p>
      </div>
    </div>
  );
};

export default Posts;
