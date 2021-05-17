/* eslint-disable max-len */
import {Plate} from "../plato";
import * as Alimento from "./aliments";
// Entrantes

export const QuesoAsadoSetas: Plate = new Plate('Queso Asado con Setas', 'Entrante',
    [Alimento.QuesoBurgos, Alimento.QuesoGouda, Alimento.Setas], [75, 75, 35]);

export const PanConTomate: Plate = new Plate('Pan con tomate', 'Entrante',
    [Alimento.PanTostado, Alimento.PanBlanco, Alimento.Tomate], [50, 50, 29]);

export const PanConQueso: Plate = new Plate('Pan con varios quesos', 'Entrante',
    [Alimento.PanTostado, Alimento.QuesoBurgos, Alimento.QuesoGouda], [95, 55, 55]);

export const TartarSalmonAguacate: Plate = new Plate('Tartar de salmon y aguacate', 'Entrante',
    [Alimento.Salmon, Alimento.Aguacate], [50, 35]);

export const AguacatesRellenos: Plate = new Plate('Aguactes rellenos con nueces y queso burgos', 'Entrante',
    [Alimento.Aguacate, Alimento.NuecesConCascara, Alimento.QuesoBurgos], [100, 30, 55]);

// Primer Plate

export const LentejasCompuestas: Plate = new Plate('Lentejas compuestas', 'Primer plato',
    [Alimento.Lentejas, Alimento.HuevoGallina, Alimento.Cebolla, Alimento.Platano], [200, 20, 33, 50]);

export const Ensalada = new Plate('Ensalada', 'Primer plato',
    [Alimento.Tomate, Alimento.Lechuga, Alimento.Cebolla], [200, 120, 100]);

export const GarbanzosCompuestos: Plate = new Plate('Garanzos compuestos', 'Primer plato',
    [Alimento.Garbanzos, Alimento.PimientoRojo, Alimento.HuevoGallina], [250, 95, 120]);

export const EnsaladaDePasta: Plate = new Plate('Ensalada de pasta', 'Primer plato',
    [Alimento.Pasta, Alimento.Ajo, Alimento.Cebolla, Alimento.Zanahoria], [200, 50, 50, 33]);

export const CremaCalabacin: Plate = new Plate('Crema de calabacin', 'Primer plato',
    [Alimento.Calabacin, Alimento.Puerro, Alimento.Champinion], [120, 20, 35]);

// Segundo plato

export const PastaConAtun: Plate = new Plate('Pasta con Atún', 'Segundo plato',
    [Alimento.Pasta, Alimento.Atun], [150, 20]);

export const PolloNaranja: Plate = new Plate('Pollo a la naranja', 'Segundo plato',
    [Alimento.Pollo, Alimento.Naranja], [200, 20]);

export const ChuletasZT: Plate = new Plate('Chuletas de cerdo con zanahorias y tomate',
    'Segundo plato', [Alimento.CerdoChuleta, Alimento.Zanahoria, Alimento.Tomate], [250, 30, 30]);

export const TerneraEncebollado: Plate = new Plate('Chuleta de ternera encebollada',
    'Segundo plato', [Alimento.TerneraChuleta, Alimento.Cebolla], [200, 40]);

export const ConejoPapas: Plate = new Plate('Conejo con papas Nuevas',
    'Segundo plato', [Alimento.Conejo, Alimento.PapasNuevas], [150, 40]);


// Postre

export const MousseCasa: Plate = new Plate('Mousse de la casa', 'Postre',
    [Alimento.MousseChocolate, Alimento.Naranja, Alimento.Fresa],
    [95, 20, 36]);

export const HeladoPlatano: Plate = new Plate('Helado con platano', 'Postre',
    [Alimento.Helado, Alimento.Platano], [80, 65]);

export const YogurFresasLimon: Plate = new Plate('Yogur natural entero con fresas y limon', 'Postre',
    [Alimento.YogurNaturalEntero, Alimento.Fresa, Alimento.Limon],
    [120, 55, 32]);

export const FlanHuevoHelado: Plate = new Plate('Flan de huevo con helado de fresas', 'Postre',
    [Alimento.FlanHuevo, Alimento.Helado, Alimento.Fresa], [95, 55, 31]);

export const HeladoCasa: Plate = new Plate('Helado de la casa', 'Postre',
    [Alimento.Helado, Alimento.Limon, Alimento.Nata, Alimento.Platano], [250, 50, 75, 100]);
