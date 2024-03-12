import {model, models, Schema} from "mongoose";

const UserInfoSchema = new Schema({
    email: {type: String, required: true},
    kor: {type: String},
    cel: {type: String},
    suly: {type: String},
    admin: {type: Boolean, default: false},
},{timestamps: true});

export const UserInfo = models?.UserInfo || model('UserInfo', UserInfoSchema);