"use client"

import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { useEffect, useState } from "react"

export default function Gyakorlatok() {
    const [kategoria, setKategoria] = useState([]);
    const [edzesItem, setEdzesItem] = useState([]);
    useEffect(() => {
        fetch('api/kategoria').then(res => {
            res.json().then(kategoria => setKategoria(kategoria));
        });
        fetch('api/edzesek').then(res => {
            res.json().then(edzesItem => setEdzesItem(edzesItem));
        })
    }, [])
    return(
       <section class="mt-8">
       {kategoria?.length > 0 && kategoria.map(k => (
        // eslint-disable-next-line react/jsx-key
        <div>
            <div className="text-center ">
            <SectionHeaders mainHeader={k.name}/>

            </div>
            {edzesItem.filter(item => item.kategoria === k._id).map(item => (
                // eslint-disable-next-line react/jsx-key
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <MenuItem {...item} />
                </div>
            ))}
        </div>
       ))}
       </section>
    
    )    
}