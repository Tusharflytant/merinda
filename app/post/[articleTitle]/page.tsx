// All your imports remain the same
import Image from "next/image";

import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from '@/components/Breadcrumb';
import Newsletter from "@/components/Newsletter";
import React from "react";
import Outbrain from "@/components/ads/outbrain";



function getRandomArticles(articles: TArticle[], count: number) {
  const shuffled = [...articles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const randomArticles = getRandomArticles(allArticles, 4);

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

// Metadata generation function, synchronously
export async function generateMetadata({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );
 
  if (!article) {
    return {
      title: "Article Not Found",
      description: "No article found for the given title",
    };
  }
 
  const description = article.contents.at(-1) || "";
 
  return {
    title: article.title,
    description,
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
      images: [`/article/${article.imgUrl}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  let headingCount = 0;


 

  return (
    <div className="bg-white max-w-7xl mx-auto mt-10">
      <div className="mt-10 flex flex-col lg:flex-row gap-10 px-6 md:px-10 lg:px-16 xl:px-24">
        {/* Main Article Section */}
        <div className="flex-1 mt-10">
          <div className="max-w-7xl text-black mb-4">
            <Breadcrumb />
          </div>


         

          

     <div className="w-full mt-8">
  <div className="w-full ">

    
    {/* Content */}
    <div className="px-6 py-8 text-center">
      <h5 className="uppercase text-gray-500 text-xs font-semibold tracking-wider mb-1">
        {article.category}
      </h5>
      <h4 className="text-gray-900 text-2xl sm:text-4xl mt-4 font-bold line-clamp-2">
        {article.title}
      </h4>
      <p className="line-clamp-2 text-[14px] mt-3 tracking-wide text-gray-600 max-w-4xl mx-auto">
        {article.contents[3]}
      </p>
       <p className="text-[13px] text-emerald-700 mt-2 justify-center flex flex-wrap items-center gap-x-1">
        <span className="text-gray-600">By</span>
        <span className="font-semibold text-emerald-700">{article.authorName}</span>
        <span className="text-emerald-400">•</span>
        <span className="text-gray-600">
          <CreationDate articleNumber={article.articleNumber} />
        </span>
      </p>
    </div>
  
    {/* Image */}
    <div className="relative overflow-hidden">
      <Image
        src={`/articles/${article.imgUrl}`}
        alt="Post Image"
        title="Post"
        width={1920}
        height={1080}
        className="h-[600px] w-full object-cover"
      />
    </div>

    
   

  </div>
</div>


       


      

          

          
          <div className="flex flex-col mt-10 xl:flex-row">
          <div className="text-black/85 tracking-normal  font-light mt-6 text-lg  leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>

                     {index === 2  &&(
                             <aside className="max-w-7xl mt-10 mx-auto">
       <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
      <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
                  )}



            {headingCount === 3 && isHeading && (
  <div className="mt-16 mb-14 rounded-2xl  p-4 ">
   
    <div className="space-y-4">
      {allArticles
        .filter(
          (post) =>
            post.section === article.section && post.title !== article.title
        )
        .slice(0, 4)
        .map((item, idx) => (
          <Link
            key={idx}
            href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
            className="block rounded-lg bg-white p-4 hover:bg-gray-100 transition shadow-sm"
          >
            <p className="text-lg font-medium text-gray-800 hover:text-emerald-600 transition">
              {item.title}
            </p>
          </Link>
        ))}
    </div>
  </div>
)}


                  {headingCount === 4 && isHeading && (
                    <div className="mt-12 mb-10 p-5 rounded-xl bg-emerald-50 ">
                      <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                        💡 Discover More from {article.section}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {allArticles
                          .filter((post) => post.section === article.section && post.title !== article.title)
                          .slice(4, 5)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={`/post/${item.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                              className="flex items-center gap-4 w-full hover:bg-emerald-100 transition rounded-lg p-2"
                            >
                              <Image
                                src={`/articles/${item.imgUrl}`}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                              />
                              <div className="text-left">
                                <p className="text-sm uppercase text-emerald-600 font-medium mb-1">
                                  {item.section}
                                </p>
                                <p className="text-base text-gray-800 font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
               

            

                  {/\.(webp)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full rounded-lg"
                    />
                  ) : isHeading ? (
                    <strong className="block font-bold text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div>
              <aside className="max-w-7xl lg:ml-10  mt-10 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="SB_1"></div>
        <h2 className="text-2xl font-bold text-black mb-2">Explore More</h2>
        <hr className="border-gray-300 mb-2" />
          
          <div className="grid grid-cols-1 ">
            {randomArticles.map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div className="mb-2 flex gap-4 mt-8 cursor-pointer hover:opacity-90">
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

      </aside>
          </div>
         
          </div>
        </div>

       

        
      </div>



    
      <Newsletter/>

        <aside className="max-w-7xl mt-30 mx-auto">
       <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
      <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>
      

         <section className="max-w-7xl mx-auto mt-20 bg-gray-50 border border-emerald-100 rounded-2xl shadow-lg overflow-hidden px-6
          sm:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Author Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={`/authors/${article.authorName}.jpg`}
            alt={article.authorName}
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-emerald-200 shadow-lg"
          />
        </div>

        {/* Author Content */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
              Author
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
              {article.authorName}
            </h2>
            <p className="text-emerald-600 text-sm font-medium mt-1">
              Senior Contributor
            </p>
          </div>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            {`${article.authorName} is passionate about impactful storytelling. With a unique voice and deep insights, they turn everyday stories into compelling reads that resonate and inform.`}
          </p>

          <Link
            href={`/authors/${article.authorName.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}
            className="inline-flex items-center text-emerald-600 font-semibold hover:underline transition"
          >
            Read Full Bio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>


    
     


      

            <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain/>

    </div>
  );
};

export default PostPage;
