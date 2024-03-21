"use client";
import { useProfile } from "@/components/UsePorfile";
import FelhTabs from "@/components/layout/FelhTabs";
import KepFeltoltes from "@/components/layout/Kepfeltoltes";
import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Left from "../../../components/icons/Left";
import {redirect, useParams} from "next/navigation";

export default function SzerkesztEdzesItem(){
    const params = useParams();
    const [image, setImage] = useState('');
    const [nev, setNev] = useState('');
    const [leiras, setLeiras] = useState('');
    const [nehezseg, setNehezseg] = useState('');
    const [redirectToItems, setRedirectToItems ] = useState(false);
    const { loading, data } = useProfile();
    
    useEffect(() => {
        console.log(params);
fetch('/api/edzesek').then(res => {
    res.json().then(items => {

    });
})
    }, []);

    async function handleFormSubmit(ev) { //Adatbázisba tölti az adott új edzésket
        ev.preventDefault();
        const data = { image, nev, leiras, nehezseg };
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
            loading: 'Edzés mentése folyamatban...',
            success: 'Sikeresen elmentve!',
            error: 'Hiba történt',
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

                        <label>Edzés szint</label>
                        <input type="text" value={nehezseg} onChange={ev => setNehezseg(ev.target.value)} />

                        <button type="submit">Mentés</button>
                    </div>
                </div>
            </form>
        </section>
    );
}