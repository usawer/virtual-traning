"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function RegisterPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if (!response.ok) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
    return(
     <section className="mt-8"> 
        <h1 className="text-center text-menu text-4xl mb-4">Regisztráció</h1>
        {userCreated &&(
            <div className="my-4 text-center">
                Felhasználód sikeresen regisztrálva! Mostmár bejelentkezhetsz!<Link className="underline" href={'/login'}>Login </Link>
            </div>
        )}
        {error &&(
            <div className="my-4 text-center">
               Hiba <br/>
               Probáld újra később
            </div>
        )}
    <form className="block max-w-xs mx-auto " onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" placeholder="jelszó" value={password} disabled={creatingUser}  onChange={ev => setPassword(ev.target.value)}/>
        <button type="submit" disabled={creatingUser}>Regiszráció</button>
        <div className="my-4 text-center text-gray-500">Vagy Bejelentkezés Google segítségével</div>
        <button className="felx gap-4 justify-center">
            <Image src={'/google.png'} alt={'Belépés googlel'} width={24} height={32}/>
            Belépés Googlel
            </button>
            <div className="text-center my-4 text-gray-500 border-t pt-4">
                Már van fiókod? <Link className="underline" href={'/login'}>Bejelentkezés</Link>
            </div>
    </form>
   
     </section>
    )
}