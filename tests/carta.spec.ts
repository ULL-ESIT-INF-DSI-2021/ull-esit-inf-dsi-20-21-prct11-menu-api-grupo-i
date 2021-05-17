import 'mocha';
import {expect} from 'chai';

import {Menu, menu} from "../src/menu";
import {Plate} from "../src/plato";
import {Food} from "../src/alimento";
import {Carta} from "../src/carta";

const Tomate: Food = new Food('Tomate',
    'España', [22, 1, 3.5, 0.11], 1.75, 'Grupo2');
const Lechuga: Food = new Food('Lechuga',
    'España', [14, 1.34, 1.4, 0.2], 2.39, 'Grupo2');
const Cebolla: Food = new Food('Cebolla',
    'España', [33, 1.4, 7, 0], 1.19, 'Grupo2');
const Plato1 = new Plate('Ensalada', 'Primer plato',
    [Tomate, Lechuga, Cebolla], [200, 120, 100]);
const menu1: menu=[Plato1, Plato1, Plato1];
const menu11 = new Menu(menu1);
const carta = new Carta([menu11], [Plato1, Plato1]);

describe('Carta function test', () => {
  it('Creación de objeto Carta ', () => {
    expect(new Carta([menu11], [Plato1, Plato1])).not.to.be.equal(null);
  });
  it('Comprobación de getMenu', () => {
    expect(carta.getMenus()).eql([menu11]);
  });
  it('Comprobación de getPlatos', () => {
    expect(carta.getPlatos()).eql([Plato1, Plato1]);
  });
});
