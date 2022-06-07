import dotenv from 'dotenv';
import { Pet } from "./entity/Pet.entity";
import { Tutor } from "./entity/Tutor.entity";

if (process.env.NODE_ENV !== 'production') dotenv.config();

// Especifies which entities should be considered.
const entities = [
  Tutor,
  Pet,
];

const type = 'postgres';
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const username = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

export default {
  entities,
  type,
  host,
  port,
  username,
  password,
  database
};