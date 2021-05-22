import * as express from 'express';
import {getRouter} from './routers/get';
import {postRouter} from './routers/post';
import {deleteRouter} from './routers/delete';
import './database/mongoose';


const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(getRouter);
app.use(postRouter);
app.use(deleteRouter);

app.all('*', (_, res) => {
  res.status(501).send();
});

app.listen(3000, () => {
  console.log(`Server is up on port ${port}`);
});
