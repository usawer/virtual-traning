"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react'; // Importálás megfelelően

import SectionHeaders from "@/components/layout/SectionHeaders";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    const hasNumber = /\d/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const isLengthValid = password.length >= 6;
    return hasNumber && hasUpperCase && isLengthValid;
  }
  
  async function handleFormSubmit(ev) {
    ev.preventDefault();

    if (!validateEmail(email)) {
      setError("invalidEmail");
      return;
    }

    if (!validatePassword(password)) {
      setError("invalidPassword");
      return;
    }

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
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="bg-red-700 pt-20 pb-20">
      {userCreated && (
        <div className="my-4 text-center">
          Sikeresen regisztráltál! Mostmár bejelentkezhetsz!
          <Link className="underline" href={'/login'}>Bejelentkezés</Link>
        </div>
      )}
      {error === "invalidEmail" && (
        <div className="my-4 text-center">
          Hibás email cím formátum. Kérlek, adj meg egy érvényes email címet!
        </div>
      )}
      {error === "invalidPassword" && (
        <div className="my-4 text-center">
          A jelszónak legalább egy nagybetűt és egy számot kell tartalmaznia és min 6karakter!
        </div>
      )}
     
      <div className="text-center mb-5 font-bold text-4xl text-white italic">
        <h1>Regisztráció</h1>
      </div>
      <div className="bg-white max-w-sm m-auto pt-10 pb-10 rounded-3xl shadow-2xl">
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
          <div className="flex flex-row">
            <div className="flex flex-col basis-1/6">
              <img src={'/user.svg'} width={24} height={32} className="m-auto" alt="User icon"/>
            </div>
            <div className="flex flex-col basis-5/6">
              <input type="email" placeholder="E-mail cím" value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)}/>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col basis-1/6">
              <img src={'/password.svg'} width={24} height={32} className="m-auto" alt="Password icon"/>
            </div>
            <div className="flex flex-col basis-5/6">
              <input type="password" placeholder="Jelszó" value={password} disabled={creatingUser} onChange={ev => setPassword(ev.target.value)}/>
            </div>
          </div>
          <button type="submit" disabled={creatingUser} className="mt-2">Regisztráció</button>
          <div className="my-4 text-center text-gray-500">Már van fiókod? <Link className="underline" href={'/login'}>Jelentkezz be!</Link></div>
          <hr/>
          <div className="my-4 text-center text-gray-500">Vagy</div>
          <button  onClick={() => signIn('google', {callbackUrl:'/'})} className="flex gap-4 justify-center">
            <Image src={'/google.png'} alt={'Belépés googlel'} width={24} height={32}/>
            Belépés Google fiókkal
          </button>
        </form>
      </div>
    </section>
  );
}
