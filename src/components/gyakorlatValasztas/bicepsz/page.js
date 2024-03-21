"use client";

import SectionHeaders from "@/components/layout/SectionHeaders";
import Gyakorlatok from "../../../components/layout/Gyakorlatok";

export default function bicepsz(){
    return(
        <>
        <div className="mt-10"> 
        <SectionHeaders mainHeader={"Bicepsz gyakorlatok"} subHeader={"hosszúfej, rövidfej, brachialis"} className="text-gray-400"/>
        <hr></hr>
        </div>
        <div>
            <Gyakorlatok nev={"Bicepsz állva kétkezes rúddal"}/>
        </div>
        <div>
            <Gyakorlatok nev={"Bicepsz állva francia rúddal"}/>
        </div>
        <div>
            <Gyakorlatok nev={"Kalapácsbicepsz"}/>
        </div>
        
        </>
        
        

    );

}