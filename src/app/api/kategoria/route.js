import { Kategoria } from "@/models/Kategoria";

export async function POST(req){
    const {name} = await req.json();
   const  categoryDoc = await Kategoria.create({name});

   return Response.json(categoryDoc);
}

export async function GET() {
    return Response.json(
        await Kategoria.find()
    );
}