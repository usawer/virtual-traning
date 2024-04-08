"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Motivacio(){
    const slides = [
        {
          url: 'https://i.pinimg.com/564x/e5/47/6d/e5476d2431d3e7d9e0ba80701716b63f.jpg',
        },
        {
          url: 'https://anextrarep.com/wp-content/uploads/2021/05/April-Quotes-1.webp',
        },
        {
          url: 'https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/1980121_1473603736202573_4111444993831484690_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hLBFe-NDDlIAX8IBvPX&_nc_ht=scontent-prg1-1.xx&oh=00_AfC48qX_awf4TJ-xt900wqgRp5YJlROQmCd_QFjpRA1AUQ&oe=662A15C0',
        },
        {
          url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9AM60TZE7Pl-LdWQv4wN2W_XtBJGYbHGqUU3J4ihZ-CGisBDi6yiCm-Z4mIoFLwu7wyOyYwFA0vi51Rmlc915ON9C6W_91imoMTgzgf-XCl4mxPUq4yGp08PQJE8K8HiNr_-Ko3VKS5Q/s640/Workout+Quotes+for+Man+%25286%2529.jpg',
        },
        {
          url: 'https://s2.dmcdn.net/v/U5grb1YrRHISBqpdW/x1080',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3500); // 3500 milliseconds = 3,5 seconds
    
        return () => clearInterval(interval);
      }, [currentIndex]);
    
      return (
        <section>
          <div className='w-[auto] h-[900px] w-full m-auto px-4 relative group'>
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className='text-2xl cursor-pointer'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          <img src ="sponsor.png" className="sponsor"></img>
        </section>
  );
}
