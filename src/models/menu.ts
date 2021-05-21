/*
 import {Plate} from "./plato";

export type menu = [x:Plate, y:Plate, z:Plate, ...dimensiones:Plate[]];

export class Menu {

  private ComposicionTotal: number[];
  constructor(private readonly menus:menu) {
  }

  comprobarMenu(): boolean {
    let flagEntrante=false;
    let flagPrimerplato=false;
    let flagSegundoPlato=false;
    let flagPostre=false;
    let contador=0;
    // Si el contador es 3 o mayor hay 3 categorias diferentes como minimo por
    // lo que es valido
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
    this.ComposicionTotal = composicionTotal;
    return composicionTotal;
  }

  listadoGruposAlimentos(): string[] {
    const listaGrupoAlimentos: string[] = [];
    for (let i = 0; i < this.menus.length; i++) {
      listaGrupoAlimentos.push(this.menus[i].getPredominant());
    }
    return listaGrupoAlimentos;
  }

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
 */
