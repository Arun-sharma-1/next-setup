import React, { FC, useState } from "react";

interface props {
  images: Record<string, any>[];
  isLoading?: boolean;
  imageLimit?: number;
  imgPerSlide?: number;
}
const Carousel: FC<props> = ({
  images = [],
  isLoading = false,
  imageLimit = images.length - 1,
  // customPrevButton,
  // customNextButton,
  imgPerSlide = 1,
}) => {
  const skillNameArray = [
    "javascript.svg",
    "typescript.svg",
      "react.svg",
    // "nextjs.webp",
    // "redux.svg",
    // "html.svg",
    // "css.svg",
    // "tailwindcss.svg",
    // "antd.svg",
    // "mongodb.svg",
    // "mysql.svg",
    // "postgresql.svg",
    // "docker.svg",
    // "kubernetes.svg",
    // "aws.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextHandler = () => {
    setCurrentIndex((next) =>
      next === skillNameArray.length - 1 ? 0 : next + 1
    );
  };

  const prevHandler = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? skillNameArray.length - 1 : prev - 1
    );
  };

  return isLoading ? (
    "loading"
  ) : (
    <div className="carousel relative h-[40vh] w-[320px] overflow-hidden">
      <div
        className="image-container flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${skillNameArray.length * 320}px`,
          transform: `translateX(-${currentIndex * 320}px)`,
        }}
      >
        {skillNameArray?.map((img: string , index) => {
          return (
              <img
                key={index}
                src={`/skills/${img}`}
                className="w-[320px] h-full object-fill shrink-0"
              />
          );
        })}
      </div>
      <div className="button-container mt-10">
        <button className="btn next absolute top-6" onClick={nextHandler}>
          Next
        </button>
        <button className="btn prev" onClick={prevHandler}>
          Prev
        </button>
      </div>
    </div>
  );
};

export default Carousel;
