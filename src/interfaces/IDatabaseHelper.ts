import { EntityManager, EntityTarget, Repository } from "typeorm";

export default interface IDatabaseHelper {
  manager?: EntityManager;
  connect: () => Promise<void>;
  disconnect?: () => Promise<void>;
  getRepository<Entity>(entity: EntityTarget<Entity>): Repository<Entity> | undefined;
}