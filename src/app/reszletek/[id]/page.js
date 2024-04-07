"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function Reszletek(){
    const {id} = useParams();
    const [image, setImage] = useState('');
    const [nev, setNev] = useState('');
    const [leiras, setLeiras] = useState('');
    const [nehezseg, setNehezseg] = useState('');
    

    useEffect(() => {
        fetch('/api/edzesek').then(res => {
            res.json().then(items => {
                const item = items.find(i => i._id === id);
                setImage(item.image);
                setNev(item.nev);
                setLeiras(item.leiras);
                setNehezseg(item.nehezseg);
                set
            });
        })})

        return(
            <>
            <section className="max-w-6xl mx-auto mt-20">
                <div className="text-center"><SectionHeaders mainHeader={nev}/></div>
            <div className="flex flex-row mt-20">
                <div className="flex flex-col basis-1/2 border-r">
                <Image className="rounded-md m-auto"src={image} alt={''} width={350} height={350}/>
                </div>
                <div className="flex flex-col basis-1/2 mx-5">
                    <div className="">Nehézség: {nehezseg}</div>
                    <div className="">Aktív izomrész:</div>
                    <div className="">Tippek:</div>
                    <div className="">Alternatívák:</div>
                    <div className="">Szükséges eszközök</div>
                </div>
            </div>
                <div className="flex flex-row mt-10 font-bold">Hogyan csináld?</div>
                <div className="flex flex-row my-5"><p>{leiras}</p></div>
                
            
            
            </section>
            </>
        )
}