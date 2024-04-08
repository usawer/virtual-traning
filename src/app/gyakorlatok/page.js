"use client";
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
        <div className="text-center"><SectionHeaders mainHeader={"Gyakorlatok"} subHeader={"Ezen az oldalon gyakorlatokat böngészhetsz. A 'Mentés az edzéstervbe' gomb-al el tudod menteni őket saját edzéstervedbe, a 'Részletek' gomb alatt pedig tippeket és egyes gyakorlatok pontos leírását találod."}/></div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img className="m-auto mb-4 sm:mr-4" src="/izomzatElorol.jpg" alt="izomzat előről"></img>
          <img className="m-auto mt-4 sm:ml-4" src="/izomzatHatulrol.jpg" alt="izomzat hátulról"></img>
        </div>
        {kategoria?.length > 0 && kategoria.map(k => (
          <div key={k._id} className="mt-5 mb-5">
            <SectionHeaders mainHeader={k.name}/>
            <hr className="my-2"></hr>
            {edzesItem.filter(item => item.kategoria === k._id).map(item => (
              <div key={item._id} className="my-5">
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        ))}
       </section>
    )    
}
