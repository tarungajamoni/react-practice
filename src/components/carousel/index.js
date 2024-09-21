import React, { useEffect, useState } from "react";

const Carousel = () => {
  const [fetchData, setFetchdata] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    getImages();
  }, []);
  const getImages = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=5"
      );
      const data = await response.json();
      setFetchdata(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center flex-col">
      {fetchData.map((item, index) => {
        return (
          <>
            <img
              key={item.id}
              src={item.download_url}
              alt="img"
              className={
                currentSlide === index ? "h-[calc(100vh-10rem)]" : "hidden"
              }
            />
          </>
        );
      })}
      <div className="flex justify-between mx-5">
        <button
          className="border bg-slate-500 p-2"
          onClick={() => {
            setCurrentSlide(
              currentSlide === 0 ? fetchData.length - 1 : currentSlide - 1
            );
          }}>
          Prev
        </button>
        <button
          className="border bg-slate-500 p-2"
          onClick={() => {
            setCurrentSlide(
              currentSlide === fetchData.length - 1 ? 0 : currentSlide + 1
            );
          }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
