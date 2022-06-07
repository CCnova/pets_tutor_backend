import { Pet } from "../../entity/Pet.entity";
import { PostPetDTO } from "../../types/dtos/pet.dtos";

export default interface IPetRepository {
  create(data: PostPetDTO): Promise<Pet | undefined>;
}