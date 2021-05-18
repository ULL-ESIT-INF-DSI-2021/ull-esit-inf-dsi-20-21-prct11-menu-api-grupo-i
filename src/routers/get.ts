import * as express from 'express';
import {ingrediente, plato, menu} from '../functions';

// eslint-disable-next-line new-cap
export const getRouter = express.Router();

getRouter.get('/ingredients', (req, res) => {
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

getRouter.get('/courses', (req, res) => {
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

getRouter.get('/menus', (req, res) => {
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
