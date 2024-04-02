"use client";
import {signIn} from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Link from "next/link";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginProgress] = useState(false);

    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginProgress(true);
        await signIn('credentials', {email, password, callbackUrl: '/' });
         setLoginProgress(false);
    }
    return(
        <section className="bg-red-700 pt-20 pb-20">
            
            <div className="text-center mb-5 font-bold text-4xl text-white italic"><h1>Bejelentkezés</h1></div>
        <div className="bg-white max-w-sm m-auto pt-10 pb-10 rounded-3xl shadow-2xl">        
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <div className="flex flex-row">
        <div className="flex flex-col basis-1/6">
            <img src={'/user.svg'} width={24} height={32} className="m-auto"></img>
            </div>
            <div className="flex flex-col basis-5/6">
            <input type="email" name="email" className="max-w-" placeholder="E-mail cím" value={email} disabled={loginInProgress} onChange={ev => setEmail(ev.target.value)}/>
            </div>
        </div>

        <div className="flex flex-row">
        <div className="flex flex-col basis-1/6">
            <img src={'/password.svg'} width={24} height={32} className="m-auto"></img>
            </div>
            <div className="flex flex-col basis-5/6">
            <input type="password" name="password" placeholder="Jelszó" value={password} disabled={loginInProgress}  onChange={ev => setPassword(ev.target.value)}/>
            </div>
        </div>
            
        
        
        <button disabled={loginInProgress} type="submit" className="mt-2">Bejelentkezés</button>
        <div className="my-4 text-center text-gray-500">Még nincs fiókod? <Link className="underline" href={'/register'}>Regisztrálj!</Link></div>
        <hr></hr>
        <div className="my-4 text-center text-gray-500">Vagy</div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})} className="flex gap-4 justify-center">
            <Image src={'/google.png'} alt={'Belépés googlel'} width={24} height={32}/>
            Belépés Google fiókkal
            </button>
        </form>
        </div>
        </section>
    );
}