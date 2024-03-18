"use client";
import FelhTabs from "../../components/layout/FelhTabs";
import {useProfile} from "@/components/UsePorfile"
export default function Edzesek(){
    const {loading, data } = useProfile();
    if(loading){
        return 'Felhasználó információ betöltése folyamatban...'
    }

    if(!data.admin){
        return 'Nem vagy ADMIN';
    }
    return(
        <section className="mt-8">
                <FelhTabs isAdmin={true}/>
                <form className="mt-8  max-w-md  mx-auto">
                    <div className="flex items-start gap-4 "> 
                    <div>
                        GIF
                    </div>
                        <div className="grow">
                            <label>Edzés videó neve</label>
                            <input type="text"/>

                            <label>Edzés leírás</label>
                            <input type="text"/>

                            <label>Edzés szint</label>
                            <input type="text"/>

                            <button type="submit">Mentés</button>
                        </div>
                       
                    </div>
                </form>
        </section>
    )
}