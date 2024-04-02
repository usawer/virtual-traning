"use client"
import FelhInfo from "@/components/layout/FelhInfo";
import FelhTabs from "/src/components/layout/FelhTabs"
import { useProfile } from "@/components/UsePorfile"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

export default function SzerkesztFelhasznalo (){
    const {loading, data} = useProfile();
    const [user, setUser] = useState(null);
    const {id} = useParams();

    useEffect(()=> {
        fetch('/api/profil?_id='+id).then(res => {
            res.json().then(user => {
              setUser(user);
            });
          })
        }, []);

    async function handleMentes(ev, data){
        ev.preventDefault();
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/profil', {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({...data,_id:id}),
            });
            if (res.ok)
              resolve();
            else
              reject();
          });
      
          await toast.promise(promise, {
            loading: 'Adatok elmentése folyamatban...',
            success: 'Sikeres mentés!',
            error: 'Hiba történt',
          });
        }
    
        async function handleFileChange(ev) {
            const files = ev.target.files;
            if (files?.length === 1) {
                const data = new FormData();
                data.set('file', files[0]);
    
                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        body: data,
                    });
                    if (response.ok) {
                        const link = await response.json();
                        setImage(link);
                    } else {
                        throw new Error('Nem sikerült feltölteni!');
                    }
                } catch (error) {
                    toast.error('Feltöltés nem sikerült!');
                }
            }
        }
    
    if(loading){

        return "Információk betöltése folyamatban";
    }
    if(!data.admin){
        return"Nem vagy admin";
    }
   

    return(
        <section className="mt-8 mx-auto max-w-2xl">
            <FelhTabs isAdmin={true}/>
            <div className="mt-8">
                
                <FelhInfo user={user} onSave={handleMentes}/>
            </div>
        </section>
    )
}