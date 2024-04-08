import { User } from "@/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const pass = body.password;

  if (!pass?.length || pass.length < 5) {
    throw new Error('Password must be at least 5 characters');
  }

  // Ellenőrizzük, hogy az adott e-mail cím már szerepel-e az adatbázisban
  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    throw new Error('Email already registered');
  }

  const notHashedPassword = pass;
  const salt = bcrypt.genSaltSync(10);
  body.password = bcrypt.hashSync(notHashedPassword, salt);

  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
