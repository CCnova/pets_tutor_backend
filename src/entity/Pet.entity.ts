import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tutor } from "./Tutor.entity";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor;

  constructor(name: string, age:number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}