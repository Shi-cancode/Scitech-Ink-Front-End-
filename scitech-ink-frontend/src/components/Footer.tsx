import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4  text-black">SciTech Ink</h2>
            <p className="text-gray-600 mb-6">
              Our aim is to empower local artists and future aviators through technology and storytelling
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.png" alt="LinkedIn" width={44} height={44} />
              </Link>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram" width={44} height={44} />
              </Link>
            </div>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">More From Us</h3>
            <ul className="space-y-2">
              <li><Link href="/articles" className="text-gray-600 hover:text-gray-900">Our Articles</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/workshops" className="text-gray-600 hover:text-gray-900">Workshops and Webinars</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">LIVE EXHIBITIONS</h3>
            <ul className="space-y-2">
              <li><Link href="/purchase" className="text-gray-600 hover:text-gray-900">Purchase Pieces</Link></li>
              <li><Link href="/stories" className="text-gray-600 hover:text-gray-900">Stories of Artists</Link></li>
              <li><Link href="/aviation" className="text-gray-600 hover:text-gray-900">Aspiring Aviation</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}