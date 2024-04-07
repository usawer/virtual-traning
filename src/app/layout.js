
import { Roboto } from 'next/font/google'
import './globals.css'
import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";



import { Toaster } from 'react-hot-toast';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700']})

export const metadata = {
  title: 'VirtualTrainer'
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="mx-auto">
         <AppProvider>
          <Toaster>

          </Toaster>
        <Header/>
        {children}
        <footer className=" border-t p-6 text-center  text-gray-600 "> 
         Felelősséget nem vállalunk! &copy; 2024 Minden jog fenntartva!<br></br>
         A felhasznált gyakorlatok adatait a A Student's Anatomy of Exercise Manual című könyv biztosította.
    </footer>
    </AppProvider>
        </main>
        </body>
    </html>
  )
}
