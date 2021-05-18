import {Menu} from "./menu";
import {Plate} from "./plato";

/**
 * Clase que representa una Carta respecto a una serie de munús prediseñados
 */
export class Carta {
  /**
   * Constructor de la clase
   * @param menus Menus de la carta
   * @param platos Platos de la carta
   */
  constructor(public menus:Menu[], public platos:Plate[]) {
  }
  /**
   * getter de los menus que contiene la carta
   * @returns Menus de la carta
   */
  getMenus() {
    return this.menus;
  }
  /**
   * getter de platos con los que se pueden hacer
   * menus prsonalizados
   * @returns Platos de la carta
   */
  getPlatos() {
    return this.platos;
  }

  /**
   * Nos proporciona una visualización mas clara de
   * los platos y menus de la carta
   */
  getInfoMenu() {
    this.menus.forEach((objeto) => {
      objeto.getInfo();
    });
  }

  getInfoPlato() {
    this.platos.forEach((elemento) => {
      elemento.getInfo();
    });
  }
}
