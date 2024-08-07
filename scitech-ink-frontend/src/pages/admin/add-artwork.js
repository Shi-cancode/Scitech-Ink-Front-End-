import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddArtwork() {
  const router = useRouter();
  const [artwork, setArtwork] = useState({
    name: '',
    price: '',
    isBestSeller: false
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setArtwork(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', artwork.name);
    formData.append('price', artwork.price);
    formData.append('isBestSeller', artwork.isBestSeller);
    formData.append('image', image);

    try {
      await axios.post('http://localhost:5000/api/artworks', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      router.push('/admin/dashboard');
    } catch (error) {
      console.error('Error adding artwork:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Artwork</h1>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={artwork.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold mb-2">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={artwork.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-bold mb-2">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isBestSeller"
              checked={artwork.isBestSeller}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm font-bold">Best Seller</span>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Artwork
        </button>
      </form>
    </div>
  );
}