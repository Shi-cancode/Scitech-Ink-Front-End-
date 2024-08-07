import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Navigation from '../../components/Navigation'; 
import Footer from '../../components/Footer'; 

export default function Artworks() {
  const [artworks, setArtworks] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks');
        const allArtworks = response.data;
        setArtworks(allArtworks.filter(art => !art.isBestSeller));
        setBestSellers(allArtworks.filter(art => art.isBestSeller));
      } catch (error) {
        console.error('Error fetching artworks:', error);
      }
    };

    fetchArtworks();
  }, []);

  const ArtworkGrid = ({ items }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {items.map((artwork) => (
        <div key={artwork._id} className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="w-full h-80 overflow-hidden">
            <img
              src={`http://localhost:5000/${artwork.imagePath}`}
              alt={artwork.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-semibold text-xl mb-2 text-gray-700">{artwork.name}</h3>
            <p className="text-gray-700 font-bold">${artwork.price}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Artworks Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Artworks Gallery</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">On-Hand Art Pieces</h2>
          <ArtworkGrid items={artworks} />
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Best-Selling Artworks</h2>
          <ArtworkGrid items={bestSellers} />
        </section>

        <button className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
          Contact Us
        </button>
      </main>

      <Footer />
    </div>
  );
}