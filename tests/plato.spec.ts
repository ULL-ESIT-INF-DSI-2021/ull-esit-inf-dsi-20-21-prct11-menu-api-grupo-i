import 'mocha';
import {expect} from 'chai';

import {Plate} from "../src/plato";
import * as Alimento from "../src/database/aliments";
import * as Plato from "../src/database/dishes";

describe('Plate function test', () => {
  it('Creación de objeto plate ', () => {
    expect(new Plate('Ensalada', 'Primer plato',
        [Alimento.Tomate, Alimento.Lechuga, Alimento.Cebolla],
        [200, 120, 100])).instanceOf(Plate);
  });
  it('Comprobacion de getComposition', () => {
    expect(Plato.Ensalada.getComposition()).eql([93, 4, 15, 0]);
  });
  it('Comprobación de addPrice y getPrice', () => {
    expect(Plato.Ensalada.getPrice()).to.be.equal(5.5);
  });
  it('Comprobación de foodPredominante TartarSalmonAguacate', () => {
    expect(Plato.TartarSalmonAguacate.getPredominant()).to.be.equal('Grupo1');
  });
  it('Comprobación de foodPredominante Ensalada', () => {
    expect(Plato.Ensalada.getPredominant()).to.be.equal('Grupo2');
  });
  it('Comprobación de foodPredominante HeladoCasa', () => {
    expect(Plato.HeladoCasa.getPredominant()).to.be.equal('Grupo3');
  });
  it('Comprobación de foodPredominante PanConTomate', () => {
    expect(Plato.PanConTomate.getPredominant()).to.be.equal('Grupo4');
  });
  it('Comprobación de foodPredominante MousseCasa', () => {
    expect(Plato.MousseCasa.getPredominant()).to.be.equal('Grupo5');
  });
  it('Comprobación de getInfo', () => {
    // eslint-disable-next-line max-len
    expect(Plato.Ensalada.getInfo()).to.be.equal('Ensalada Precio: 5.5 € / Kg Nutrientes (100 g):\n Calorías: 93, Lipidos: 4, Hidratos: 15, Proteinas: 0');
  });
});
