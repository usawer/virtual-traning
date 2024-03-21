import { Roboto } from 'next/font/google'
import './globals.css'
import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";


import { Toaster } from 'react-hot-toast';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700']})

export const metadata = {
  title: 'VirtualTraniner'
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={roboto.className}>
        <main className=" max-w-7xl mx-auto p-4">
         <AppProvider>
          <Toaster>

          </Toaster>
        <Header/>
        {children}
        <footer className="border-t p-8 text-center  text-gray-600 mt-16"> 
      &copy; 2024 Minden jog fenntartva!
    </footer>
    </AppProvider>
        </main>
        </body>
    </html>
  )
}
