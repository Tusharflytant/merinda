import allArticles from "@/constants/all";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Outbrain from "@/components/ads/outbrain";
import Post2 from "@/components/Post2";

// Format author name to URL-safe slug
const formatName = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

// Generate static paths for all authors
export async function generateStaticParams() {
  const uniqueAuthors = Array.from(
    new Set(allArticles.map((article) => formatName(article.authorName)))
  );

  return uniqueAuthors.map((authorName) => ({ authorName }));
}

export async function generateMetadata({ params }: { params: Promise<{ authorName: string }> }): Promise<Metadata> {
  const { authorName } = await params;

  const author = allArticles.find(
    (article) => formatName(article.authorName) === authorName
  );

  return {
    title: author ? `Articles by ${author.authorName}` : 'Author Not Found',
  };
}

const AuthorPage = async ({ params }: { params: Promise<{ authorName: string }> }) => {
  const { authorName } = await params;

  const authorArticles = allArticles.filter(
    (article) => formatName(article.authorName) === authorName
  );

  if (authorArticles.length === 0) {
    return (
      <div className="mt-20 text-center text-3xl font-bold text-gray-800">
        Author Not Found
      </div>
    );
  }

  const author = authorArticles[0];

  return (

    <>
    <div className="px-6 md:px-10  lg:px-16 xl:px-24 mt-10">
      {/* Author Info Section */}
       <div className="text-left mt-20 px-4 flex items-center gap-4">
        <Image
          src={`/authors/${author.authorName}.jpg`}
          alt={author.authorName}
          width={150}
          height={150}
          className="rounded-full w-20 h-20 object-cover"
        />
        <span className="inline-block text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-wider text-gray-900">
          {author.authorName}
        </span>
      </div>





      {/* Articles List */}

     <div className="grid mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4">
        {authorArticles.map((post, index) => (
          <Link key={index} href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
            <div className="bg-white">
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

      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain/>


    </div>
     

    </>
  );
};

export default AuthorPage;
