import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function AdminDashboard() {
  const [tales, setTales] = useState([]);
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetchTales();
    fetchArtworks();
  }, []);

  const fetchTales = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tales');
      setTales(response.data);
    } catch (error) {
      console.error('Error fetching tales:', error);
    }
  };

  const fetchArtworks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const deleteTale = async (id) => {
    if (window.confirm('Are you sure you want to delete this tale?')) {
      try {
        await axios.delete(`http://localhost:5000/api/tales/${id}`);
        fetchTales();
      } catch (error) {
        console.error('Error deleting tale:', error);
      }
    }
  };

  const deleteArtwork = async (id) => {
    if (window.confirm('Are you sure you want to delete this artwork?')) {
      try {
        await axios.delete(`http://localhost:5000/api/artworks/${id}`);
        fetchArtworks();
      } catch (error) {
        console.error('Error deleting artwork:', error);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-8">
        <Link href="/admin/add-tale" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Add New Tale
        </Link>
        <Link href="/admin/add-artwork" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add New Artwork
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">All Tales</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Featured
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tales.map((tale) => (
              <tr key={tale._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {tale.title}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {tale.author}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {tale.isFeatured ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <Link href={`/admin/edit-tale/${tale._id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTale(tale._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">All Artworks</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Best Seller
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {artworks.map((artwork) => (
              <tr key={artwork._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {artwork.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  ${artwork.price}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  {artwork.isBestSeller ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <Link href={`/admin/edit-artwork/${artwork._id}`} className="text-blue-600 hover:text-blue-900 mr-4">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteArtwork(artwork._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}