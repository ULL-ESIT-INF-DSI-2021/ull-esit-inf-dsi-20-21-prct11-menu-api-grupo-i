import * as express from 'express';
import {Ingredient} from '../models/alimentoSch';

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
