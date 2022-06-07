import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pet } from "./Pet.entity";

@Entity()
export class Tutor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.id)
  pets: Pet[];
}