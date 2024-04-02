"use client"
/* eslint-disable @next/next/no-img-element */
import {useEffect, useState} from "react";

export default function MenuItem({image,nev,leiras,nehezseg, }){
    return(
<div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/40 transition-all">
<div className="text-center"> 
    <img src={image} className="max-h-30 block mx-auto inline-block" alt="gyakorlat"/>
</div>
<h4 className="font-semibold text-xl my-3">{nev} </h4>
<p className="text-gray-500 text-sm line-clamp-3">{leiras}</p>
<button className="mt-4 bg-primary text-white rounded-full px-6 py-2">Mentés</button>
</div>

    );
}