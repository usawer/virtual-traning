export default function SectionHeaders({subHeader, mainHeader}){
    return(
        <>
        <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
        <h3 className=" text-gray-500 my-4 font-semibold leading-5">{subHeader}</h3>
        </>
    )
}