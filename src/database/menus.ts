import {Menu, menu} from "../menu";
import * as Dish from "./dishes";


const menu1: menu=[Dish.QuesoAsadoSetas, Dish.LentejasCompuestas,
  Dish.PastaConAtun];
export const Menu1: Menu= new Menu(menu1);

const menu2:menu=[Dish.PanConTomate, Dish.Ensalada,
  Dish.PolloNaranja, Dish.HeladoPlatano];
export const Menu2= new Menu(menu2);

const menu3:menu=[Dish.PanConQueso, Dish.GarbanzosCompuestos,
  Dish.ChuletasZT, Dish.YogurFresasLimon];
export const Menu3: Menu= new Menu(menu3);

const menu4: menu=[Dish.TartarSalmonAguacate, Dish.EnsaladaDePasta,
  Dish.TerneraEncebollado, Dish.MousseCasa];
export const Menu4: Menu= new Menu(menu4);

const menu5: menu=[Dish.AguacatesRellenos, Dish.CremaCalabacin,
  Dish.ConejoPapas, Dish.HeladoCasa];
export const Menu5: Menu= new Menu(menu5);
