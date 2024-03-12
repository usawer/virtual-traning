"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useState } from "react";

export default function Calculators (){
        //BMI kalkulátor
        const [Testsuly, setTestsuly] = useState('');
        const [Testmagassag, setTestmagassag] = useState('');
        const [BMIeredmeny, setBMIeredmeny] = useState(null);

        const bevitel1 = (event) =>{
            setTestsuly(event.target.value);
        };

        const bevitel2 = (event) =>{
            setTestmagassag(event.target.value);
        };
        
        function szamol(){
            if(Testsuly&&Testmagassag){
            let szamitas = Testsuly / (Testmagassag / 100) ** 2;
                if (szamitas<20) {
                    setBMIeredmeny(szamitas.toFixed(1) + "Alultáplált");
                }
                if (20<szamitas<25) {
                    setBMIeredmeny(szamitas.toFixed(1) + " Ideális");
                }
                if (25<szamitas<30) {
                    setBMIeredmeny(szamitas.toFixed(1) + " Túlsúlyos");
                }
                if (30<szamitas<35) {
                    setBMIeredmeny(szamitas.toFixed(1) + " Elhízott");
                }
                if (35<szamitas) {
                    setBMIeredmeny(szamitas.toFixed(1) + " Erősen elhízott");
                }
            }
            
        }

        //Kalóriaszükséglet
        const [Testsuly2, setTestsuly2] = useState('');
        const [Testmagassag2, setTestmagassag2] = useState('');
        const [Eletkor, setEletkor] = useState('');
        const [Nem, setNem] = useState('');
        const [BMReredmeny, setBMReredmeny] = useState(null)

        const bevitel3 = (event) =>{
            setTestsuly2(event.target.value);
        };

        const bevitel4 = (event) =>{
            setTestmagassag2(event.target.value);
        };
        
        const bevitel5 = (event) =>{
            setEletkor(event.target.value);
        };

        const bevitel6 = (event) =>{
            setNem(event.target.value);
        };

        function szamol2(){
            if (Testsuly2&&Testmagassag2&&Eletkor) {
            if(Nem === "Férfi"){
                let bmr = 66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor);
                setBMReredmeny(bmr); 
            }
            else{
                let bmr = 655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)
                setBMReredmeny(bmr);
            }
            }
        }


    return(
        <>
        
        <div className="mt-20">
            <SectionHeaders mainHeader={"BMI Kalkulátor"} />
        </div>
        <div>
            <input type="number" className="my-5 max-w-xs" placeholder="Testsúly (kg)" min={1} max={300} value={Testsuly} onChange={bevitel1}></input>
            <input type="number" className="max-w-xs"      placeholder="Testmagasság (cm)" min={1} max={250} value={Testmagassag} onChange={bevitel2}></input>
            

        </div>
        <div className="flaot-left">
            <label className="float-right text-xl ">{BMIeredmeny}</label>
        </div>
        <div>
            <button type="submit" className="my-5" onClick={szamol}>Számít!</button>
        </div>
            
        
        <hr></hr>
        <div className="mt-10">
            <SectionHeaders mainHeader={"Kalóriaszükséglet"}/>
        </div>
        <div>
            <input type="number" className="max-w-xs my-5" placeholder="Testsúly (kg)" min={1} max={300} value={Testsuly2} onChange={bevitel3}></input>
            <input type="number" className="max-w-xs" placeholder="Testmagasság (cm)"  min={1} max={250} value={Testmagassag2} onChange={bevitel4}></input>
            <input type="number" className="max-w-xs" placeholder="Életkor" value={Eletkor} onChange={bevitel5}></input>
            <input type="text" list="nem" className="max-w-xs" placeholder="Nem" value={Nem} on onChange={bevitel6}></input>
            <datalist id="nem">
                <option value="Nő"></option>
                <option value="Férfi"></option>
            </datalist>
            <input type="text" placeholder="Cél" className="max-w-xs" list="cel"></input><br/>
            <datalist id="cel">
                <option value="Testsúly növelés"></option>
                <option value="Testsúly vesztés"></option>
                <option value="Testsúly fenttartás"></option>
            </datalist>
            <button type="submit" className="my-5" onClick={szamol2}>Számít!</button>
        </div>
        <label>{BMReredmeny}</label>
        <hr></hr>
        <div className="mt-10">
            <SectionHeaders mainHeader={"Kalóriaszükséglet"}/>
        </div>
        </>
       
    );
};