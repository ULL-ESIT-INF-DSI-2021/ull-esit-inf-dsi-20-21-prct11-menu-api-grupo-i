/* eslint-disable max-len */
import {Carta} from "../carta";
import * as Menu from "./menus";
import * as Dish from "./dishes";

export const carta = new Carta([Menu.Menu1, Menu.Menu2, Menu.Menu3,
  Menu.Menu4, Menu.Menu5],
[Dish.CremaCalabacin, Dish.QuesoAsadoSetas, Dish.PanConTomate, Dish.PanConQueso, Dish.TartarSalmonAguacate, Dish.AguacatesRellenos,
  Dish.LentejasCompuestas, Dish.Ensalada, Dish.GarbanzosCompuestos, Dish.EnsaladaDePasta, Dish.CremaCalabacin,
  Dish.PastaConAtun, Dish.PolloNaranja, Dish.ChuletasZT, Dish.TerneraEncebollado, Dish.ConejoPapas,
  Dish.MousseCasa, Dish.HeladoPlatano, Dish.YogurFresasLimon, Dish.FlanHuevoHelado, Dish.HeladoCasa]);
