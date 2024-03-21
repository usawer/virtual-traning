"use client";
import {signIn} from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import SectionHeaders from "@/components/layout/SectionHeaders";


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
        <section className="block max-w-xs mx-auto text-center mt-14">
        <SectionHeaders mainHeader="Bejelentkezés"/>
        <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}  >
        <input type="email" name="email" placeholder="email" value={email} disabled={loginInProgress} onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" name="password" placeholder="jelszó" value={password} disabled={loginInProgress}  onChange={ev => setPassword(ev.target.value)}/>
        <button disabled={loginInProgress} type="submit">Bejelentkezés</button>
        <div className="my-4 text-center text-gray-500">Vagy Bejelentkezés Google segítségével</div>
        <button type="button" onClick={() => signIn('google', {callbackUrl: '/'})} className="flex gap-4 justify-center">
            <Image src={'/google.png'} alt={'Belépés googlel'} width={24} height={32}/>
            Belépés Google fiókkal
            </button>
        </form>
        </section>
    );
}