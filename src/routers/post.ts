import * as express from 'express';
import {Ingredient/* , ingredientInterface*/} from '../models/alimentoSch';
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
  const {name, amount, price, nutrients, foods, category} = req.body;
  // const plato = new Plate(req.body);
  /*
  const ingredientesVector: ingredientInterface[] = [];
  let aux;
  console.log(foods);
  for (let i = 0; i < foods.length; i++) {
    const filter = foods[i] ? {nombre: foods[i].toString()} : {};
    aux = await Ingredient.findOne(filter);
    if (!(aux === null)) {
      ingredientesVector.push(aux);
    } else {
      res.status(400).send({
        error: 'El ingrediente no se encuentra en la base de datos',
      });
    }
  }*/
  console.log(foods);
  try {
    // await Adventure.findOne({ country: 'Croatia' }).exec();

    const ingredients = await Ingredient.findOne({name: foods[0]});

    if (!(ingredients === null)) {
      console.log("se econtro")
      return res.send(ingredients);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
  const plato = new Plate({
    "name": name,
    "amount": amount,
    "price": price,
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
