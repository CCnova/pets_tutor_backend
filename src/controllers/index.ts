import { PetRepository, TutorRepository } from "../repositories";
import PetControllerGenerator from "./pet.controller";
import TutorControllerGenerator from "./tutor.controller";

const PetController = PetControllerGenerator(PetRepository);
const TutorController = TutorControllerGenerator(TutorRepository);

export { PetController, TutorController };
