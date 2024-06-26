
"use client";
import { useProfile } from "@/components/UsePorfile";
import FelhTabs from "@/components/layout/FelhTabs";
import KepFeltoltes from "@/components/layout/Kepfeltoltes";
import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Left from "../../../components/icons/Left";
import {redirect} from "next/navigation";
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function UjEdzes() {
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

    async function handleFormSubmit(ev) { //Adatbázisba tölti az adott új edzésket
        ev.preventDefault();
        const data = { image, nev, leiras,kategoria, nehezseg, aktivizom, tippek, hogyan, eszkoz, konnyebb, nehezebb};
        const mentesPromise = new Promise(async(resolve, reject) => {
            const response = await fetch('/api/edzesek', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok)
                resolve();
            else
                reject()
        });
        await toast.promise(mentesPromise, {
            loading: 'Gyakorlat mentése folyamatban...',
            success: 'Sikeresen elmentve!',
            error: 'Hiba történt!',
        });
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
            <div className="max-w-md mx-auto mt-8 text-center">
                <Link href={'/edzesek'} className="button">
                <Left></Left>
                    <span>Vissza az összes gyakorlat elemre</span>
                    </Link>
                    <div className="my-10"><SectionHeaders mainHeader={"Gyakorlat létrehozás"}/></div>
            </div>
            <form onSubmit={handleFormSubmit} className="mt-8 max-w-6xl mx-auto">
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col basis-1/2 m-auto">
                    <div>
                        <KepFeltoltes link={image} setLink={setImage} />
                    </div>
                    </div>
                    <div className="flex flex-col basis-1/2">
                    
                    <div className="grow">
                        <label>Gyakorlat neve</label>
                        <input type="text" value={nev} onChange={ev => setNev(ev.target.value)} />

                        <label>Leírás</label>
                        <input type="text" value={leiras} onChange={ev => setLeiras(ev.target.value)} />

                        <label>  Kategoriák</label>
                        <select value={kategoria} onChange={ev => setKategoria(ev.target.value)}>
            {kategoriak?.length > 0 && kategoriak.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}</select>

                        <label>Nehézség</label>
                        <select value={nehezseg} onChange={ev => setNehezseg(ev.target.value)}>
                            <option value="none">-Válassz nehézséget-</option>
                            <option value="Kezdő">Kezdő</option>
                            <option value="Középhaladó">Középhaladó</option>
                            <option value="Haladó">Haladó</option>
                            <option value="Profi">Profi</option>
                        </select>

                        <label>Aktív izomrész</label>
                        <input type="text" value={aktivizom} onChange={ev => setAktivizom(ev.target.value)} />

                        <label>Tippek</label>
                        <input type="text" value={tippek} onChange={ev => setTippek(ev.target.value)} />

                        <label>Hogyan csináld?</label>
                        <input type="text" value={hogyan} onChange={ev => setHogyan(ev.target.value)} />

                        <label>Eszközszükséglet</label>
                        <input type="text" value={eszkoz} onChange={ev => setEszkoz(ev.target.value)} />

                        <label>Könnyebb variáció</label>
                        <input type="text" value={konnyebb} onChange={ev => setKonyebb(ev.target.value)} />

                        <label>Nehezebb variáció</label>
                        <input type="text" value={nehezebb} onChange={ev => setNehezebb(ev.target.value)} />

                        <button type="submit" className="my-5">Mentés</button>
                    </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
