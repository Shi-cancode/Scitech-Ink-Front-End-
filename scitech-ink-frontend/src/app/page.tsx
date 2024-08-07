import Header from '../components/Header';
import Navigation from '../components/Navigation';
import TaleCard from '../components/TaleCard';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
  <Header />
  <Navigation />
  
  <main className="container mx-auto px-4 py-12 flex-grow">
    <section className="mb-16">
      <h1 className="text-5xl font-bold mb-12 text-center text-black relative">
        TALES
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400"></span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-2">
          <TaleCard
            title="Tales of The Unborn King"
            imageSrc="/unborn.jpg"
            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        
        <TaleCard 
          title="The Warrior" 
          imageSrc="/warrior.jpg" 
          className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
        <TaleCard 
          title="The King Slayer" 
          imageSrc="/king.jpg" 
          className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
        <TaleCard 
          title="The Bride" 
          imageSrc="/bride.jpg" 
          className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
        <TaleCard 
          title="The woman" 
          imageSrc="/art6.jpg" 
          className="w-full h-64 object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  

        <section className="about-us py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About SciTech Ink</h1>
      <p className="text-xl text-gray-600">Empowering Rwanda's Youth Through Art, Science, and Technology</p>
    </header>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          SciTech Ink is on a mission to empower Rwanda's youth in the arts and sciences through innovative storytelling and cutting-edge technology. We recognize the challenges artists face in gaining recognition, and we're here to change that narrative.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our platform serves as a bridge, connecting talented individuals with global audiences, showcasing their daily encounters, achievements, and aspirations.
        </p>
        <div className="flex items-center space-x-4 mt-8">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Ink</span>
          </div>
          <p className="text-gray-700">Representing the compelling narratives and articles we publish</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Sci</span>
          </div>
          <p className="text-gray-700">Our focus on science, starting with aviation and aerospace exploration</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Tech</span>
          </div>
          <p className="text-gray-700">Our innovative platform showcasing artworks, stories, and more</p>
        </div>
      </div>
      <div className="relative">
        <img 
          src="/about.jpg" 
          alt="SciTech Ink Empowering Youth" 
          className="rounded-lg shadow-xl"
        />
        <div className="absolute bottom-4 left-4 bg-white bg-opacity-75 p-2 rounded">
          <p className="text-sm text-gray-600">Empowering Rwanda's future through creativity and innovation</p>
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Impact</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Storytelling</h3>
          <p className="text-gray-600">Amplifying the voices of Rwanda's talented artists and creators</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Aviation Guidance</h3>
          <p className="text-gray-600">Providing comprehensive resources for aspiring aviators</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Platform</h3>
          <p className="text-gray-600">Showcasing talent through our innovative digital platform</p>
        </div>
         </div>
         </div>
        </div>
       </section>
      </main>
      
      <Footer />
    </div>
  );
}