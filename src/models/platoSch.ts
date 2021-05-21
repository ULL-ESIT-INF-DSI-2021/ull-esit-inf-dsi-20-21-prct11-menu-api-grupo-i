import {Document, Schema, model} from 'mongoose';
import {ingredientInterface} from './alimentoSch';
import {Food} from './alimento';

export interface plateInterface extends Document {
  nombre: string,
  amount: number[],
  nutrients: number[],
  price: number,
  foods: ingredientInterface[],
  category: 'Entrante' | 'Primer plato' | 'Segundo plato' | 'Postre'
}

const plateSchema = new Schema({
  nombre: {
    type: String,
    unique: true,
    required: true,
    trim: true,
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
      required: true,
      trim: true,
    },
  ],
  price:
    {
      type: Number,
      required: true,
      trim: true,
    },
  foods:
  [
    {
      type: Array,
      ingrediente: Food,
      required: true,
      trim: true,
    },
  ],
  category: {
    type: String,
    required: true,
    trim: true,
    enum: ['Entrante', 'Primer plato', 'Segundo plato', 'Postre'],
  },
});

export const Plate = model<plateInterface>('plate', plateSchema);
