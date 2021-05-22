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
  const {name, amount, price, nutrients, foods, predominant, category} = req.body;

  const ingredientesVector: ingredientInterface[] = [];
  let aux;
  for (let i = 0; i < foods.length; i++) {
    aux = await Ingredient.findOne({name: foods[i].name});
    if (!(aux === null)) {
      ingredientesVector.push(aux);
    } else {
      res.status(400).send({
        error: 'El ingrediente no se encuentra en la base de datos',
      });
    }
  }
  console.log(name);
  const plato = new Plate({
    "name": name,
    "amount": amount,
    "price": price,
    "nutrients": nutrients,
    "foods": ingredientesVector,
    "predominant": predominant,
    "category": category,
  });
  console.log(plato);
  try {
    await plato.save();
    res.status(201).send(plato);
  } catch (error) {
    res.status(401).send(error);
  }
});
