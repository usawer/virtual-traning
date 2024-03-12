'use client';
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { rejects } from "assert";
import { resolve } from "path";
import { data } from "autoprefixer";
import Link from "next/link";
import FelhTabs from "@/components/layout/FelhTabs";
import { set } from "mongoose";
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
     async function handleFileChange(ev){
        const files = ev.target.files;
        if (files?.length === 1){
            const data = new FormData;
            data.set('file', files[0])
        const feltoltesPromise = fetch('/api/upload',{
            
                method: 'POST', 
                body: data,
                
                }).then(response => {
                    if(response.ok){
                       return response.json().then(link =>{
                            setImage(link);
                           
                        })
                       
                       
                     
                    } throw new Error (' Nem sikerült feltölteni!');
                });
                   
            
        
       
                await toast.promise(feltoltesPromise, {
                    loading: 'Feltöltés...',
                    success: 'Feltöltés sikreses!',
                    error: 'Feltöltés nem sikerült!',
                });
           
        }
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
                            {image && (
                        <Image className="rounded-lg w-full h-full mb-1" src={image} width={250} height={250}  alt="User Image" />

                            )}
                        <label>
                        <input type="file" className="hidden" onChange={handleFileChange}/>
                        <span className="block border border-red-500 rounded-lg p-2 text-center cursor-pointer">Szerkesztés</span>
                        </label>
                        
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