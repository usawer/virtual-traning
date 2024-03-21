"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function FelhTabs({isAdmin}){
    const path = usePathname();

    return(
        <div className="flex mx-auto gap-2 tabs justify-center ">
        <Link className={path === '/profil' ? 'active' : ''} href={'/profil'}>Profil</Link>
        {isAdmin &&(
            <>
            <Link className={path === '/kategoria' ? 'active' : ''} href={'/kategoria'}>Kategoriak</Link>
            <Link  className={path === '/edzesek' ? 'active' : ''} href={'/edzesek'}>Edzesek</Link>
            <Link  className={path === '/felhasznalok' ? 'active' : ''} href={'/felhasznalok'}>Felhasznalok</Link>
            </>
        )}
    </div>
    )
}