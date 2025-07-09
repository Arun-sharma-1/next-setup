"use client";
import Carousel from "@/component/Caurosel";
import { useEffect, useState } from "react";

const Blogpage = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<Record<string,any>[]>([]);
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=8"
      );
      const data = await response.json();
      console.log("data", data);
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <Carousel isLoading={loading} images={images} />;
};

export default Blogpage;
