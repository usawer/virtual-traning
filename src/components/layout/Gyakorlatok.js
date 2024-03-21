export default function Gyakorlatok({nev,nehezseg}){
    return(
        <div className="bg-gray-200 p-4 rounded-lg -2-left mt-5 transition-all">
                   <div className="flex flex-row">
                <div className="flex flex-col basis-1/3 m-auto">kép</div>
                <div className="flex flex-col basis-1/3 m-auto">
                    <div><h2 className="text-red-700 font-bold text-xl">{nev}</h2></div>
                    <div><p>Izomrész: </p></div>
                    <div><p>Nehézség: {nehezseg}</p></div>
                </div>
                <div className="flex flex-col basis-1/3 m-auto"><button className=" hover:bg-white hover:shadow-md hover:shadow-black/40 text-xl max-w-lg ">Hozzáadás az edzéstervhez</button></div>
            </div>    
                </div>
    );
}
