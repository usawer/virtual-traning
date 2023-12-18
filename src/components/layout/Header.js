"use client"
import {signOut, useSession} from "next-auth/react";
import Link from "next/link"
export default function Heeader(){
  
  const session = useSession();
  console.log(session)
  const status = session.status
    return(
        <header className="flex item-center justify-between">
      
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl"href={'/'}>VirtualTraning</Link>
         <Link href={'/'}>Kezőlap</Link>
         <Link href={''}>Navigáció</Link>
         <Link href={''}>További</Link>
         <Link href={''}>Kontakt</Link>
         
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {status == 'authenticated' && (
      
      <button onClickc={() => signOut()} className="bg-primary text-white px-6 rounded-full  text-white px-8 py-2">Kijelentkezés</button>
      )}
      
      {status !== 'authenticated' && (
        <>
       <Link href={'/register'}>Regiszráció</Link>
      <Link href={'/login'} className="bg-primary text-white px-6 rounded-full  text-white px-8 py-2">Login</Link>
        </>
        )}
      

      
      </nav>
    </header>
    
    )

}