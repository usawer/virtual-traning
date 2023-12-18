import Image from "next/image";
import Right from "../icons/Right";


export default function Hero(){
    return(
        
            <section className="hero mt-4">
                <div className="py-12"> 
                <h1 className="text-4xl font-semibold  ">A hajtómű <br/> te magad vagy.</h1>
                <p className="my-4 text-gray-500">Az edzés a te hiányzó részed, hogy napról napra jobbá válj</p>
             
                <div className="flex gap-10 text-sm">
                    <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Mentés most 
                        <Right/>
                        </button>
                       
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold" >Tovább nézés <Right/></button>
                </div>
            
                </div>
                <div className="py-12 relative"> 
                <Image src={'/logo.png'}  width={400} height={300} objectFit={'contain'}contain alt={"Virtual Traning"} />
                </div>
           
            </section>
            
    );
}