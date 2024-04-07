'use client';
import { useEffect, useState } from "react";
import FelhTabs from "../../components/layout/FelhTabs";
import {useProfile} from "@/components/UsePorfile"
import TorlesGombja from'@/components/TorlesGombja';
import toast from "react-hot-toast";

export default function Kategoriak(){
    const [kategoriaNev, setKategorianev] = useState('');
    const [categories, setCategories] = useState([]);
    const {loading:profilLoading, data:profilData} = useProfile();   
    const [szerkeszettKatekoria, setSzerkesztettKategoria] = useState(null)

    useEffect(()=> {
      fetchKategoriak();
    }, []);
    function fetchKategoriak(){
        fetch('/api/kategoria').then(res => {
            res.json().then(kategoriak => {
                setCategories(kategoriak);
            });
        });
    }
    async function addCategory(ev){
        ev.preventDefault();
        const creationPromise = new Promise(async(resolve, reject)=>{
          const data = {name:kategoriaNev};
            if(szerkeszettKatekoria){
              data._id = szerkeszettKatekoria._id;
            }
            const response = await fetch('/api/kategoria',{
                method: szerkeszettKatekoria ? 'PUT' : 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data), 
            } );
            setKategorianev('');
            fetchKategoriak();
            setSzerkesztettKategoria(null);
            if(response.ok) 
            resolve();
         else 
         reject();
        });
      await  toast.promise(creationPromise, {
        loading: szerkeszettKatekoria ? 'Frissités folyamatban...' :'Új kategória létrehozása folyamatban...',
        success: szerkeszettKatekoria ? 'Sikeres szerkesztés': 'Sikeresen létrehozva az új kategória',
        error: szerkeszettKatekoria ? 'Nem sikerült frissíteni': 'Nem sikerült létrehozni',
        });
   
    }
    async function TorlesGomb(_id){
      const promise = new Promise(async(resolve,reject)=>{
       const  response = await  fetch('/api/kategoria?_id='+_id,{
          method: 'DELETE'
        })
        if(response.ok){
        resolve();
        }else{
        reject()
        }
      });
     await toast.promise(promise, {
        loading:'Törlés folyamatban...',
        success:"Sikeres törlés",
        error:'Nem sikerült törölni',
      });
      fetchKategoriak();
    }
    if(profilLoading){
        return 'Felhasználó adati betöltése....';
    }
   
    if(profilData.isadmin){
        return 'Nem vagy Admin'

    }
    return(
        <section className="mt-8 ">

            <FelhTabs isAdmin={true} />
            <div className="max-w-lg mx-auto">
            <form className="mt-8" onSubmit={addCategory}>
                <div className="flex gap-2 items-end">
                    <div className="grow">
                    <label>{szerkeszettKatekoria ? 'Frissit' : "Új Kategoriak neve"} 
                    {szerkeszettKatekoria &&( 
                    <>: <b>{szerkeszettKatekoria.name}</b></>
                    )}
                    </label>
                    <input type="text" value={kategoriaNev} onChange={ev => setKategorianev(ev.target.value)}/>
                    </div>
                     <div className="pb-2 flex gap-2">
                        <button className="border border-primary" type="submit">{szerkeszettKatekoria? 'Frissit' : 'Hozzáad'}</button>
                        <button type="button" onClick={()=> {setSzerkesztettKategoria(null); setKategorianev('');}}>Mégse</button>
                     </div>
                </div>
               
                
            </form>
            <div>
        <h2 className="mt-8 text-sm text-gray-500">Kategóriak:</h2>
        {categories?.length > 0 && categories.map(c => (
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center ">
            <div className="grow">
              {c.name}
            </div>
            <div className="flex gap-1">
              <button type="button"
                      onClick={() => {
                        setSzerkesztettKategoria(c);
                        setKategorianev(c.name);
                      }}
              >
                Szerkeszt
              </button>
             <TorlesGombja label="Törlés" onDelete={() =>TorlesGomb(c._id)}/>
            </div>
          </div>
        ))}
      </div>
      </div>
        </section>
    );
}
