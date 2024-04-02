'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import FelInfo from"@/components/layout/FelhInfo";
import FelhTabs from "@/components/layout/FelhTabs";

export default function ProfilPage() {
    const session = useSession();
    const [user, setUser] =  useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profilFetched, setPorfilFetched] = useState(false);
    const {status} = session;

    useEffect(()=> {
        if (status === 'authenticated'){ 
          
          fetch('/api/profil').then(response =>{
            response.json().then(data => {
               
                setUser(data);
                setIsAdmin(data.admin);
                setPorfilFetched(true);
            })
          });

        }
    }, [session, status]);
    async function handleProfilInfoFrissites(ev, data){
        ev.preventDefault();
 
        
      const savingPromise =  new Promise (async(resolve, reject) => {
        const response =  await fetch('/api/profil',{
            method: 'PUT',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        });
        if (response.ok) resolve( ) 
        else reject();
    });
      await toast.promise(savingPromise,{
        loading: 'Mentés folyamatban!...',
        success: 'Metnve sikeresen!',
        error: 'Nem sikerült a mentés!',
      });
    }
    

    if (status === 'loading'|| !profilFetched ){
        return 'Loading...';
    }
    if (status === 'unauthenticated'){
       return redirect('/login');
    }

    
    return(
        <section className="mt-8">
            <FelhTabs isAdmin={isAdmin}/>
            <div className="max-w-2xl mx-auto mt-8">
            <FelInfo user={user} onSave={handleProfilInfoFrissites}/>
            
            </div>
        </section>
    ) }