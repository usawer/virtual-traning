'use client';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import KepFeltoltes from "@/components/layout/Kepfeltoltes";
import FelhTabs from "@/components/layout/FelhTabs";


export default function ProfilPage() {
    const session = useSession();
    const [username, setusername] = useState ('');
    const [image, setImage] = useState('');
    const [cel, setCel] = useState('');
    const [kor, setKor] = useState('');
    const [suly, setSuly] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [profilFetched, setPorfilFetched] = useState(false);
    const {status} = session;

    useEffect(()=> {
        if (status === 'authenticated'){ 
            setusername(session.data.user.name);
            setImage(session.data.user.image);
          fetch('/api/profil').then(response =>{
            response.json().then(data => {
                console.log(data)
                setCel(data.cel);
                setKor(data.kor);
                setSuly(data.suly);
                setIsAdmin(data.admin);
                setPorfilFetched(true);
            })
          });

        }
    }, [session, status]);
    async function handleProfilInfoFrissites(ev){
        ev.preventDefault();
 
        
      const savingPromise =  new Promise (async(resolve, reject) => {
        const response =  await fetch('/api/profil',{
            method: 'PUT',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify({name:username, image, cel, kor, suly,}),
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
           
        
            <div className="max-w-md mx-auto mt-8">
               
                    <div className="flex gap-2  ">
                        <div > 
                        <div className="p-2 rounded-lg relative max-w-[150px]" >
                           
                            <KepFeltoltes link={image}  setLink={setImage}/>
                        </div>
                        
                        </div>
                        <div>
                       
                        </div>
                        <form className="grow" onSubmit={handleProfilInfoFrissites}>
                            <input type="text" placeholder="Vezeték és Keresztnév" value={username} onChange={ev => setusername(ev.target.value)}/>
                            <input type="email" value={session.data.user.email} readOnly/>
                            <input type="text" placeholder="Mit szeretne elérni" value={cel} onChange={ev => setCel(ev.target.value)}/>
                            <div className="flex gap-4">
                            <input type="number" placeholder="Hány éves" value={kor} onChange={ev => setKor(ev.target.value)}/>
                            <input type="number" placeholder="Hány kg" value={suly} onChange={ev => setSuly(ev.target.value)}/>
                            </div>
                          
                           


                            <button type="submit">Mentés</button>
                        </form>
                    </div>
            </div>
        </section>
    ) }