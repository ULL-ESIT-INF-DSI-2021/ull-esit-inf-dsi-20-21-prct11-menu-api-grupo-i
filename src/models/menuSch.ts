import {Document, Schema, model} from 'mongoose';
import {plateInterface, plateSchema} from './platoSch';

export interface menuInterface extends Document {
  name:string,
  platos:plateInterface[],
  price:number,
  nutrients:number[],
}

export const menuSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Menu title must start with a capital letter');
      }
    },
  },
  nutrients: [
    {
      type: [Number],
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
  platos:
    {
      type: [plateSchema],
      required: true,
      trim: true,
    },

});

export const Menu = model<menuInterface>('menu', menuSchema);
