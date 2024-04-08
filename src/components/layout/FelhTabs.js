"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function FelhTabs({isAdmin}){
    const path = usePathname();

    return(
        <div className="flex mx-auto border-b tabs justify-center  ">
        <Link className={path === '/profil' ? 'active' : ''} href={'/profil'}>Profil</Link>
        <Link  className={path.includes('/edzesterv') ? 'active' : ''} href={'/edzesterv'}>Edzésterv</Link>

        {isAdmin &&(
            <>
            <Link className={path === '/kategoria' ? 'active' : ''} href={'/kategoria'}>Kategóriák</Link>
            <Link  className={path === '/edzesek' ? 'active' : ''} href={'/edzesek'}>Gyakorlatok</Link>
            <Link  className={path.includes('/felhasznalok') ? 'active' : ''} href={'/felhasznalok'}>Felhasználók</Link>
            
            </>
        )}
    </div>
    )
}