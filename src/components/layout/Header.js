"use client"
import {signOut, useSession} from "next-auth/react";
import Link from "next/link"

export default function Heeader(){
  
  const session = useSession();

  const status = session?.status;
  const userData = session.data?.user;
  let username = userData?.name || userData?.email;
  if (username && username.includes(' ')) {
    username = username.split(' ')[0];
  }
    return(
        <header className="flex item-center justify-between">
      
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl"href={'/'}>VirtualTraning</Link>
         <Link href={'/'}>Kezőlap</Link>
         <Link href={'/Calculators'}>Navigáció</Link>
         <Link href={''}>További</Link>
         <Link href={''}>Kontakt</Link>
         
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {status === 'authenticated' && (
      <>
      
      <Link href={'/profil'} className="whitespace-nowrap"> {username}</Link>
            <button onClick={() => signOut()} className="bg-primary text-white px-6 rounded-full  text-white px-8 py-2">Kijelentkezés</button>
   
      </>
   
      )}
      
      {status === 'unauthenticated' && (
        <>
       <Link href={'/register'}>Regiszráció</Link>
      <Link href={'/login'} className="bg-primary text-white px-6 rounded-full  text-white px-8 py-2">Login</Link>
        </>
        )}
      

      
      </nav>
    </header>
    
    )

}