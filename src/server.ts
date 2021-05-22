import * as express from 'express';
import './database/mongoose';
import {postRouter} from './routers/post';
import {getRouter} from './routers/get';
import {deleteRouter} from './routers/delete';
import {defaultRouter} from './routers/default';
import {patchRouter} from './routers/patch';

const app = express();
app.use(express.json());
app.use(postRouter);
app.use(getRouter);
app.use(deleteRouter);
app.use(defaultRouter);
app.use(patchRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
