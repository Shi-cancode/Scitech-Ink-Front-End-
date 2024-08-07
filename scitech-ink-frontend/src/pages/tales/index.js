import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FeaturedTale from '../../components/FeaturedTale';
import RelatedTale from '../../components/RelatedTale';

export default function TalesPage() {
  const [tales, setTales] = useState([]);
  const [featuredTale, setFeaturedTale] = useState(null);

  useEffect(() => {
    fetchTales();
  }, []);

  const fetchTales = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/tales`);
      const allTales = response.data;
      setFeaturedTale(allTales.find(tale => tale.isFeatured));
      setTales(allTales.filter(tale => !tale.isFeatured));
    } catch (error) {
      console.error('Error fetching tales:', error);
    }
  };

  const handleReadMore = (taleId) => {
    console.log(`Read more clicked for tale with ID: ${taleId}`);
    // Implement navigation logic here
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Head>
        <title>Tales - SciTech Ink</title>
        <meta name="description" content="Explore fascinating tales from SciTech Ink" />
      </Head>

      <Navigation />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-black">Tales</h1>
        <p className="text-xl mb-8 text-gray-600">Explore fascinating stories from SciTech Ink</p>

        {featuredTale && (
          <FeaturedTale
            title={featuredTale.title}
            author={featuredTale.author}
            date={new Date(featuredTale.date).toLocaleDateString()}
            imageSrc={`http://localhost:5000/${featuredTale.imagePath}`}
            content={featuredTale.content}
            relatedArticles={tales.slice(0, 4).map(tale => ({
              id: tale._id,
              title: tale.title,
              imageSrc: `http://localhost:5000/${tale.imagePath}`
            }))}
          />
        )}

        <h2 className="text-3xl font-bold my-12 text-black">More Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tales.map(tale => (
            <div key={tale._id} onClick={() => handleReadMore(tale._id)}>
              <RelatedTale
                title={tale.title}
                imageSrc={`http://localhost:5000/${tale.imagePath}`}
                author={tale.author}
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}