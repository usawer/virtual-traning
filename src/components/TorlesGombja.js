import { useState } from "react"

export default function TorlesGomb({label, onDelete}){

    const[showConfirm, setShowConfirm] = useState(false); 
    if(showConfirm){
        return(
            <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
                <div className=" bg-white p-4 rounded-lg">
                <h4>Biztos vagy benne hogy törlöd?</h4>
                 <div className="flex gap-2 mt-1">
               <button type="button" onClick={()=> setShowConfirm(false)}>Mégse</button>
               <button onClick={onDelete} type="button" className="primary">Igen</button>

            </div>
            </div>
            </div>
            
           
        )
    }
    return(
        <button type="button" onClick={() => setShowConfirm(true)} className="btn btn-danger">
            {label}
        </button>
    )

}