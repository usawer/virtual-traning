'use client';
import { useEffect, useState } from "react";
import FelhTabs from "../../components/layout/FelhTabs";
import {usePofile} from "@/components/UsePorfile"

import toast from "react-hot-toast";

export default function Kategoriak(){
    const [ujKategoria, setUjKategoria] = useState('');
    const [categories, setCategories] = useState([]);
    const {loading:profilLoading, data:profilData} = usePofile();

    useEffect(()=> {
      fetchKategoriak
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
            const response = await fetch('/api/kategoria',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({name:ujKategoria})
            } );
            setCategories('');
            fetchKategoriak();
            if(response.ok) 
            resolve();
         else 
         reject();
        });
      await  toast.promise(creationPromise, {
        loading:'Új kategória keszítése folyamatban...',
        success:'Sikeresen létrehozva az új Kategória',
        error: 'Sajnos nem sikerült létrehozni',
        });
   
    }

    if(profilLoading){
        return 'Felhasználó adati betöltése....';
    }
   
    if(profilData.isadmin){
        return 'Nem vagy Admin'

    }
    return(
        <section className="mt-8 max-w-lg mx-auto">

            <FelhTabs isAdmin={true} />
            <form className="mt-8" onSubmit={addCategory}>
                <div className="flex gap-2 items-end">
                    <div className="grow">
                    <label>Új Kategoriak neve</label>
                    <input type="text" value={ujKategoria} onChange={ev => setUjKategoria(ev.target.value)}/>
                    </div>
                     <div className="pb-2">
                        <button className="border border-primary" type="submit">Hozzáadás</button>
                     </div>
                </div>
               
                
            </form>
            <div>
        <h2 className="mt-8 text-sm text-gray-500">Existing categories</h2>
        {categories?.length > 0 && categories.map(c => (
          <div
            key={c._id}
            className="bg-gray-100 rounded-xl p-2 px-4 flex gap-1 mb-1 items-center">
            <div className="grow">
              {c.name}
            </div>
            <div className="flex gap-1">
              <button type="button"
                      onClick={() => {
                        setEditedCategory(c);
                        setCategoryName(c.name);
                      }}
              >
                Edit
              </button>
             
            </div>
          </div>
        ))}
      </div>
        </section>
    );
}
