import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  pcontent: string[];
  section: string;
  articleNumber: number;
  readtime:string;
}

const Post2c: React.FC<PostProps> = ({ pimg, pheading, articleNumber, section , readtime }) => {
  return (
    <div className="w-full ">
      <div className=" rounded-lg  p-4 sm:p-4">
        <Image
          src={pimg}
          className="rounded-lg h-[250px] sm:h-[220px] md:h-[200px] w-full object-cover mb-3"
          width={1000}
          height={1000}
          alt="Post Image"
          title="Post"
        />

        {/* Category */}
        <h5 className="text-gray-400 ml-6 font-bold capitalize mt-6 text-sm mb-2">
           {section}
        </h5>

        {/* Title */}
        <h4 className="text-lg sm:text-xl ml-6 font-bold text-white leading-snug hover:underline line-clamp-2 mb-2">
          {pheading}
        </h4>

        {/* Date and Read Time */}
        <div className="text-sm ml-6  text-gray-400">
          <CreationDate articleNumber={articleNumber} /> <span className='ml-2'> / {readtime} </span>  
        </div>
      </div>
    </div>
  );
};

export default Post2c;
