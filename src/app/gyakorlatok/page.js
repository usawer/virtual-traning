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
       <section className="mt-8 max-w-6xl m-auto">
        <img src="/izomzatElorol.jpg"></img>
       {kategoria?.length > 0 && kategoria.map(k => (
        // eslint-disable-next-line react/jsx-key
        <div>
            <div className="mt-5 mb-5">
            <SectionHeaders mainHeader={k.name}/>

            </div>
            <hr></hr>
            {edzesItem.filter(item => item.kategoria === k._id).map(item => (
                // eslint-disable-next-line react/jsx-key
                <div className="my-5">
                    <MenuItem {...item} />
                </div>
            ))}
        </div>
       ))}
       </section>
    
    )    
}