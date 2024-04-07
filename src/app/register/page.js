"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function RegisterPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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
    if (!response.ok && password == password2) {
      setUserCreated(true);
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
    return(
     <section className="bg-red-700 pt-20 pb-20"> 
        
        {userCreated &&(
            <div className="my-4 text-center">
                Sikeresen regisztráltál! Mostmár bejelentkezhetsz!<Link className="underline" href={'/login'}>Bejelentkezés</Link>
            </div>
        )}
        {error &&(
            <div className="my-4 text-center">
               Hiba <br/>
               Probáld újra később!
            </div>
        )}
        <div className="text-center mb-5 font-bold text-4xl text-white italic"><h1>Regisztráció</h1></div>
        <div className="bg-white max-w-sm m-auto pt-10 pb-10 rounded-3xl shadow-2xl">
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/6">
          <img src={'/user.svg'} width={24} height={32} className="m-auto"></img>
          </div>
          <div className="flex flex-col basis-5/6">
            <input type="email" placeholder="E-mail cím" value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)}/>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/6">
          <img src={'/password.svg'} width={24} height={32} className="m-auto"></img>
          </div>
          <div className="flex flex-col basis-5/6">
            <input type="password" placeholder="Jelszó" value={password} disabled={creatingUser}  onChange={ev => setPassword(ev.target.value)}/>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/6">
          <img src={'/passwordAgain.svg'} width={24} height={32} className="m-auto"></img>
          </div>
          <div className="flex flex-col basis-5/6">
            <input type="password" placeholder="Jelszó újra" value={password2} disabled={creatingUser}  onChange={ev => setPassword2(ev.target.value)}/>
          </div>
        </div>
        
        
        
        <button type="submit" disabled={creatingUser} className="mt-2">Regisztráció</button>
        <div className="my-4 text-center text-gray-500">Már van fiókod? <Link className="underline" href={'/login'}>Jelentkezz be!</Link></div>
        <hr></hr>
        <div className="my-4 text-center text-gray-500">Vagy</div>
        <button className="flex gap-4 justify-center">
            <Image src={'/google.png'} alt={'Belépés googlel'} width={24} height={32}/>
            Belépés Google fiókkal
            </button>
            
    </form>
    </div>
    
     </section>
    )
}