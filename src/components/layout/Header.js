"use client"
import {signOut, useSession} from "next-auth/react";
import Link from "next/link"

export default function Header(){
  
  const session = useSession();

  const status = session?.status;
  const userData = session.data?.user;
  let username = userData?.name || userData?.email;
  if (username && username.includes(' ')) {
    username = username.split(' ')[0];
  }
    return(
        <header className="flex item-center justify-between p-5 max-w-6xl m-auto">
      
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={'/'}><img className="w-24 h-34" src="/logo.png"></img></Link>
         <Link className="hover:text-red-700 focus:text-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={'/gyakorlatok'}><img className="w-5 h-5 float-left mt-0.5" src="/sulyzo1.png"></img>Gyakorlatok<img className="w-5 h-5 float-right mt-0.5" src="/sulyzo2.png"></img></Link>
         <Link className="hover:text-red-700 focus:text-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={'/kalkulatorok'}><img className="w-5 h-5 float-left mt-0.5" src="/sulyzo1.png"></img>Kalkulátorok<img className="w-5 h-5 float-right mt-0.5" src="/sulyzo2.png"></img></Link>
         <Link className="hover:text-red-700 focus:text-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" href={''}><img className="w-5 h-5 float-left mt-0.5" src="/sulyzo1.png"></img>Kapcsolat<img className="w-5 h-5 float-right mt-0.5" src="/sulyzo2.png"></img></Link>
         
      </nav>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        {status === 'authenticated' && (
      <>
      
      <Link href={'/profil'} className="whitespace-nowrap hover:text-red-700 focus:text-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">{username}</Link>
            <button onClick={() => signOut()} callbackURL={'/'} className="bg-primary text-white px-6 rounded-lg  text-white px-8 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-white hover:text-red-700 hover:border-solid hover:border hover:border-red-700">Kijelentkezés</button>
   
      </>
   
      )}
      
      {status === 'unauthenticated' && (
        <>
       <Link href={'/register'} className="hover:text-red-700 focus:text-red-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Regisztráció</Link>
      <Link href={'/login'} className="bg-primary text-white px-6 rounded-lg  text-white px-8 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-white hover:text-red-700 hover:border-solid hover:border hover:border-red-700">Bejelentkezés</Link>
        </>
        )}
      

      
      </nav>
    </header>
    
    )

}