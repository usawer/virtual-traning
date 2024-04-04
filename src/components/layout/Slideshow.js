"use client"
import React from "react";


export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const images = [["/slidehatter5.png"], ["/slidehatter4.jpg"], ["/slidehatter3.jpg"], ["/slidehatter2.jpg"], ["/slidehatter1.png"]];
  const quotes = [["„A siker létráját nem lehet zsebre tett kézzel megmászni.”"],["„Ami ma fáj, az tesz erősebbé holnap.”"],["„Az edzés nem csak a testedet formálja hanem a lelkedet is.”"],["„Ahhoz, hogy vezesd a zenekart, először hátat kell fordítanod a tömegnek.”"],["Az edzés fájdalmas, de a fájdalom ideiglenes, a siker viszont örökkévaló."]];
  const author = [["- Arnold Schwarzenegger"],["- Jay Cutler"],["- Arnold Schwarzenegger"],["- Mike Mentzer"],["- Muhhamad Ali"]];
  const delay = 4000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((image, idx) => (
          <div className="slide" key={idx} style={{ backgroundImage: `url(${image})` }}>
            <div className="flex flex-row h-full mx-25">
              <div className="flex flex-col m-auto">
                <div className="quote m-auto font-bold text-3xl" key={idx}><p>{quotes[idx]}</p></div>
                <div className="author m-auto text-xl" key={idx}><p className="float-right">{author[idx]}</p></div>
                <div className=" max-w-5 m-auto mt-20"><button className="submit bg-primary text-white px-6 rounded-lg  text-white px-8 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-transparent hover:text-red-700 hover:border-solid hover:border hover:border-red-700">VÁGJ BELE</button></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
