
import Image from 'next/image';

export default function FeaturedTale({ title, author, date, imageSrc, content, relatedArticles }) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-black">{title}</h2>
      <p className="text-gray-600 mb-2">{author} • {date}</p>
      <div className="relative w-full h-96 mb-6">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="prose max-w-none mb-6 text-gray-700">
        <p>{content}</p>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-black">Related Stories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedArticles.map((article, index) => (
          <div key={index} className="cursor-pointer group">
            <div className="relative w-full h-40 mb-2">
              <Image src={article.imageSrc} alt={article.title} layout="fill" objectFit="cover" className="rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
            </div>
            <p className="text-sm font-semibold text-black group-hover:text-gray-600 transition-colors duration-300">
              {article.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}