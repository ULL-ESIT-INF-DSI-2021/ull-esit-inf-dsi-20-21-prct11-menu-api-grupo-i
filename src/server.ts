import * as express from 'express';

const app = express();

app.get('/ingredients', (req, res) => {
  if (!req.query.cmd) {
    res.send({
      error: 'At least, a command must be specified',
    });
  } else {
    const command = req.query.cmd.toString();
    const args = req.query.args? req.query.args?.toString().split(' '): [];
  }
});

app.get('*', (_, res) => {
  res.send('<h1>404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
