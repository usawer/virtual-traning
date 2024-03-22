import mongoose from "mongoose";
import { EdzesItem } from "@/models/EdzesItem";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const EdzesItemDoc = await EdzesItem.create(data);
    return Response.json(EdzesItemDoc)
}

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id, ...data} = await req.json();
    await EdzesItem.findByIdAndUpdate(_id, data);
    return Response.json(true);
    
}
export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await EdzesItem.find()
    );

}
export async function DELETE(req){
    mongoose.connect(process.env.MONGO_URL);
    const url = new URL(req.url);
     const _id = url.searchParams.get('_id');
     await EdzesItem.deleteOne({_id});
    return Response.json(true);
}