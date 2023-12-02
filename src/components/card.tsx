"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
  };
  description: string | null;
}

const Card: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get<Photo[]>(
          `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&per_page=10`
        );

        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);
  return (
    <div className="card-container">
      {photos.map((photo) => (
        <div key={photo.id} className="card">
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || 'Unsplash Photo'}
            className="card-image"
            width={100}
            height={100}
          />
          <div className="card-details">
            <h2 className="card-title">{photo.user.name}</h2>
            <p className="card-description">{photo.description || 'No description available'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
