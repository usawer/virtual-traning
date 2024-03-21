import { Kategoria } from "@/models/Kategoria";
import mongoose from "mongoose";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL); 
       const {name} = await req.json();
   const  categoryDoc = await Kategoria.create({name});

   return Response.json(categoryDoc);
}

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id, name} = await req.json();
    await Kategoria.updateOne({_id}, {name});
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Kategoria.find()
    );
}