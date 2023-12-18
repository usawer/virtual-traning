import bcrypt from 'bcrypt';
import {model, models, Schema} from "mongoose";

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    validate: pass => {
      if(!pass?.length ||pass.length < 5){
        new Error('A jelszonak legalább 5 karakternek kell lennie');
        
      }
      
    }
  },
 
}, {timestamps: true});
//titkosítani a fiók jelszót
UserSchema.post('validate', function (user){
  const notHashedPass = user.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPass, salt);

}) 
export const User = models?.User || model('User', UserSchema);