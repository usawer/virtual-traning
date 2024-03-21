"use client";
import SectionHeaders from '@/components/layout/SectionHeaders';
import React from 'react';
import Izomcsoportok from '@/components/layout/Izomcsoportok';

export default function name(params) {
    return(
        <>
        <div className='mt-20 mb-10 text-center'>
            <SectionHeaders subHeader={"Válassz egy edzeni kívánt izomcsoportot!"} mainHeader={"Izomcsoportok"}/>
        </div>
        <div className=" grid grid-cols-4  gap-4 ">
                <Izomcsoportok nev={"Vállizmok"} kep={"/vallizmok.png"}/>
                <Izomcsoportok nev={"Bicepsz"} kep={"/bicepsz.png"} csoport={"/gyakorlatValasztas/bicepsz"}/>
                <Izomcsoportok nev={"Tricepsz"} kep={"/tricepsz.png"}/>
                <Izomcsoportok nev={"Alkarizmok"} kep={"/alkarizmok.png"}/>
                <Izomcsoportok nev={"Hátizmok"} kep={"/hatizmok.png"}/>
                <Izomcsoportok nev={"Mellkasizmok"} kep={"/mellkasizmok.png"}/>
                <Izomcsoportok nev={"Combizmok"} kep={"/combizmok.png"}/>
                <Izomcsoportok nev={"Has és törzsizmok"} kep={"/hasestorzsizmok.png"}/>

                

                
        </div>
        </>
        
    
    )    
}