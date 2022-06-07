import express from 'express';
import { PetRouter, TutorRouter } from './routers';

const app = express();

app.use(express.json());

app.use('/api/pets', PetRouter);
app.use('/api/tutors', TutorRouter);

export default app;