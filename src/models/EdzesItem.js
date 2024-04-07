import mongoose, { Schema, model, models } from "mongoose";



const EdzesItemSchema = new Schema({
    image: {type: String},
    nev: {type: String},
    leiras: {type: String},
    nehezseg: {type: String},
    aktivizom: {type: String},
    tippek: {type: String},
    hogyan: {type: String},
    eszkoz: {type: String},
    konnyebb: {type: String},
    nehezebb: {type: String},
    kategoria: {type: mongoose.Types.ObjectId}
    



}, {timestamps:true});

export const EdzesItem = models?.EdzesItem || model('EdzesItem', EdzesItemSchema);