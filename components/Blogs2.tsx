"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CreationDate from './Date';

const Blogs2 = ({
  mainimg,
  maintitle,
  maincontent,
  maindesc,
  author,
  days,
  readtime,
}: {
  mainimg: string;
  maintitle: string;
  maincontent: string;
  maindesc: string;
  author: string;
  days: number;
  readtime: string;
}) => {
  return (
    <div>
      <section className='text-gray-600 mt-4 body-font overflow-hidden'>
        <div className="py-2">
          <div className='flex flex-col lg:flex-row gap-6 items-stretch'>

            

            <div className='flex-1 flex flex-col justify-between'>

              {/* Category */}
              <h5 className="uppercase text-gray-500 text-xs font-semibold tracking-wider mb-1">
                {maintitle}
              </h5>

              {/* Title */}
              <h1 className='text-gray-900 text-xl md:text-2xl font-bold hover:text-emerald-600 line-clamp-2'>
                {maincontent}
              </h1>

              {/* Description */}
              <p className='text-sm text-gray-600 mt-3 line-clamp-2'>
                {maindesc}
              </p>

              {/* Author */}
              <div className='flex items-center text-[14px] gap-2 mt-4'>
                <Image 
                  src={`/authors/${author}.jpg`} 
                  alt="author" 
                  width={32} 
                  height={32} 
                  className="rounded-full object-cover size-8"
                />
                
                  <span className="text-gray-600">By</span>
                  <span className="font-semibold text-emerald-700 ml-1">{author}</span>
               
              </div>

              {/* Date and Read Time */}
              <div className='flex items-center text-[13px] gap-2 mt-3  text-gray-500'>
                <p><CreationDate articleNumber={days} /></p>
                <span className="text-gray-400">•</span>
                <p>{readtime}</p>
              </div>

            </div>


            <div className="w-full lg:w-[230px]">
              <Image 
                alt='blog image' 
                className='object-cover w-full h-full max-h-[300px] '
                width={250}
                height={300}
                src={mainimg}
              />
            </div>

            
            

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs2;
