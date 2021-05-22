/* import * as express from 'express';
import {Ingredient, ingredientInterface} from '../models/alimentoSch';
import {Plate, plateInterface} from '../models/platoSch';
import {Menu} from '../models/menuSch';


export const patchRouter = express.Router();

patchRouter.patch('/ingredients', async (req, res) => {
  if (!req.query.name) {
    return res.status(400).send({
      error: 'A title must be provided',
    });
  }
  const allowedUpdates = ['name', 'locality', 'nutrients', 'price', 'group'];
  const actualUpdates = Object.keys(req.body);
  const isValidUpdate = 
  actualUpdates.every((update) => allowedUpdates.includes(update));

  if (!isValidUpdate) {
    res.status(400).send({
      error: 'Update is not permitted',
    });

    ingredientSchema.findOneAndUpdate({nombre: req.query.nameIngredient.toString()}, req.body, {
      new: true,
      runValidators: true,
    }).then((ingrediente) => {
      if (!ingrediente) {
        res.status(404).send();
      } else {
        res.send(ingrediente);
      }
    }).catch((error) => {
      res.status(400).send(error);
    });
});

*/
