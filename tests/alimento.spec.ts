import 'mocha';
import {expect} from 'chai';

import {Food} from "../src/alimento";
import * as Alimento from "../src/database/aliments";

describe('Food function test', () => {
  const Almendra: Food = new Food('Almendra',
      'España', [431, 9, 57, 18.1], 5.05, 'Grupo1');

  it('Creación de objeto Food ', () => {
    expect(new Food('Almendra', 'España',
        [431, 9, 57, 18.1], 5.05, 'Grupo1')).not.to.be.equal(null);
  });
  it('Comprobación de getName()', () => {
    expect(Alimento.Aguacate.getName()).to.be.equal('Aguacate');
  });
  it('Comprobación de getGroup()', () => {
    expect(Almendra.getGroup()).to.be.equal('Grupo1');
  });
  it('Comprobación de getLocal()', () => {
    expect(Almendra.getLocal()).to.be.equal('España');
  });
  it('Comprobación de getPrice()', () => {
    expect(Almendra.getPrice()).to.be.equal(5.05);
  });
  it('Comprobación de getNutrients()', () => {
    expect(Almendra.getNutrients()).eql([431, 9, 57, 18.1]);
  });
  it('Comprobación de getInfo()', () => {
    // eslint-disable-next-line max-len
    expect(Almendra.getInfo()).to.be.equal('Nombre: Almendra, Origen: España, Precio: 5.05 €/kg, Grupo1, Nutrientes (100 g):\n Calorías: 431, Lipidos: 9, Hidratos: 57, Proteinas: 18.1');
  });
});
