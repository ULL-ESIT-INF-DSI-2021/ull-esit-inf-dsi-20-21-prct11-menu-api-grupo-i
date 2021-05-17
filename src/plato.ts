import {Food} from "./alimento";
/**
 * Distintas categorías que puede tener un plato
 */
type Categoria = "Entrante" | "Primer plato" | "Segundo plato" | "Postre";

export class Plate {
  private TotalComposition: number[] = [];
  private TotalPrice: number = 0;
  private Predominante: string = '';
  /**
   * Constructor de la clase
   * @param category La categoria del plato
   * @param foods Lista de alimentos que componen el plato
   * @param amount Cantidad de cada alimento del plato
   */
  constructor(private readonly nombre: string,
    private readonly category: Categoria,
    private readonly foods: Food[],
    private readonly amount: number[]) {
    if (this.foods.length==this.amount.length) {
      this.composition();
    }
    this.addPrice();
    this.foodPredominante();
  }

  /**
   * Composición nutricional del plato. Suma la composición nutricional
   * de los alimentos
   */
  private composition() {
    let calorias: number = 0;
    let proteinas: number = 0;
    let hidratos: number = 0;
    let lipidos: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      calorias += this.foods[i].getNutrients()[0] * this.amount[i] / 100;
      proteinas += this.foods[i].getNutrients()[1] * this.amount[i] / 100;
      hidratos += this.foods[i].getNutrients()[2] * this.amount[i] / 100;
      lipidos += this.foods[i].getNutrients()[3] * this.amount[i] / 100;
    }
    this.TotalComposition = [Math.trunc(calorias),
      Math.trunc(proteinas), Math.trunc(hidratos), Math.trunc(lipidos)];
  }

  /**
   * Nos permite determinar el grupo de alimento predominante del plato
   */
  private foodPredominante() {
    let g1: number = 0;
    let g2: number = 0;
    let g3: number = 0;
    let g4: number = 0;
    let g5: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      switch (this.foods[i].getGroup()) {
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
      this.Predominante = "Grupo1";
    } else if (g2 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo2";
    } else if (g3 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo3";
    } else if (g4 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo4";
    } else if (g5 == Math.max(g1, g2, g3, g4, g5)) {
      this.Predominante = "Grupo5";
    }
  }

  /**
   * Sumamos el precio de los alimentos, para determinar el precio del plato.
   */
  private addPrice() {
    let acumulador: number = 0;
    for (let i = 0; i < this.foods.length; i++) {
      acumulador += this.foods[i].getPrice();
    }
    this.TotalPrice = acumulador;
  }
  /**
   * getter de la categoria del plato
   * @returns retorna la categoría del plato
   */
  getCategory() {
    return this.category;
  }
  /**
   * getter de la categoria del plato
   * @returns retorna la categoría del plato
   */
  getFood(): Food[] {
    return this.foods;
  }
  /**
 * Obtenemos la suma de los precios de todos lo alimentos de los que se
 * compone el plato
 * @returns Precio del plato
 */
  public getPrice() : number {
    return this.TotalPrice;
  }

  /**
   * Obtenemos la composición nutricional del plato
   * @returns Composición nutricional del plato
   */
  public getComposition() : number[] {
    return this.TotalComposition;
  }

  /**
   * Obtenemos el nombre del plato
   * @returns Nombre del plato
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * Obtenemos el grupo predominante de alimentos que componen el plato
   * @returns El nombre del grupo predominante
   */
  public getPredominant() : string {
    return this.Predominante;
  }
  /**
   * Obtenemos la información del plato de manera clara.
   * @returns La información del plato.
   */
  getInfo(): string {
    return `${this.nombre}` + ` Precio: ${this.TotalPrice} € / Kg` +
      ` Nutrientes (100 g):\n` +
      ` Calorías: ${this.TotalComposition[0]},` +
      ` Lipidos: ${this.TotalComposition[1]},` +
      ` Hidratos: ${this.TotalComposition[2]},` +
      ` Proteinas: ${this.TotalComposition[3]}`;
  }
}
