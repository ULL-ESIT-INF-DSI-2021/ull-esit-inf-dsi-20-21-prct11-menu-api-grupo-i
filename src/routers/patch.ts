import * as express from 'express';
import { Ingredient, /*ingredientInterface*/ } from '../models/alimentoSch';
//import { Plate, plateInterface } from '../models/platoSch';
//import { Menu } from '../models/menuSch';


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
    await Ingredient.findOneAndUpdate({name: req.query.name.toString()}, req.body, {
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