import * as express from 'express';
import {Ingredient, ingredientInterface} from '../models/alimentoSch';
import {Plate} from '../models/platoSch';

export const postRouter = express.Router();

postRouter.post('/ingredients', async (req, res) => {
  const ingrediente = new Ingredient(req.body);

  try {
    await ingrediente.save();
    res.status(201).send(ingrediente);
  } catch (error) {
    res.status(400).send(error);
  }
});

postRouter.post('/courses', async (req, res) => {
  const {nombre, amount, precio, nutrients, foods, category} = req.body;
  const ingredientesVector: ingredientInterface[] = [];
  let aux;
  for (let i = 0; i < foods.length; i++) {
    const filter = foods[i] ? {nombre: foods[i].toString()} : {};
    aux = await Ingredient.findOne(filter);
    if (!(aux === null)) {
      ingredientesVector.push(aux);
    }
  }

  const plato = new Plate({
    "nombre": nombre,
    "amount": amount,
    "precio": precio,
    "nutrients": nutrients,
    "foods": foods,
    "category": category,
  });

  try {
    await plato.save();
    res.status(201).send(plato);
  } catch (error) {
    res.status(400).send(error);
  }
});
