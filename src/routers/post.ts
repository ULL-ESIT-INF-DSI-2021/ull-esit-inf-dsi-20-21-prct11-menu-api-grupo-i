import * as express from 'express';
import {ingredient} from '../models/ingrediente';

export const postRouter = express.Router();

postRouter.post('/ingredients', async (req, res) => {
  const ingrediente = new ingredient(req.body);

  try {
    await ingrediente.save();
    res.status(201).send(ingrediente);
  } catch (error) {
    res.status(400).send(error);
  }
});