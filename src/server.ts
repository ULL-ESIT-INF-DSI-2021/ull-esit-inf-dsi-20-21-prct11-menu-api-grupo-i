import * as express from 'express';
import {getRouter} from './routers/get';

const app = express();
const port = process.env.PORT || 3000;
app.use(getRouter);

app.all('*', (_, res) => {
  res.status(501).send();
});

app.listen(3000, () => {
  console.log(`Server is up on port ${port}`);
});
