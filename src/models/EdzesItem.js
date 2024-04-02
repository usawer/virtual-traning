import mongoose, { Schema, model, models } from "mongoose";

const EdzesItemSchema = new Schema({
    image: {type: String},
    nev: {type: String},
    leiras: {type: String},
    nehezseg: {type: String},
    kategoria: {type: mongoose.Types.ObjectId},



}, {timestamps:true});

export const EdzesItem = models?.EdzesItem || model('EdzesItem', EdzesItemSchema);