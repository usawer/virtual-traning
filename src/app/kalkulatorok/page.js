"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useState } from "react";
import TorolGomb from "@/components/TorolGomb";
import toast from "react-hot-toast";




export default function Calculators (){

    

        //BMI kalkulátor
        const [error, setError] = useState(false);
    const [Testsuly, setTestsuly] = useState('');
    const [Testmagassag, setTestmagassag] = useState('');
    const [BMIeredmeny, setBMIeredmeny] = useState(null);
    const [Szin, setSzin] = useState('#000000');
    const [Index, setIndex] = useState('');

    const bevitel1 = (event) => {
        setTestsuly(event.target.value);
    };

    const bevitel2 = (event) => {
        setTestmagassag(event.target.value);
    };

    async function szamol() {
        if (Testsuly && Testmagassag) {
            let szamitas = Testsuly / (Testmagassag / 100) ** 2;
            if (szamitas < 20) {
                setBMIeredmeny(szamitas.toFixed(1));
                setIndex("Alultáplált");
                setSzin("#87CEFA");
            }
            if (20 < szamitas) {
                setBMIeredmeny(szamitas.toFixed(1));
                setIndex("Ideális");
                setSzin("#32CD32");
            }
            if (25 < szamitas) {
                setBMIeredmeny(szamitas.toFixed(1));
                setIndex("Túlsúlyos");
                setSzin("#FFD700");
            }
            if (30 < szamitas) {
                setBMIeredmeny(szamitas.toFixed(1));
                setIndex("Elhízott");
                setSzin("#FF8C00");
            }
            if (35 < szamitas) {
                setBMIeredmeny(szamitas.toFixed(1));
                setIndex("Erősen elhízott");
                setSzin("#FF0000");
            }
        } else {
            setError(true);
            await toast.promise(new Promise((resolve, reject) => reject()), {
                error: 'Hiányos vagy rossz adatok!',
            });
            setError(false);
        }
    }
    
        function torol(){
            setTestsuly("");
        setTestmagassag("");
        setBMIeredmeny("");
        setIndex("");
        };

        //Kalóriaszükséglet
        const [Testsuly2, setTestsuly2] = useState('');
        const [Testmagassag2, setTestmagassag2] = useState('');
        const [Eletkor, setEletkor] = useState('');
        const [Nem, setNem] = useState('');
        const [Aktivitas, setAktivitas] = useState('');
        const [Cel, setCel] = useState('');
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

        const bevitel7 = (event) =>{
            setCel(event.target.value);
        };

        const bevitel8 = (event) =>{
            setAktivitas(event.target.value); 
        };

        async function szamol2(){
            if (Testsuly2&&Testmagassag2&&Eletkor&&Nem&&Cel&&Aktivitas) {
                if (Cel == 1) {
                    if(Nem =="Férfi"){
                        if (Aktivitas == 1 ){
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.2;
                            setBMReredmeny((bmr.toFixed(0)+500) + " kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.375;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500) + " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.55;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500) + " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.725;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500) + " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.9;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500)+ " kcal");
                        }
                
                    }
                    else{
                        if (Aktivitas == 1) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.2;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500) +" kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.375;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500)+ " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.55;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500) + " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.725;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500)+ " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.9;
                            setBMReredmeny((parseInt(bmr.toFixed(0))+500)+" kcal");
                        }
                    }
                }
                else if (Cel == 2) {
                    if(Nem =="Férfi"){
                        if (Aktivitas == 1 ){
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.2;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.375;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.55;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.725;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.9;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                
                    }
                    else{
                        if (Aktivitas == 1) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.2;
                            setBMReredmeny((bmr.toFixed(0)-500) + " kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.375;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.55;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.725;
                            setBMReredmeny((bmr.toFixed(0)-500)+ " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.9;
                            setBMReredmeny((bmr.toFixed(0)-500) + " kcal");
                        }
                    }
                }
                else{
                    if(Nem =="Férfi"){
                        if (Aktivitas == 1 ){
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.2;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.375;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.55;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.725;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.9;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                
                    }
                    else{
                        if (Aktivitas == 1) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.2;
                            setBMReredmeny(bmr.toFixed(0) + " kcal");
                        }
                        if (Aktivitas == 2) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.375;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 3) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.55;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 4) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.725;
                            setBMReredmeny(bmr.toFixed(0)+ " kcal");
                        }
                        if (Aktivitas == 5) {
                            let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.9;
                            setBMReredmeny(bmr.toFixed(0) + " kcal");
                        }
                    }
                }
            }
            else {
                setError(true);
                await toast.promise(new Promise((resolve, reject) => reject()), {
                    error: 'Hiányos vagy rossz adatok!',
                });
                setError(false);
            }
        }
        function torol2(){
            setTestsuly2("");
        setTestmagassag2("");
        setEletkor("");
        setNem("");
        setCel("");
        setAktivitas("");
        setBMReredmeny("");
        };
        //1RM
            const [Suly, setSuly] = useState('');
            const [Ism, setIsm] = useState('');
            const [ORMeredmeny, setORMeredmeny] = useState('');

            const bevitel9 = (event) => {
                setSuly(event.target.value);
            };
            const bevitel10 = (event) => {
                setIsm(event.target.value);
            };
           async function szamol3(){
                if (Suly&&Ism) {
                    let Orm = Suly/( 1.0278 - (0.0278 * Ism) );
                    if (1000>Orm>0) {
                        setORMeredmeny(Math.round(Orm)+ " kg") ;
                    }
                
                }
                else {
                    setError(true);
                    await toast.promise(new Promise((resolve, reject) => reject()), {
                        error: 'Hiányos vagy rossz adatok!',
                    });
                    setError(false);
                }
                
        }
        function torol3(){
                setSuly("");
                setIsm("");
                setORMeredmeny("");
        }
        //testzsírszázalék
            const [Nem2, setNem2] = useState('');
            const [DerekK, setDerekK] = useState('');
            const [CsipoK, setCsipoK] = useState('');
            const [NyakK, setNyakK] = useState('');
            const [Testsuly3, setTestsuly3] = useState('');
            const [Testmagassag3, setTestmagassag3] = useState('');
            const [Testzsir, setTestzsir]= useState('');

            let status;
            if (Nem2 !== "Nő") {
                status = true;
            }
            else{
                status = false;
            }

            const bevitel16 = (event) => {
                setNem2(event.target.value);
            }
            const bevitel11 = (event) => {
                setDerekK(event.target.value);
            }
            const bevitel12 = (event) => {
                setCsipoK(event.target.value);
            }
            const bevitel13 = (event) => {
                setNyakK(event.target.value);
            }
            const bevitel14 = (event) => {
                setTestsuly3(event.target.value);
            }
            const bevitel15 = (event) => {
                setTestmagassag3(event.target.value);
            }
            async function szamol4(){
                if (Nem2&&DerekK&&NyakK&&Testsuly3&&Testmagassag3) {
                    if (Nem2 == "Férfi") {
                        let zsir = 495 / (1.0324-0.19077*(Math.log(DerekK-NyakK))+0.15456*(Math.log(Testmagassag3)))-450;
                         setTestzsir(zsir.toFixed(1) + "%");
                    }
                    else{
                        let zsir = 495 / (1.29579-0.35004*(Math.log(DerekK+CsipoK-NyakK))+0.22100*(Math.log(Testmagassag3)))-450;
                         setTestzsir(zsir.toFixed(1) + "%");
                    }
                }
                else {
                    setError(true);
                    await toast.promise(new Promise((resolve, reject) => reject()), {
                        error: 'Hiányos vagy rossz adatok!',
                    });
                    setError(false);
                }
                
            }
            function torol4(){
                setNem2("");
                setDerekK("");
                setNyakK("");
                setCsipoK("");
                setTestsuly3("");
                setTestmagassag3("");
                setTestzsir("");
            }
            //pulzuskalkulátor
            const [Eletkor2, setEletkor2] = useState('');
            const [BPMeredmeny, setBPMeredmeny] = useState('');
            const [BPMeredmenyAlso, setBPMeredmenyAlso] = useState('');
            const [BPMeredmenyFelso, setBPMeredmenyFelso] = useState('');
            const [valaszto, setvalaszto] =  useState('');
            const [Pulzusszam, setPulzusszam] = useState('');

            const bevitel17 = (event) => {
                setEletkor2(event.target.value);
            }
            const bevitel18 = (event) => {
                setvalaszto(event.target.checked);
            }
            const bevitel19 = (event) => {
                setPulzusszam(event.target.value);
            }
            

            let maxBpm = 220 - Eletkor2;
            async function szamol5() {
                    if (Eletkor2&&Pulzusszam) {
                        
                        setBPMeredmeny(parseInt((maxBpm-Pulzusszam) * 0.5) + parseInt(Pulzusszam))
                    }
                    else if(Eletkor2){
                        setBPMeredmeny((maxBpm*0.7)+" - "+ (maxBpm*0.85));
                        
                    }
                    else {
                        setError(true);
                        await toast.promise(new Promise((resolve, reject) => reject()), {
                            error: 'Hiányos vagy rossz adatok!',
                        });
                        setError(false);
                    }
                
                
                
            }
            function torol5(){
                setEletkor2('');
                setPulzusszam('');
                setBPMeredmenyAlso('');
                setBPMeredmenyFelso('');
                setBPMeredmeny('');
            }
            
            
            
         
            

    return(
        <>
        <section className="max-w-4xl m-auto">
        
        <div className="text-center mt-20">
            <SectionHeaders mainHeader={"BMI Kalkulátor"} subHeader={"A BMI a kg-ban számított testtömeg és a méterben számított testmagasság négyzetének hányadosa (kg/m2). 18 év feletti nők és férfiak esetében alkalmazható. A BMI-vel nem lehet különbséget tenni a zsír- és izomtömeg között, ezért ez nem ad információt a testfelépítésre és a test zsírtartalmára vonatkozóan."}/>
        </div>

        
            <div className="flex row">
                <div className="flex flex-col basis-1/2 ">
                    <div><input id="input"type="number" className="my-5 " placeholder="Testsúly (kg)" min={1} max={300} value={Testsuly} onChange={bevitel1}></input></div>
                    <div><input id="input" type="number" className="" placeholder="Testmagasság (cm)" min={1} max={250} value={Testmagassag} onChange={bevitel2}></input></div>
                </div>
                <div className="flex flex-col basis-1/2 ">
                    <div className="bg-gray-100 text-center m-auto p-5 rounded-xl">
                    <div className="mx-auto mt-auto "><p className="text-xl font-bold" >BMI érték:</p></div>
                    <div className="mx-auto mb-auto text-center"><label className="text-xl text-red-500 font-bold " style={{color:"" + Szin}}>{BMIeredmeny}<br></br>{Index}</label></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row ">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5 hover:text-red-700 hover:bg-white" onClick={szamol}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><TorolGomb torol={torol}/></div>
                
            </div>
        
        <hr></hr>

        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"Kalóriaszükséglet"} subHeader={"A kaloriaszükséglet az a mennyiségű energia, amelyre a szervezetnek szüksége van a mindennapi tevékenységek elvégzéséhez és az alapvető élettani folyamatok fenntartásához. Ez az energia mennyiség függ az egyén életkorától, nemétől, testsúlyától, testösszetételétől, fizikai aktivitásától és egyéb tényezőktől."}/>
        </div>
        <div className="flex row">
            <div className="flex flex-col basis-1/2">
            <div>
                <input type="number" className=" my-5" placeholder="Testsúly (kg)" min={1} max={300} value={Testsuly2} onChange={bevitel3}></input>
            </div>
            <div>
                <input type="number" className="" placeholder="Testmagasság (cm)"  min={1} max={250} value={Testmagassag2} onChange={bevitel4}></input>
            </div>
            <div>
                <input type="number" className="" placeholder="Életkor" value={Eletkor} onChange={bevitel5}></input>
            </div>
            <div>
                <select type="text" list="nem" className="" placeholder="Nem" value={Nem} onChange={bevitel6}>
                    <option value="none" selected  hidden>-Válassz nemet-</option>
                    <option value="Nő">Nő</option>
                    <option value="Férfi">Férfi</option>
                    </select>
            </div>
            <div>
                <select type="text" placeholder="Cél" value={Cel} onChange={bevitel7}>
                    <option value="none">-Vélassz célt-</option>
                    <option value={1}>Testsúly növelés</option>
                    <option value={3}>Testsúly fenttartás</option>
                    <option value={2}>Testsúly vesztés</option>
                    
                </select>
            </div>
            
            <div>
                <select type="text" placeholder="Aktivitás" value={Aktivitas} onChange={bevitel8}>
                    <option value="none" selected  hidden>-Válassz aktivitást-</option>
                    <option value={1}>Csekély (mozgásszegény életmód)</option>
                    <option value={2}>Enyhén aktív (heti 1-3 edzés)</option>
                    <option value={3}>Közepesen aktív (heti 3-5 edzés)</option>
                    <option value={4}>Aktív (heti 6-7 edzés)</option>
                    <option value={5}>Nagyon Aktív (heti 6-7 megterhelő edzés)</option>
                
                </select>
            </div>
            </div>
            <div className="flex flex-col basis-1/2 p-5 text-center">
            <div className="bg-gray-100 text-center m-auto p-5 rounded-xl">
                <div className="mx-auto mt-auto"><p className="text-xl font-bold ">Napi kalóriaszükséglet: </p></div>
                <div className="mx-auto mb-auto"><label className="text-xl text-red-500 font-bold"> {BMReredmeny}</label></div>
                </div>
            </div>
            </div>
            <div className="flex flex-row">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5 hover:text-red-700 hover:bg-white" onClick={szamol2}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><TorolGomb torol={torol2}/></div>
                
            </div>
            
        
        
        <hr></hr>
        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"1RM (Egy ismétléses maximum)"} subHeader={"Az 1RM meghatározása fontos a súlyzós edzés során, mivel lehetővé teszi az edzésterv optimalizálását és a progresszió nyomon követését. Az egyéni 1RM figyelembevétele lehetővé teszi az edzésintenzitás megfelelő beállítását az adott személy számára, ami segíthet az erő és az izomtömeg növelésében. "}/>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-1/2 my-5">
                <div>
                    <input type="number" placeholder="Súly (kg)" min={1} max={1000} value={Suly} onChange={bevitel9}></input>
                </div>
                <div>
                <input type="number" placeholder="Ismétlés (db)" min={1} max={1000} value={Ism} onChange={bevitel10}></input>
                </div>
            </div>
            <div className="flex flex-col basis-1/2 p-5 text-center">
            <div className="bg-gray-100 text-center m-auto p-5 rounded-xl">
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Egy ismétléses maximum: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-xl text-red-500 font-bold ">{ORMeredmeny}</label></div>
                    </div>
            </div>
        </div>
        <div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5 hover:text-red-700 hover:bg-white" onClick={szamol3}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><TorolGomb torol={torol3}/></div>
                
            </div>
            
        </div>

        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"Testzsírszázalék kalkulátor"} subHeader={"A testzsírszázalék az összes testzsír arányát jelzi az össztömeghez viszonyítva, és fontos mutatója az egészségnek és a testösszetételnek. Fontos megjegyezni, hogy a testzsírszázalék kalkulátorok által adott eredmények általában becslések, és nem mindig tükrözik pontosan az egyén valós testzsírszázalékát."}/>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-1/2 my-5">
                <div>
                    <select type="text" placeholder="Nem"  value={Nem2} onChange={bevitel16}>
                        <option value="none" selected hidden>-Válassz nemet-</option>
                        <option value="Férfi">Férfi</option>
                        <option value="Nő">Nő</option>
                    </select>
                </div>
                <div>
                    <input type="number" placeholder="Derék kerület (cm)" value={DerekK} onChange={bevitel11}></input>
                </div>
                <div>
                    <input type="number" placeholder="Csípő kerület (cm)" value={CsipoK} onChange={bevitel12} disabled={status} ></input>
                </div>
                <div>
                <input type="number" placeholder="Nyak kerület (cm)" value={NyakK} onChange={bevitel13}></input>
                </div>
                <div>
                    <input type="number" placeholder="Testsúly (kg)" value={Testsuly3} onChange={bevitel14}></input>
                </div>
                <div>
                    <input type="number" placeholder="Testmagasság (cm)" value={Testmagassag3} onChange={bevitel15}></input>
                </div>
            </div>
            <div className="flex flex-col basis-1/2 p-5 text-center">
            <div className="bg-gray-100 text-center m-auto p-5 rounded-xl">
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Testzsírszázalék: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-xl text-red-500 font-bold ">{Testzsir}</label></div>
                    </div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5 hover:text-red-700 hover:bg-white " onClick={szamol4}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><TorolGomb torol={torol4}/></div>
                
            </div>


        
        <div className="text-center mt-20">
            <SectionHeaders mainHeader={"Zsírégető pulzuszám tartomány kalkulátor"} subHeader={"A zsírégető pulzusszám tartomány az a pulzusszám-intervallum, amelyben az edzés során a test főként zsírt éget. Az esetben ha nem ismert a nyugalmi pulzusa számolhat életkorral is, ez esetben a kapott intervallum csak megközelítőleges."}/>
        </div>
        

        <div className="flex flex-row">
            <div className="flex flex-col basis-1/2 my-5">
                <label class="inline-flex items-center cursor-pointer my-5">
                    <span class="ms-3 mr-3 text-sm font-medium text-gray-900 ">Életkor alapján</span>
                    <input type="checkbox" checked={valaszto} onChange={bevitel18} class="sr-only peer"></input>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-700 peer-checked:bg-red-700"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 ">Pulzusszám alapján</span>
                </label>
                <div>
                    <input type="number" placeholder="Életkor" value={Eletkor2} onChange={bevitel17}></input>
                </div>
                <div>
                    <input type="number" placeholder="Pulzusszám" value={Pulzusszam} onChange={bevitel19} disabled={!valaszto}></input>
                </div>
            </div>
            <div className="flex flex-col basis-1/2 p-5 text-center">
            <div className="bg-gray-100 text-center m-auto p-5 rounded-xl">
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Zsírégető pulzusszám: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-xl text-red-500 font-bold ">{BPMeredmeny}</label></div>
                    </div>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5 hover:text-red-700 hover:bg-white" onClick={szamol5}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><TorolGomb torol={torol5}/></div>
                
            </div>
        </section>



        </>
       
    );
}