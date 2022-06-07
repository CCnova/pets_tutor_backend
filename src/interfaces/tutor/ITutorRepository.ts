import { Tutor } from "../../entity/Tutor.entity";
import { PostTutorDTO } from "../../types/dtos/tutor.dtos";

export default interface ITutorRepository {
  create(data: PostTutorDTO): Promise<Tutor | undefined>;
}