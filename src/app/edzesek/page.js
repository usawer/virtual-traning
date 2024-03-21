"use client";
import { useProfile } from "@/components/UsePorfile";
import Link from "next/link";
import FelhTabs from "@/components/layout/FelhTabs";
import { useEffect, useState } from "react";
import Image from "next/image";



export default function Edzesek(){
    const [EdzesItem, setEdzesItem] = useState([]);
    const {loading, data} = useProfile();
    useEffect(() => {
      fetch('/api/edzesek').then(res => {
        res.json().then(EdzesItem => {
          setEdzesItem(EdzesItem);
        });
      })
    }, []);
    
    if(loading){
        return 'Felhasználó információ betöltése folyamatban...'
    }

    if(!data.admin){
        return 'Nem vagy ADMIN';
    }
    return(
      <section className="mt-8 max-w-md mx-auto">
        <FelhTabs isAdmin={true}/>
        <div className="mt-8"> 
        <Link  href={'/edzesek/new/' } className="button">Új edzés készítés</Link>

        </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8 ">Edzes elemek szerkesztése</h2>
        <div className="grid grid-cols-3 gap-2">
        {EdzesItem?.length > 0 && EdzesItem.map(item => (
  <Link  href={'/edzesek/szerkeszt/'+item._id} className="bg-gray-300 rounded-lg p-4 "key={item.nev}>
    <div className="relative ">
    <Image className="rounded-md"src={item.image} alt={''} width={200} height={200}/>
    </div>
 
    <div className="text-center">
    {item.nev}
    </div>
    </Link>
))}
        </div>

      </div>

      </section>
    )
}