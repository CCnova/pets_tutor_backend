import dotenv from 'dotenv';
import app from './app';
import server from './server';

if (process.env.NODE_ENV !== 'production') dotenv.config();

server.start(app);

// AppDataSource.initialize().then((dataSource) => {
//   console.log(dataSource.manager);
// });

