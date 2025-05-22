import React from 'react';
import Image from 'next/image';
import CreationDate from './Date';

interface PostProps {
  pimg: string;
  pheading: string;
  author: string;
  section: string;
  articlenumber: number;
}

const Posts: React.FC<PostProps> = ({ pimg, pheading, section, author, articlenumber }) => {
  return (
    <div className="flex justify-center md:justify-around items-center sm:px-0 mt-8">
      <div className="bg-white rounded-md w-full md:w-auto">
        {/* Image with overlay */}
        <div className="relative overflow-hidden inline-block group">
          <Image
            src={pimg}
            alt="Post Image"
            title="Post"
            width={1200}
            height={1200}
            className="h-[400px] w-auto sm:h-[300px] md:h-[250px] xl:h-[450px] object-cover 
                     transition-transform duration-500 ease-in-out 
                     group-hover:scale-105 group-hover:brightness-110"
          />

          {/* Bottom Centered Overlay */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col 
          items-center text-center">
            <h5 className="bg-red-500 px-2 py-1 font-bold text-[12px] rounded capitalize">
              {section}
            </h5>
            <h4 className="text-white text-lg sm:text-xl mt-2 font-bold line-clamp-2">
              {pheading}
            </h4>
            <p className="text-gray-200 text-[11px] mt-4">
              By <span className="font-semibold text-white">{author}</span> · <CreationDate articleNumber={articlenumber} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
