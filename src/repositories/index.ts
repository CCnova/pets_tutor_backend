import PetRepositoryGenerator from "./pet.repository";
import TutorRepositoryGenerator from "./tutor.repository";

const PetRepository = PetRepositoryGenerator();
const TutorRepository = TutorRepositoryGenerator();

export { PetRepository, TutorRepository };
