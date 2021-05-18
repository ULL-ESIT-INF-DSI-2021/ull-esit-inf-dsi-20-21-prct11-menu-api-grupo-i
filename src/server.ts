import * as express from 'express';
import {ingrediente, plato, menu} from './functions';

const app = express();

app.get('/ingredients', (req, res) => {
  if (!req.query.cmd) {
    res.send({
      error: 'Al menos se debe especificar un comando',
    });
  } else {
    const command = req.query.cmd.toString();

    ingrediente(command, (err, out) => {
      if (err) {
        res.send({
          error: err,
        });
      } else if (out) {
        res.send({
          output: out,
        });
      }
    });
  }
});

app.get('/courses', (req, res) => {
  if (!req.query.cmd) {
    res.send({
      error: 'Al menos se debe especificar un comando',
    });
  } else {
    const command = req.query.cmd.toString();

    plato(command, (err, out) => {
      if (err) {
        res.send({
          error: err,
        });
      } else if (out) {
        res.send({
          output: out,
        });
      }
    });
  }
});

app.get('/menus', (req, res) => {
  if (!req.query.cmd) {
    res.send({
      error: 'Al menos se debe especificar un comando',
    });
  } else {
    const command = req.query.cmd.toString();

    menu(command, (err, out) => {
      if (err) {
        res.send({
          error: err,
        });
      } else if (out) {
        res.send({
          output: out,
        });
      }
    });
  }
});

app.all('*', (_, res) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
