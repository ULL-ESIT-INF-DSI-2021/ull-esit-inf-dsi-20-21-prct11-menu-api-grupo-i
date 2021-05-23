import * as express from 'express';
import {Ingredient} from '../models/alimentoSch';
import {Plate} from '../models/platoSch';
import {Menu} from '../models/menuSch';

export const patchRouter = express.Router();

patchRouter.patch('/ingredients', async (req, res) => {
  console.log("Entra");
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'locality', 'nutrients', 'price', 'group'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const ingredient =
    await
    Ingredient.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!ingredient) {
      return res.status(404).send();
    }

    return res.send(ingredient);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/courses', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'amount', 'price', 'foods', 'category'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const plato =
    await Plate.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!plato) {
      return res.status(404).send();
    }

    return res.send(plato);
  } catch (error) {
    return res.status(400).send(error);
  }
});

patchRouter.patch('/menus', async (req, res) => {
  console.log("Entra");
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A name must be provided',
    });
  }

  const allowedUpdates = ['name', 'price', 'platos'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate =
    actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send({
      error: 'Update is not permitted',
    });
  }

  try {
    const menu =
    await Menu.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!menu) {
      return res.status(404).send();
    }

    return res.send(menu);
  } catch (error) {
    return res.status(400).send(error);
  }
});
