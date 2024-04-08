import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useProfile } from "../UsePorfile";

export default function FelhInfo({ user, onSave }) {
    const [username, setUsername] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [cel, setCel] = useState(user?.cel || '');
    const [kor, setKor] = useState(user?.kor || '');
    const [suly, setSuly] = useState(user?.suly || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data:loggedInUserData} = useProfile();

    async function handleFileChange(ev) {
        const files = ev.target.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set('file', files[0]);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: data,
                });
                if (response.ok) {
                    const link = await response.json();
                    setImage(link);
                } else {
                    throw new Error('Nem sikerült feltölteni!');
                }
            } catch (error) {
                toast.error('Feltöltés nem sikerült!');
            }
        }
    }



    return (
        <div className="flex gap-2">
            <div>
                <div className="p-2 rounded-lg relative max-w-[150px]">
                    {image && (
                        <Image className="rounded-lg w-full h-full mb-1" src={image} width={250} height={250} alt="User Image" />
                    )}
                    <label>
                        <input type="file" className="hidden" onChange={handleFileChange} />
                        <span className="block border border-red-500 rounded-lg p-2 text-center cursor-pointer">Szerkesztés</span>
                    </label>
                </div>
            </div>
            <div>
               
                <form className="grow" onSubmit={ev => onSave(ev,{name:username, image, cel, suly, kor, admin})}>
                    <input type="text" placeholder="Vezeték és Keresztnév" value={username} onChange={ev => setUsername(ev.target.value)} />
                    <input type="email" disabled={true}     value={user.email} placeholder="email" />
                    <input type="text" placeholder="Mit szeretne elérni" value={cel} onChange={ev => setCel(ev.target.value)} />
                    <div className="flex gap-4">
                        <input type="number" placeholder="Hány éves" value={kor} onChange={ev => setKor(ev.target.value)} />
                        <input type="number" placeholder="Hány kg" value={suly} onChange={ev => setSuly(ev.target.value)} />
                    </div>
                    {loggedInUserData.admin && (
          <div>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
              <input
                id="adminCb" type="checkbox" className="" value={'1'}
                checked={admin}
                onChange={ev => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}
                    <button type="submit" >Mentés</button>
                </form>
            </div>
        </div>
    );
}
