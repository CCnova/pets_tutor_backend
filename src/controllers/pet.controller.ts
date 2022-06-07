import { IPetController, IPetRepository } from "../interfaces";

const PetController = (repository: IPetRepository): IPetController => ({

  async list(request: any, response: any) {
    response.send("pet list");
  },

  async post(request: any, response: any) {
    const { name, age, breed } = request.body;
    try {
      const newPet = await repository.create({ name, age, breed });
      response.status(201).send(newPet);
    } catch(error) {
      response.status(500).send(error);
    }

  },

});

export default PetController;