
import Image from 'next/image';

export default function RelatedTale({ title, imageSrc, author }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative w-full h-48 mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black hover:text-gray-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-2">{author}</p>
      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-auto">Read More</a>
    </div>
  );
}