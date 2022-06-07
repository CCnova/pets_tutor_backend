import { DataSource } from "typeorm";
import { Pet } from "./entity/Pet.entity";
import { Tutor } from "./entity/Tutor.entity";

// Especifies which entities should be considered.
const entities = [
  Tutor,
  Pet,
];

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: true,
  entities,
  subscribers: [],
  migrations: [],
});
