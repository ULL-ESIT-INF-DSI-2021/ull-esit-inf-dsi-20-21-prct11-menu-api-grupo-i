import {Document, Schema, model} from 'mongoose';
import {ingredientInterface, ingredientSchema} from './alimentoSch';

export interface plateInterface extends Document {
  name: string,
  amount: number[],
  nutrients: number[],
  price: number,
  foods: ingredientInterface[],
  predominant: string,
  category: 'Entrante' | 'Primer plato' | 'Segundo plato' | 'Postre'
}

export const plateSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Dish title must start with a capital letter');
      }
    },
  },
  amount: [
    {
      type: Number,
      required: true,
      trim: true,
    },
  ],
  nutrients: [
    {
      type: Number,
      required: false,
      trim: true,
    },
  ],
  price:
    {
      type: Number,
      required: false,
      trim: true,
    },
  foods:
    {
      type: [ingredientSchema],
      required: true,
      trim: true,
    },
  predominant:
    {
      type: String,
      required: false,
      trim: true,
    },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ['Entrante', 'Primer plato', 'Segundo plato', 'Postre'],
  },
});

export const Plate = model<plateInterface>('plate', plateSchema);
