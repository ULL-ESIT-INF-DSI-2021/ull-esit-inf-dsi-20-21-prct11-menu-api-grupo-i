import * as express from 'express';
import {Ingredient} from '../models/alimentoSch';
import {Plate} from '../models/platoSch';
import {Menu} from '../models/menuSch';

// eslint-disable-next-line new-cap
export const deleteRouter = express.Router();

deleteRouter.delete('/ingredients', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A title must be provided',
    });
  }

  try {
    const ingredient = await Ingredient.findOneAndDelete({
      name: req.query.name.toString()});

    if (!ingredient) {
      return res.status(404).send();
    }
    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/courses', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A title must be provided',
    });
  }

  try {
    const plate = await Plate.findOneAndDelete({
      name: req.query.name.toString()});

    if (!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(400).send();
  }
});

deleteRouter.delete('/menus', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A title must be provided',
    });
  }

  try {
    const menu = await Menu.findOneAndDelete({
      name: req.query.name.toString()});

    if (!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(400).send();
  }
});

