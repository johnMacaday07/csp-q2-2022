import express, { Application } from "express";
import cors from "cors";
import dockingRoutes from './routes/dockingRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

app.use('/api', dockingRoutes);

app.listen(8888, (): void => {
  console.log("Express server listening on port 8888");
});
