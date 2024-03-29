"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import SeeMore from "@/lib/trunc"

interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
    location: string;
  };
  description: string | null;
}

const CardComponent: React.FC = (aspectRatio = "portrait") => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data } = await axios.get<Photo[]>(
          `https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&per_page=12&query=office`
        );
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchPhotos();
  }, []);
 console.log(photos) 
  return (
    <div className="card-container flex flex-wrap pl-10 pr-10">
      {photos.map((photo) => (
        <Card key={photo.id} className="card xl:w-1/4 md:w-1/2 p-4">
          <CardHeader>
            <CardTitle>{photo.user.name}</CardTitle>
            <CardDescription><SeeMore text={photo.description ?? ''} limit={100} /></CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={photo.urls.regular}
              className={cn(
                "card-image h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
              alt={photo.alt_description || 'Unsplash Photo'}
              priority
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
            />
          </CardContent>
          <CardFooter>
            <p>{photo.user.location}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardComponent;
