"use client";
import { useProfile } from "@/components/UsePorfile";
import FelhTabs from "@/components/layout/FelhTabs";
import KepFeltoltes from "@/components/layout/Kepfeltoltes";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Left from "/src/components/icons/Left";
import {redirect, useParams} from "next/navigation";
import TorlesGombja from '@/components/TorlesGombja'



export default function SzerkesztEdzesItem(){
    const {id} = useParams();
    const [image, setImage] = useState('');
    const [nev, setNev] = useState('');
    const [leiras, setLeiras] = useState('');
    const [nehezseg, setNehezseg] = useState('');
    const [redirectToItems, setRedirectToItems ] = useState(false);
    const { loading, data } = useProfile();
    const [kategoriak, setKategoriak] = useState([]);
    const [kategoria, setKategoria] = useState('');

    
    useEffect(()=>{
        fetch('/api/kategoria').then(res=>{
            res.json().then(kategoria =>{
                setKategoriak(kategoria);
            })
        })
    },[]);

    useEffect(() => { //megjelenití az edzést amit szerkeszteni szeretnénk
fetch('/api/edzesek').then(res => {
    res.json().then(items => {
        const item = items.find(i => i._id === id);
        setImage(item.image);
        setNev(item.nev);
        setLeiras(item.leiras);
        setNehezseg(item.nehezseg);
    });
})
    }, [id]);

    async function handleFormSubmit(ev) { //Adatbázisba tölti az adott új edzésket
        ev.preventDefault();
        const data = { image, nev, leiras, nehezseg, _id:id, kategoria,};
        const mentesPromise = new Promise(async(resolve, reject) => {
            const response = await fetch('/api/edzesek', {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok)
                resolve();
            else
                reject()
        });
        await toast.promise(mentesPromise, {
            loading: 'Edzés mentése folyamatban...',
            success: 'Sikeresen elmentve!',
            error: 'Hiba történt',
        });
        setRedirectToItems(true);
    }
  

       async function TorlesGomb(){
        const promise = new Promise(async(resolve, reject)=> {
         const res = await   fetch('/api/edzesek?_id='+id,{
                method: 'DELETE',
            });
            if(res.ok)
            resolve();
        else
        reject();
        })
         await toast.promise(promise, {
            loading: 'Törlés folyamatban...',
            success: 'Sikeresen törölve!',
            error: 'Nem sikerült törölni'
         })
         setRedirectToItems(true);

        }
        if(redirectToItems){
            return redirect('/edzesek');
        }
    if (loading) {
        return 'Adatok betöltése folyamatban...';
    }

    if (!data.admin) {
        return 'Nem vagy admin';
    }

    return (
        <section className="mt-8">
            <FelhTabs isAdmin={true} />
            <div className="max-w-md mx-auto mt-8">
                <Link href={'/edzesek'} className="button">
                <Left></Left>
                    <span>Vissza az összes Edzés elemre</span>
                
                    </Link>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-8 max-w-md mx-auto">
                <div className="grid items-start gap-4">
                    <div>
                        <KepFeltoltes link={image} setLink={setImage} />
                    </div>
                    <div className="grow">
                        <label>Edzés videó neve</label>
                        <input type="text" value={nev} onChange={ev => setNev(ev.target.value)} />

                        <label>Edzés leírás</label>
                        <input type="text" value={leiras} onChange={ev => setLeiras(ev.target.value)} />
                        <label>  Kategoriák</label>
                        <select value={kategoria} onChange={ev => setKategoria(ev.target.value)}>
            {kategoriak?.length > 0 && kategoriak.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}</select>
                        <label>Edzés szint</label>
                        <input type="text" value={nehezseg} onChange={ev => setNehezseg(ev.target.value)} />

                        <button type="submit">Mentés</button>
                    </div>
                </div>
                <div className="gap-2 mt-4">
               <TorlesGombja label='Törlés' onDelete={TorlesGomb}/>
               </div>
            </form>
        </section>
    );
}