"use client";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useState } from "react";


export default function Calculators (){
        //BMI kalkulátor
        const [Testsuly, setTestsuly] = useState('');
        const [Testmagassag, setTestmagassag] = useState('');
        const [BMIeredmeny, setBMIeredmeny] = useState(null);
        const [Szin, setSzin] = useState('#000000');
        const [Index, setIndex ] = useState('');

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
                    setBMIeredmeny(szamitas.toFixed(1));
                    setIndex("Alultáplált");
                    setSzin("#87CEFA");
                }
                if (20<szamitas) {
                    setBMIeredmeny(szamitas.toFixed(1));
                    setIndex("Ideális");
                    setSzin("#32CD32");
                }
                if (25<szamitas) {
                    setBMIeredmeny(szamitas.toFixed(1));
                    setIndex("Túlsúlyos");
                    setSzin("#FFD700");
                    
                }
                if (30<szamitas) {
                    setBMIeredmeny(szamitas.toFixed(1));
                    setIndex("Elhízott");
                    setSzin("#FF8C00");
                }
                if (35<szamitas) {
                    setBMIeredmeny(szamitas.toFixed(1));
                    setIndex("Erősen elhízott");
                    setSzin("#FF0000");

                }
                
                
            };
            
            
        };
        function torol(){
            setTestsuly("");
        setTestmagassag("");
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

        function szamol2(){
            if (Testsuly2&&Testmagassag2&&Eletkor&&Nem&&Cel&&Aktivitas) {
            if(Nem =="Férfi"){
                if (Aktivitas == "Csekély (mozgásszegény életmód)") {
                    let bmr = (66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor)) * 1.2;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Enyhén aktív (heti 1-3 edzés)") {
                    let bmr = 66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor) * 1.375;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas =="Közepesen aktív (heti 3-5 edzés)") {
                    let bmr = 66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor) * 1.55;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Aktív (heti 6-7 edzés)") {
                    let bmr = 66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor) * 1.725;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Nagyon Aktív (heti 6-7 megterhelő edzés)") {
                    let bmr = 66.47 + (13.75 * Testsuly2) + (5.003 * Testmagassag2) - (6.755 * Eletkor) * 1.9;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
        
            }
            else{
                if (Aktivitas == "Csekély (mozgásszegény életmód)") {
                    let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.2;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Enyhén aktív (heti 1-3 edzés)") {
                    let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.375;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas =="Közepesen aktív (heti 3-5 edzés)") {
                    let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.55;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Aktív (heti 6-7 edzés)") {
                    let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.725;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
                if (Aktivitas == "Nagyon Aktív (heti 6-7 megterhelő edzés)") {
                    let bmr = (655.1 + (9.563 * Testsuly2) + (1.850 * Testmagassag2) - (4.676 * Eletkor)) * 1.9;
                    setBMReredmeny(bmr.toFixed(0) + " kcal");
                }
            }
            setTestsuly2("");
            setTestmagassag2("");
            setEletkor("");
            setNem("");
            setCel("");
            setAktivitas("");
            }
        }
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
            function szamol3(){
                if (Suly&&Ism) {
                    let Orm = Suly/( 1.0278 - (0.0278 * Ism) );
                    if (1000>Orm>0) {
                        setORMeredmeny(Math.round(Orm)+ " kg") ;
                    }
                
                }
                setSuly("");
                setIsm("");
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
            function szamol4(){
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
                setNem2("");
                setDerekK("");
                setNyakK("");
                setCsipoK("");
                setTestsuly3("");
                setTestmagassag3("");
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
            function szamol5() {
                    if (Eletkor2) {
                        setBPMeredmenyFelso(maxBpm*0.85);
                        setBPMeredmenyAlso(maxBpm*0.7);
                    }
                    else if(Eletkor2&&Pulzusszam){
                        setBPMeredmeny((maxBpm-Pulzusszam) * 0.5 + Pulzusszam)
                    }
                
                setEletkor2('');
                
            }
            
            
            
         
            

    return(
        <>
        <section className="max-w-4xl m-auto">
        
        <div className="text-center mt-20">
            <SectionHeaders mainHeader={"BMI Kalkulátor"} />
        </div>

        
            <div className="flex row">
                <div className="flex flex-col basis-1/2">
                    <div><input id="input"type="number" className="my-5 " placeholder="Testsúly (kg)" min={1} max={300} value={Testsuly} onChange={bevitel1}></input></div>
                    <div><input id="input" type="number" className="" placeholder="Testmagasság (cm)" min={1} max={250} value={Testmagassag} onChange={bevitel2}></input></div>
                </div>
                <div className="flex flex-col basis-1/2">
                    <div className="mx-auto mt-auto "><p className="text-xl font-bold" >Az Ön BMI értéke:</p></div>
                    <div className="mx-auto mb-auto text-center"><label className="text-2xl text-red-500 font-bold " style={{color:"" + Szin}}>{BMIeredmeny}<br></br>{Index}</label></div>
                    
                </div>
            </div>
            <div className="flex flex-row">
            <div className="flex flex-col basis-5/6"><button type="submit" className="my-5" onClick={szamol}>Számít</button></div>
            <div className="flex flex-col basis-1/6"><button  className="my-5 ml-2" onClick={torol}>Töröl</button></div>
                
            </div>
        
        <hr></hr>

        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"Kalóriaszükséglet"}/>
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
                <input type="text" list="nem" className="" placeholder="Nem" value={Nem} onChange={bevitel6}></input>
                <datalist id="nem">
                    <option value="Nő"></option>
                    <option value="Férfi"></option>
                </datalist>
            </div>
            <div>
                <input type="text" placeholder="Cél" className="" list="cel" value={Cel} onChange={bevitel7}></input>
                <datalist id="cel">
                    <option value="Testsúly növelés"></option>
                    <option value="Testsúly vesztés"></option>
                    <option value="Testsúly fenttartás"></option>
                </datalist>
            </div>
            
            <div>
                <input type="text" placeholder="Aktivitás" className="" list="aktivitas" value={Aktivitas} onChange={bevitel8}></input>
                <datalist id="aktivitas">
                    <option value="Csekély (mozgásszegény életmód)"></option>
                    <option value="Enyhén aktív (heti 1-3 edzés)"></option>
                    <option value="Közepesen aktív (heti 3-5 edzés)"></option>
                    <option value="Aktív (heti 6-7 edzés)"></option>
                    <option value="Nagyon Aktív (heti 6-7 megterhelő edzés)"></option>
                </datalist>
            </div>
            </div>
            <div className="flex flex-col basis-1/2 p-20 text-center">
                <div className="mx-auto mt-auto"><p className="text-xl font-bold ">Az Ön napi kalóriaszükséglete: </p></div>
                <div className="mx-auto mb-auto"><label className="text-lg text-red-500 font-bold"> {BMReredmeny}</label></div>
            </div>
            </div>
            <button type="submit" className="my-5" onClick={szamol2}>Számít</button>
        
        
        <hr></hr>
        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"Egy ismétléses max (1RM)"}/>
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
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Az Ön egy ismétléses <br/> maximuma: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-lg text-red-500 font-bold ">{ORMeredmeny}</label></div>
            </div>
        </div>
        <div>
            <button type="submit" className="" onClick={szamol3}>Számít</button>
        </div>

        <div className="mt-20 text-center">
            <SectionHeaders mainHeader={"Testzsírszázalék kalkulátor"}/>
        </div>
        <div className="flex flex-row">
            <div className="flex flex-col basis-1/2 my-5">
                <div>
                    <input type="text" placeholder="Nem" list="nem" value={Nem2} onChange={bevitel16}></input>
                </div>
                <datalist id="nem">
                    <option value={"Ferfi"}></option>
                    <option value={"Nő"}></option>
                </datalist>
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
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Az Ön testzsírszázaléka: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-lg text-red-500 font-bold ">{Testzsir}</label></div>
            </div>
        </div>
        <div>
            <button type="submit" className="" onClick={szamol4}>Számít</button>
        </div>


        
        <div className="text-center mt-20">
            <SectionHeaders mainHeader={"Zsírégető pulzuszám tartomány"}/>
        </div>
        

        <div className="flex flex-row">
            <div className="flex flex-col basis-1/2 my-5">
                <label class="inline-flex items-center cursor-pointer my-5">
                    <span class="ms-3 mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Életkor alapján</span>
                    <input type="checkbox" checked={valaszto} onChange={bevitel18} class="sr-only peer"></input>
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-red-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-700 peer-checked:bg-red-700"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Pulzusszám alapján</span>
                </label>
                <div>
                    <input type="number" placeholder="Életkor" value={Eletkor2} onChange={bevitel17} disabled={valaszto}></input>
                </div>
                <div>
                    <input type="number" placeholder="Pulzusszám" value={Pulzusszam} onChange={bevitel19} disabled={!valaszto}></input>
                </div>
            </div>
            <div className="flex flex-col basis-1/2 p-5 text-center">
                    <div className="mx-auto mt-auto"><p className="text-xl font-bold">Az Ön zsírégető pulzusszám tartománya: </p></div>
                    <div className="mx-auto mb-auto"><label className="content-center text-lg text-red-500 font-bold ">{BPMeredmenyAlso} - {BPMeredmenyFelso}</label></div>
            </div>
        </div>
        <div>
            <button type="submit" className="" onClick={szamol5}>Számít</button>
        </div>
        </section>



        </>
       
    );
};
