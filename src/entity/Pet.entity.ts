import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tutor } from "./Tutor.entity";

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  breed: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.pets)
  tutor: Tutor;
}