import { Schema, model, models } from "mongoose";

const KategoriaSchema = new Schema({
    name: {type:String, required:true},
}, {timestamps: true})

export const Kategoria = models?.Kategoria || model('Kategoria', KategoriaSchema);