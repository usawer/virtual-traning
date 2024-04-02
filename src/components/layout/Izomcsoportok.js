export default function Izomcsoportok({kep,nev,csoport}){
    return(
<div className="bg-gray-200 p-4 rounded-lg -2-left  text-center group hover:bg-white hover:shadow-md hover:shadow-black/40 transition-all">
                   <div className="text-center"> 
                   <img className="rounded" src={kep}></img>
                   </div>
                    <h4 className="font-semibold text-xl my-3">{nev}</h4>
                    <p className="text-gray-500 text-sm"></p>
                    <button className="mt-4 bg-primary text-white rounded-full px-6 py-2"><a href={csoport}>Tovább</a></button>
                </div>
    );
}