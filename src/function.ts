import {ingredientInterface} from './models/alimentoSch';
import {plateInterface} from './models/platoSch';


export function totalComposition(ingredientVector: ingredientInterface[],
    amount: number[]): number[] {
  let calorias: number = 0;
  let proteinas: number = 0;
  let hidratos: number = 0;
  let lipidos: number = 0;
  let compTotal: number[] = [];
  for (let i = 0; i < ingredientVector.length; i++) {
    calorias += ingredientVector[i].nutrients[0] * amount[i];
    proteinas += ingredientVector[i].nutrients[1] * amount[i];
    hidratos += ingredientVector[i].nutrients[2] * amount[i];
    lipidos += ingredientVector[i].nutrients[3] * amount[i];
  }

  compTotal = [Math.trunc(calorias),
    Math.trunc(proteinas), Math.trunc(hidratos), Math.trunc(lipidos)];

  return compTotal;
}

export function totalPrice(ingredientVector: ingredientInterface[],
    amount: number[]): number {
  let aux: number = 0;
  for (let i = 0; i < ingredientVector.length; i++) {
    aux += ingredientVector[i].price * amount[i];
  }
  return aux;
}

export function predGroup(ingredientVector: ingredientInterface[]): string {
  let g1: number = 0;
  let g2: number = 0;
  let g3: number = 0;
  let g4: number = 0;
  let g5: number = 0;
  let predominant: string = '';
  for (let i = 0; i < ingredientVector.length; i++) {
    switch (ingredientVector[i].group) {
      case 'Grupo1':
        g1++;
        break;
      case 'Grupo2':
        g2++;
        break;
      case 'Grupo3':
        g3++;
        break;
      case 'Grupo4':
        g4++;
        break;
      case 'Grupo5':
        g5++;
        break;
      default:
        break;
    }
  }
  if (g1 == Math.max(g1, g2, g3, g4, g5)) {
    predominant = "Grupo1";
  } else if (g2 == Math.max(g1, g2, g3, g4, g5)) {
    predominant = "Grupo2";
  } else if (g3 == Math.max(g1, g2, g3, g4, g5)) {
    predominant = "Grupo3";
  } else if (g4 == Math.max(g1, g2, g3, g4, g5)) {
    predominant = "Grupo4";
  } else if (g5 == Math.max(g1, g2, g3, g4, g5)) {
    predominant = "Grupo5";
  }
  return predominant;
}

export function priceMenu(platosVector: plateInterface[]): number {
  let aux: number = 0;
  for (let i = 0; i < platosVector.length; i++) {
    aux += platosVector[i].price;
  }
  return aux;
}

export function compositionMenu(platoVector: plateInterface[]): number[] {
  let calorias: number = 0;
  let proteinas: number = 0;
  let hidratos: number = 0;
  let lipidos: number = 0;
  let compTotal: number[] = [];
  for (let i = 0; i < platoVector.length; i++) {
    calorias += platoVector[i].nutrients[0];
    proteinas += platoVector[i].nutrients[1];
    hidratos += platoVector[i].nutrients[2];
    lipidos += platoVector[i].nutrients[3];
  }
console.log(calorias);
  compTotal = [Math.trunc(calorias),
    Math.trunc(proteinas), Math.trunc(hidratos), Math.trunc(lipidos)];

  return compTotal;
}
