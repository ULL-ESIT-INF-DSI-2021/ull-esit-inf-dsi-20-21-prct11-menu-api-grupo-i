import { Document, Schema, model } from 'mongoose';

interface ingredientInterface extends Document {
  /*locality: string,
  nutrients: number[],*/
  price: number,
  //group:  'Grupo1'| 'Grupo2'| 'Grupo3'| 'Grupo4'| 'Grupo5'
}

const ingredientSchema = new Schema({
  // locality: {
  //   type: String,
  //   unique: true,
  //   required: true,
  //   trim: true,
  // },
  // nutrients: {
  //   type: [Number],
  //   required: true,
  //   trim: true,
  // },
  price: {
    type: Number,
    required: true,
    trim: true,
  },/*
  group: {
    type: String,
    required: true,
    trim: true,
    enum: ['Grupo1', 'Grupo2', 'Grupo3', 'Grupo4', 'Grupo5'],
  },*/
});

export const ingredient = model<ingredientInterface>('ingredient', ingredientSchema);
