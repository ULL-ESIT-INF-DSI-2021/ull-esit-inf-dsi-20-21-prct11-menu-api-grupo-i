/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';

import {Menu, menu} from "../src/menu";
import * as Plato from "../src/database/dishes";
import * as MenuCreado from "../src/database/menus";


const menu1:menu =
[Plato.QuesoAsadoSetas, Plato.LentejasCompuestas, Plato.PastaConAtun];

describe('Menu function test', () => {
  it('Creación de objeto plate ', () => {
    expect(new Menu(menu1)).instanceOf(Menu);
  });
  it('Comprobación de método precioTotal ', () => {
    expect(MenuCreado.Menu1.precioTotal()).to.be.equal('42.12');
  });
  it('Comprobación de método comprobarMenu', () => {
    expect(MenuCreado.Menu2.comprobarMenu()).to.be.equal(true);
  });
  it('Comprobación de método composicionNutricionalMenu', () => {
    expect(MenuCreado.Menu1.composicionNutricionalMenu()).eql([1700, 105,
      227, 38]);
  });
  it('Comprobación de método listadoGruposAlimentos', () => {
    expect(MenuCreado.Menu3.listadoGruposAlimentos()).eql(["Grupo3", "Grupo1",
      "Grupo2", "Grupo5"]);
  });
});
