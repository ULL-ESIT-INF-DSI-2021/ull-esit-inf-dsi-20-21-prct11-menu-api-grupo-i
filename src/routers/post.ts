import * as express from 'express';
import {totalComposition, totalPrice, predGroup,
  priceMenu, compositionMenu} from '../function';
import {Ingredient, ingredientInterface} from '../models/alimentoSch';
import {Plate, plateInterface} from '../models/platoSch';
import {Menu} from '../models/menuSch';

// eslint-disable-next-line new-cap
export const postRouter = express.Router();
/**
 * Método para añadir un nuevo ingrediente a la bbdd
 */
postRouter.post('/ingredients', async (req, res) => {
  const ingrediente = new Ingredient(req.body);

  try {
    await ingrediente.save();
    res.status(201).send(ingrediente);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * Metodo para añadir un plato a la base de datos
 */
postRouter.post('/courses', async (req, res) => {
  const {name, amount, foods, category} = req.body;

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

  const compTotal = totalComposition(ingredientesVector, amount);
  const precioTotal = totalPrice(ingredientesVector, amount);
  const predom = predGroup(ingredientesVector);
  const plato = new Plate({
    "name": name,
    "amount": amount,
    "price": precioTotal,
    "nutrients": compTotal,
    "foods": ingredientesVector,
    "predominant": predom,
    "category": category,
  });

  try {
    await plato.save();
    res.status(201).send(plato);
  } catch (error) {
    res.status(401).send(error);
  }
});

postRouter.post('/menus', async (req, res) => {
  const {name, platos} = req.body;
  const platosVector: plateInterface[] = [];
  let aux;
  for (let i = 0; i < platos.length; i++) {
    aux = await Plate.findOne({name: platos[i].name});
    if (!(aux === null)) {
      platosVector.push(aux);
    } else {
      res.status(400).send({
        error: 'El plato no se encuentra en la base de datos',
      });
    }
  }
  const compTotal = compositionMenu(platosVector);
  const precioTotal = priceMenu(platosVector);

  const menu = new Menu({
    "name": name,
    "platos": platosVector,
    "price": precioTotal,
    "nutrients": compTotal,
  });

  try {
    await menu.save();
    res.status(201).send(menu);
  } catch (error) {
    res.status(400).send(error);
  }
});
