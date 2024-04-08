
import Image from "next/image";
import toast from "react-hot-toast"
export default function Kepfeltoltes({link, setLink}){
    async function handleFileChange(ev){
        const files = ev.target.files;
        if (files?.length === 1){
            const data = new FormData;
            data.set('file', files[0])
        const feltoltesPromise = fetch('/api/upload',{
            
                method: 'POST', 
                body: data,
                
                }).then(response => {
                    if(response.ok){
                       return response.json().then(link =>{
                            setLink(link);
                           
                        })
                       
                       
                     
                    } throw new Error (' Nem sikerült feltölteni!');
                });
                   
            
        
       
                await toast.promise(feltoltesPromise, {
                    loading: 'Feltöltés...',
                    success: 'Sikeres feltöltés!',
                    error: 'A feltöltés nem sikerült!',
                });
           
        }
    }
    return(
<>  
{link && (
                        <Image className="rounded-lg w-full h-full mb-1" src={link} width={250} height={250}  alt="User Image" />

                            )}
                        <label>
                        <input type="file" className="hidden" onChange={handleFileChange}/>
                        <span className="block border border-red-500 rounded-lg p-2 text-center cursor-pointer">Kép hozzáadása / szerkesztése</span>
                        </label>

</>
    );
}