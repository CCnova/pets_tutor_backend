import { Pet } from "../entity/Pet.entity";
import { databaseHelper } from "../helpers/database.helper";
import { IPetRepository } from "../interfaces";
import { PostPetDTO } from "../types/dtos/pet.dtos";

const PetRepository = (): IPetRepository => ({
  async create(data: PostPetDTO) {
    const newPet = new Pet(data.name, data.age, data.breed);
    const repository = databaseHelper.getRepository(Pet);
    const result = await repository?.save(newPet);
    return result;
  },
});

export default PetRepository;