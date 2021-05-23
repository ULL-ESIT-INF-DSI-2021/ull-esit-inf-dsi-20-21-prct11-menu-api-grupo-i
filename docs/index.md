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

#### Fichero alimentoSch.ts

En este fichero se puede encontra el schema para crear un alimento/ingrediente y una interfaz que simula dicho alimento/ingrediente. Un ingrediente estara compuesto por lo siguiente:

- **name**: sera el nombre del ingrediente.
- **locality**: sera la localidad del ingrediente.
- **nutrients**: sera un vector con los nutrientes del alimento .
- **price**: sera el precio del ingrediente.
- **group**: sera el grupo alimenticio del ingrediente. Las opciones son: *Grupo1, Grupo2, Grupo3, Grupo4, Grupo5*.

El Schema consiste en definir un modelo de objeto de *Mongoose* y su contenido no difiere mucho entre los diferentes objetos que vamos a moedelar. Algunas opciones nos permiten comprobar, definir o especificar que son obligatorias. Tomando como ejemplo el schema de ingrediente (**ingredientSchema**) se explicaran algunas opciones:

```typescript
export const ingredientSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (!value.match(/^[A-Z]/)) {
        throw new Error('Ingredient title must start with a capital letter');
      }
    },
  },
  locality: {
    type: String,
    required: true,
    trim: true,
  },
  nutrients: {
    type: [Number],
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  group: {
    type: String,
    required: true,
    trim: true,
    enum: ['Grupo1', 'Grupo2', 'Grupo3', 'Grupo4', 'Grupo5'],
  },
});
```

- **type**: nos permite definir el tipo de dato de la propiedad.
- **unique**: nos dice si el contenido de la propiedad no se puede repetir.
- **required**: nos dice si la propiedad es obligatoria(true) o no.
- **trim**: elimina espacios en blanco innecesarios.
- **validate**: con este apartado podemos especificar una serie de condiciones que se tienen que cumplir para esta propiedad.

En este fichero declaramos el esquema con el que almacenara el alimento en la base de datos.

[alimentoSch.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/alimentoSch.ts)

---------------------

#### Fichero platoSch.ts

En este fichero declaramos el esquema con el que almacenara el plato en la base de datos. El plato está compuesto por:

- **name**: será el nombre del ingrediente.
- **:amount**: cantidad de cada ingrediente que contiene el plato.
- **:nutrients**:nutrientes del plato.
- **:price**: precio del plato.
- **:foods**: ingredientes del plato.
- **:predominant**: grupo alimenticio predominante en el plato
- **:category**: categoría del plato, que puede ser 'Entrante,  'Primer plato,  'Segundo plato, 'Postre'.

[platoSc.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/platoSch.ts)

---------------------

#### Fichero menuSch.ts

En este fichero declaramos el esquema con el que menu el plato en la base de datos.
El menú está compuesto por:

- **name**: será el nombre del menú.
- **platos**: será la lista de los platos del menú.
- **price**: será la suma del precio de todos los platos.
- **nutrients**: será la suma de los nutrientes de todos los platos.

[menuSch.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/menuSch.ts)

---------------------
### Directorio routers

#### Fichero delete.ts

En el fichero delete tenemos las peticiones para eliminar alimentos,menus y platos.
En cada uno de los metodos se comprueba que exista el nombre del elemento a eliminar.

[delete.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/routers/delete.ts)

---------------------

#### Fichero get.ts

En el fichero get tenemos las peticiones para obtener la informacion de alimentos,menus y platos.
En cada uno de los métodos se comprueba que exista el nombre del elemento a obtener.

[delete.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/routers/get.ts)

---------------------

#### Fichero patch.ts

En el fichero get tenemos las peticiones para modificar la informacion de alimentos,menus y platos.
En cada uno de los metodos se comprueba que exista el nombre del elemento a modificar.
De alimento se puede modificar name, locality nutrients, price y group.
De plato se puede modificar  name, amount, price, foods y category.
De menu se puede modificar name, price y platos.

[delete.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/routers/delete.ts)
---------------------

#### Fichero post.ts

En este fichero hacemos las consultas post para añadir elementos a la base de datos. Los elemento que se pueden añadir son los siguientes:
Alimentos: Para añadir un alimento se comprueba que no este creado en la base de datos otro con el mismo nombre.
Platos: Para añadir el plato se verifica que los alimentos que contiene ese plato están disponibles en la base de datos.
Menu:Para añadir el menus se verifica que los platos que contiene ese menu están disponibles en la base de datos.
[delete.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/models/menu.ts)

---------------------

#### Fichero default.ts

En este fichero se hacen las consultas para las rutas no implementadas:

[delete.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/routers/default.ts)

---------------------

### Direcctorio database

#### Fichero mongoose.ts

En este fichero hacemos la conexión de a la base de datos que puede ser la local o la que tenemos en el mongoDB Atlas

[mongoose.ts](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct11-menu-api-grupo-i/blob/main/src/database/mongoose.ts)

## Conclusión

En esta práctica nos hemos organizado mejor las tareas que en la anterior. Nos ha parecido más sencillo de implementar el código de la aplicación con la utilización de mongoDB que con lowDB, además hemos aprendido a desplegar nuestra aplicación en Heroku y a utilizar la extensión thunder client para probar nuestra base de datos tanto en local como en remoto. Esperábamos que el proyecto final fuera más complicado, pero con la explicación y los apuntes pudimos realizar la práctica de manera satisfactoria aunque con alguna pequeña complicación durante el proceso.

---------------------

## Bibliografía <a name="biblio"></a>

- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/es)
- [Heroku](https://www.heroku.com/)
- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct11-menu-api/)