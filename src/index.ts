import app from './app';
import { databaseHelper } from './helpers/database.helper';
import server from './server';

databaseHelper.connect().then(() => {
  server.start(app);
});
