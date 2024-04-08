import Link from "next/link";
import Slideshow from "@/components/layout/Slideshow";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";

export default function Home() {
  return (
    <>
    <Slideshow/>
    <hr className="mt-2"></hr>
    <section className="text-center">
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/3 pt-5 py-5">
          <SectionHeaders mainHeader={"Kategorizált gyakorlatok"}/>
          <p className="text-xl mt-5">Gyakorlatok tárháza, tippekkel, tanácsokkal, profiktól kezdőknek.</p>
        </div>
        <div className="flex flex-col basis-1/3 bg-gray-200 py-5">
          <SectionHeaders mainHeader={"Kalkulátorok"}/>
          <p className="text-xl mt-5">Kalkulátorok melyek elengedhetetlenek testünk fejlődésének nyomonkövetéséhez.</p>
        </div>
        <div className="flex flex-col basis-1/3 py-5">
          <SectionHeaders mainHeader={"Edzésterv összeállító"}/>
          <p className="text-xl mt-5">Rendszerezett, szerkezthető edzésterv, hogy sose felejtsd el melyik gyakorlat van soron.</p>
        </div>
      </div>
    </section>
     
 
    </>
  )
}
