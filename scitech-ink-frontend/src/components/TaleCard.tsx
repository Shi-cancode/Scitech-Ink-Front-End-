import Image from 'next/image';

interface TaleCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

export default function TaleCard({ title, imageSrc, className = '' }: TaleCardProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-full aspect-square relative mb-3 overflow-hidden group">
        <Image 
          src={imageSrc} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-center text-gray-800 font-medium">{title}</h3>
    </div>
  );
}