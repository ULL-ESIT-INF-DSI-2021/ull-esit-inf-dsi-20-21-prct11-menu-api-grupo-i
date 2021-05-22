import * as express from 'express';
import {Ingredient} from '../models/alimentoSch';
import {Plate} from '../models/platoSch';
import {Menu} from '../models/menuSch';


// eslint-disable-next-line new-cap
export const getRouter = express.Router();

/**
 * Métodos get de ingredeintes
 */
getRouter.get('/ingredients', async (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  try {
    const ingredients = await Ingredient.find(filter);

    if (ingredients.length !== 0) {
      return res.send(ingredients);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/ingredients: id', async (req, res) => {
  try {
    const ingredients = await Ingredient.findById(req.params.id);

    if (!ingredients) {
      return res.status(404).send();
    }
    return res.send(ingredients);
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Métodos get de platos
 */
getRouter.get('/courses', async (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  try {
    const plate = await Plate.find(filter);

    if (plate.length !== 0) {
      return res.send(plate);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/courses: id', async (req, res) => {
  try {
    const plate = await Plate.findById(req.params.id);

    if (!plate) {
      return res.status(404).send();
    }
    return res.send(plate);
  } catch (error) {
    return res.status(500).send();
  }
});

/**
 * Métodos get de menu
 */
getRouter.get('/menus', async (req, res) => {
  const filter = req.query.name?{name: req.query.name.toString()}:{};

  try {
    const menu = await Menu.find(filter);

    if (menu.length !== 0) {
      return res.send(menu);
    }
    return res.status(404).send();
  } catch (error) {
    return res.status(500).send();
  }
});

getRouter.get('/menus: id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).send();
    }
    return res.send(menu);
  } catch (error) {
    return res.status(500).send();
  }
});
