import * as express from 'express';
import {Ingredient} from '../models/alimentoSch';


// eslint-disable-next-line new-cap
export const getRouter = express.Router();

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
