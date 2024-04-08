"use client"
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MenuItem({ image, nev, nehezseg, aktivizom }) {

  const [EdzesItem, setEdzesItem] = useState([]);

  useEffect(() => {
    fetch('/api/edzesek').then(res => {
      res.json().then(EdzesItem => {
        setEdzesItem(EdzesItem);
      });
    })
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg group hover:bg-white hover:shadow-md hover:shadow-black/40 transition-all">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:w-2/4">
          <h3 className="font-semibold text-2xl my-3 text-red-700">{nev}</h3>
          <div className="flex flex-row m-auto">
            <div className="flex flex-col text-right font-bold">
              <h4 className="">Nehézség:</h4>
              <h4 className="">Aktív izomrészek:</h4>
            </div>
            <div className="flex flex-col ml-5">
              <h4>{nehezseg}</h4>
              <h4>{aktivizom}</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:w-1/4">
          <img src={image} className="h-56 w-56 rounded-lg" alt="gyakorlat" />
        </div>
        <div className="flex flex-col sm:w-1/4 justify-center items-center mt-4 sm:mt-0 gap-2">
          <button type="submit" className="bg-primary text-white px-4 py-2">Mentés az edzéstervbe</button>
          {EdzesItem?.length > 0 && EdzesItem.map(item => item.nev === nev && (
            <Link href={'/reszletek/' + item._id} className="bg-gray-300 rounded-lg p-2 text-center font-bold" key={item.nev}>Részletek</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
