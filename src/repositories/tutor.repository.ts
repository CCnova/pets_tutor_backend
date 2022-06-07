import { Tutor } from "../entity/Tutor.entity";
import { databaseHelper } from "../helpers/database.helper";
import ITutorRepository from "../interfaces/tutor/ITutorRepository";
import { PostTutorDTO } from "../types/dtos/tutor.dtos";

const TutorRepository = (): ITutorRepository => ({
  async create(data: PostTutorDTO): Promise<Tutor | undefined> {
    const newTutor = new Tutor(data.name);
    const repository = databaseHelper.getRepository(Tutor);
    const result = await repository?.save(newTutor);

    return result;
  }
});

export default TutorRepository;