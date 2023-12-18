import Link from "next/link";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    
    
    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
      <SectionHeaders subHeader={'Egyéb'} mainHeader={'Rólunk'}/>
      <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
      <p > 
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p></div>
      
    </section>
    <section className="text-center my-8">
      <SectionHeaders subHeader={"Kezd el most!"}  mainHeader={"Kontakt"} />
    </section>
 
    </>
  )
}
