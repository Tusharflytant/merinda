import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  author: string;
  articlenumber: number;
  pcontent:string[];
}

const Post2: React.FC<PostProps> = ({ pimg, pheading,  author, articlenumber, pcontent }) => {
  return (
    <div className="flex justify-center md:justify-around items-center sm:px-0 mt-8">
      <div className="bg-white  w-full md:w-auto max-w-md">

        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={pimg}
            alt="Post Image"
            title="Post"
            width={1200}
            height={1200}
            className="h-[300px] w-full object-cover"
          />
        </div>

        {/* Content Below Image */}
        <div className=" py-2 text-left">
          
          <h4 className="text-gray-900 text-lg sm:text-2xl mt-2 font-bold  line-clamp-2">
            {pheading}
          </h4>
          <p className="line-clamp-3 text-[14px] mt-1 tracking-wide text-gray-500">{pcontent}</p>
          <p className="text-[13px] text-emerald-700 mt-2 flex flex-wrap items-center gap-x-1">
        <span className="text-gray-600">By</span>
        <span className="font-semibold text-emerald-700">{author}</span>
        <span className="text-emerald-400">•</span>
        <span className="text-gray-600">
          <CreationDate articleNumber={articlenumber} />
        </span>
      </p>

        </div>

      </div>
    </div>
  );
};

export default Post2;
