import {Plate} from "./plato";

/**
 * Lista con al menos tres platos
 */
export type menu = [x:Plate, y:Plate, z:Plate, ...dimensiones:Plate[]];
/**
 * Clase con la que representar el menu
 */
export class Menu {
  /**
   * @param menus Lista de platos (minimmo 3 platos por menu)
   */
  constructor(private readonly menus:menu) {
  }
  /**
   * Comprueba que el menu cumple con almenos 3 categorias diferentes
   * @returns Verdadero o falso si se cumple o no la condición
   */
  comprobarMenu(): boolean {
    let flagEntrante=false;
    let flagPrimerplato=false;
    let flagSegundoPlato=false;
    let flagPostre=false;
    let contador=0;

    this.menus.forEach((plato) => {
      if (plato.getCategory()== "Entrante" && flagEntrante==false) {
        contador++;
        flagEntrante=true;
      }
      if (plato.getCategory()== "Primer plato" && flagPrimerplato==false) {
        flagPrimerplato=true;
        contador++;
      }
      if (plato.getCategory()== "Segundo plato" && flagSegundoPlato==false) {
        flagSegundoPlato=true;
        contador++;
      }
      if (plato.getCategory()== "Postre" && flagPostre==false) {
        flagPostre=true;
        contador++;
      }
    });
    if (contador<3) {
      return false;
    } else {
      return true;
    }
  }
  /**
   * Método para calcular la composicion total de los platos
   * que conforman el menu
   * @returns retorna la composicion total del menu
   */
  composicionNutricionalMenu() {
    let calorias=0;
    let proteinas= 0;
    let hidratos= 0;
    let lipidos= 0;
    let composicionTotal: number[] = [];
    for (let i = 0; i < this.menus.length; i++) {
      calorias+=this.menus[i].getComposition()[0];
      proteinas+= this.menus[i].getComposition()[1];
      hidratos+= this.menus[i].getComposition()[2];
      lipidos+= this.menus[i].getComposition()[3];
    }
    composicionTotal = [calorias, proteinas, hidratos, lipidos];
    return composicionTotal;
  }
  /**
   * Método para retornar los grupos de alimentos predominantes de
   * cada plato que contiene el menu
   * @returns retorna la lista de grupo de alimentos
   */
  listadoGruposAlimentos(): string[] {
    const listaGrupoAlimentos: string[] = [];
    for (let i = 0; i < this.menus.length; i++) {
      listaGrupoAlimentos.push(this.menus[i].getPredominant());
    }
    return listaGrupoAlimentos;
  }
  /**
   * Método que retorna la suma del precio de cada
   * plato que compone el menu
   * @returns retorna el precio total del menu
   */
  precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.menus.length; i++) {
      precio+=this.menus[i].getPrice();
    }
    return precio.toFixed(2);
  }
  getPlatos() {
    const aux: Plate[] = [];
    this.menus.forEach((platos) => {
      aux.push(platos);
    });
    return aux;
  }
  /**
   * Write para imprimir todos los platos de un menu, con
   * los ingredientes de cada uno
   */

  getInfo(): string {
    let aux: string = ``;
    aux += 'Precio Total: ' + this.precioTotal() +
    ', Calorías: ' + this.composicionNutricionalMenu()[0] +
    ', Lipidos: ' + this.composicionNutricionalMenu()[1] +
    ', Hidratos: ' + this.composicionNutricionalMenu()[2] +
    ', Proteinas: ' + this.composicionNutricionalMenu()[3] + '\n';

    for (let i = 0; i < this.menus.length; i++) {
      aux += this.menus[i].getInfo() + '\n';
    }

    return aux;
  }
  addPlato(plato:Plate) {
    this.menus.push(plato);
  }
}
