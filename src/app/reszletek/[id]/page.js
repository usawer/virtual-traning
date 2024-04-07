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
    const [aktivizom, setAktivizom] = useState('');
    const [tippek, setTippek] = useState('');
    const [hogyan, setHogyan] = useState('');
    const [eszkoz, setEszkoz] = useState('');
    const [konnyebb, setKonyebb] = useState('');
    const [nehezebb, setNehezebb] = useState('');
    

    useEffect(() => {
        fetch('/api/edzesek').then(res => {
            res.json().then(items => {
                const item = items.find(i => i._id === id);
                setImage(item.image);
                setNev(item.nev);
                setLeiras(item.leiras);
                setNehezseg(item.nehezseg);
                setAktivizom(item.aktivizom);
                setTippek(item.tippek);
                setHogyan(item.hogyan);
                setEszkoz(item.eszkoz);
                setKonyebb(item.konnyebb);
                setNehezebb(item.nehezebb);
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
                    <div className="flex flex-row">
                        <div className="flex flex-col basis-1/2 text-right pr-5">
                            <div className="font-bold">Nehézség:</div>
                            <div className="font-bold">Aktív izomrész:</div>
                            <div className="font-bold">Szükséges eszközök:</div>
                        </div>
                        <div className="flex flex-col basis-1/2 pl-5">
                            <div className="">{nehezseg}</div>
                            <div className="">{aktivizom}</div>
                            <div className="">{eszkoz}</div>   
                        </div>
                    </div>
                    
                    <div className="text-center font-bold mt-10 text-lg bg-gray-400 border-b">Variációk</div>
                    <div className="flex flex-row bg-gray-200">
                        <div className="flex flex-col basis-1/2 ">
                            <div className="text-center bg-gray-300 border-r font-bold">Könnyebb</div>
                            <div className="bg-gray-200 p-4">{konnyebb}</div>
                        </div>
                        <div className="flex flex-col basis-1/2 ">
                            <div className="text-center bg-gray-300 font-bold">Nehezebb</div>
                            <div className="bg-gray-200 p-4">{nehezebb}</div>
                        </div>
                    </div>
                    <div className="text-center font-bold mt-10 text-lg bg-gray-400">Tippek</div>
                    
                            
                            <div className="bg-gray-200 p-2 border-r">{tippek}</div>
                        
                </div>
            </div>
                <div className="mt-10 font-bold">Leírás</div>
                <div className="mt-5">{leiras}</div>
                <div className="mt-10 font-bold">Hogyan csináld?</div>
                <div className="my-5"><p>{hogyan}</p></div>
                
            
            
            </section>
            </>
        )
}