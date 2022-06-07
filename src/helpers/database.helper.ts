import { DataSource, DataSourceOptions, EntityTarget, Repository } from "typeorm";
import dbConfig from "../db.config";
import { IDatabaseHelper } from "../interfaces";

const databaseHelper: IDatabaseHelper = {
  manager: undefined,

  async connect() {
    const AppDataSource = new DataSource({
      ...(dbConfig as DataSourceOptions),
      synchronize: true,
      logging: true,
      subscribers: [],
      migrations: [],
    });

    const dataSource = await AppDataSource.initialize();
    this.manager = dataSource.manager;
  },

  getRepository<Entity>(entity: EntityTarget<Entity>): Repository<Entity> | undefined {
    return this.manager?.getRepository(entity);
  }

};

export { databaseHelper };
