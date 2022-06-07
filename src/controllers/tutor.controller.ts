import ITutorController from "../interfaces/tutor/ITutorController.interface";
import ITutorRepository from "../interfaces/tutor/ITutorRepository";


const TutorController = (repository: ITutorRepository): ITutorController => ({
  async list(request: any, response: any) {
    response.send("tutor list");
  },

  async post(request: any, response: any) {
    const { name } = request.body;
    try {
      const newTutor = await repository.create({ name });
      response.status(201).send(newTutor);
    } catch(error) {
      response.status(500).send(error);
    }
  },
});

export default TutorController;