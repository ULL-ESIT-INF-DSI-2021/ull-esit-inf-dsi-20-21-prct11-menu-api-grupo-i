import {Document, Schema, model} from 'mongoose';

export interface ingredientInterface extends Document {
  name: string,
  locality: string,
  nutrients: number[],
  price: number,
  group: 'Grupo1'| 'Grupo2'| 'Grupo3'| 'Grupo4'| 'Grupo5'
}

export const ingredientSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Ingredient title must start with a capital letter');
      }
    },
  },
  locality: {
    type: String,
    required: true,
    trim: true,
  },
  nutrients: {
    type: [Number],
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  group: {
    type: String,
    required: true,
    trim: true,
    enum: ['Grupo1', 'Grupo2', 'Grupo3', 'Grupo4', 'Grupo5'],
  },
});

export const Ingredient = model<ingredientInterface>(
    'ingredient', ingredientSchema);
