import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeaders"
export default function HomeMenu(){
    return(
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start "> 
                <div className="h-48  w-48 absolute left-0 ">
                <Image src={'/sulyzo1.png'} layout={'fill'} objectFit={'contain'}  lalt={'sulyzo'}/>
                </div>
                <div className="h-48  w-48 absolute right-0">
                <Image src={'/sulyzo2.png'} layout={'fill'} objectFit={'contain'}  lalt={'sulyzo'}/>
                </div>
            </div>
        <div className="text-center mb-8">

        <SectionHeaders subHeader={'Mentés'} mainHeader={'Menü'} />
      
        </div>
        <div className=" grid grid-cols-3  gap-4 ">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                
        </div>
        </section>
    )
}