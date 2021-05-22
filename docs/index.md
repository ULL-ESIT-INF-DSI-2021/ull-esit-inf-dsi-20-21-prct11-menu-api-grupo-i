# Práctica 11 - API Node/Express de gestión de información nutricional

| Apellidos | Nombre |
| ------ | ------ |
| Noda Pérez| Nelson |
| Reyes Pérez| Juan Eduardo |
| Rivas Quintero| Milton Daniel |

## Índice

1. [Introducción](#intro)
2. [Desarrollo](#desarrollo)
3. [Conclusión](#conclu)
4. [Bibliografía](#biblio)

---------------------

## Introducción<a name="intro"></a>

En esta segunda practica grupal tendremos que implementar una API con Node/Express, que permita llevar a cabo operaciones de creación, lectura, modificación y borrado (Create, Read, Update, Delete - CRUD) de ingredientes, platos y menús, como se explico en clases. Para esto se reutilizara el código desarrollado en la [Practica 7](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i.git). Se usara **MongoDB** como sistema de base de datos no relacional y se usara **Mongoose** para gestionar la base de datos desde **Node.js**. Además, tendremos la oportunidad de desplegar el API en **Heroku**.

---------------------

## Desarrollo<a name="desarrollo"></a>

### Direcctorio models

#### Fichero alimento.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[alimento.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/alimento.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)


#### Fichero alimentoSch.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[alimentoSch.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/alimentoSch.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)


---------------------

#### Fichero plato.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[plato.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/plato.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)


#### Fichero platoSch.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[platoSch.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/platoSch.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)

---------------------

#### Fichero menu.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[Clase Alimento](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/alimento.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)


#### Fichero menuSch.ts

Aquí se indican los enlaces para ver el contenido de la clase Alimento y sus respectivas pruebas.

[Clase Alimento](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/alimento.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/alimento.spec.ts)

---------------------
### Direcctorio routers



Aquí se indican los enlaces para ver el contenido de la clase Plato y sus respectivas pruebas.

[Clase Plato](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/src/plato.ts)

[Pruebas de la clase](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-i/blob/master/tests/plato.spec.ts)


---------------------

## Conclusión<a name="conclu"></a>



---------------------

## Bibliografía <a name="biblio"></a>

- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/es)
- [Heroku](https://www.heroku.com/)
- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct11-menu-api/)