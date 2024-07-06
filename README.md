# Dashboard SPA

## Descripción

La estructura del workshop es Spa, cada page, es un ejercicio del taller

## Estructura del proyecto
```txt
project-root/
├── app/                        # Carpeta de código fuente
├── .babelrc                    # Archivo de configuración de Babel
├── .gitignore                  # Archivo de ocultar archivos/directorios a Git
├── index.html                  # Archivo principal de HTML
├── package.json                # Dependencias del proyecto y scripts
├── webpack.config.js           # Archivo de configuración de Webpack
└── README.md                   # Documentación del proyecto
```

## Punto 1: Ejercicio Guiado - Creando una Aplicación de Gestión de Tareas

En este primer punto, crearás una aplicación de gestión de tareas que te permitirá añadir, editar, eliminar y marcar tareas como completadas. Durante el proceso, se evaluarán los siguientes temas:

- JavaScript Básico
- Manipulación del DOM
- Programación Orientada a Objetos (OOP)
- Eventos en JavaScript
- Variables y Tipos de Datos
- Control de Flujo
- Funciones de Flecha
- JSON
- Depuración

### Historia de Usuario

Como usuario, quiero una aplicación de gestión de tareas que me permita añadir, editar, eliminar y marcar tareas como completadas para organizar mis actividades diarias de manera eficiente.

### Criterios de Aceptación

1. **Añadir una Tarea**:
   - Debe existir un campo de entrada y un botón para añadir una nueva tarea.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

2. **Editar una Tarea**:
   - Debe ser posible editar la descripción de una tarea existente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

3. **Eliminar una Tarea**:
   - Debe existir un botón para eliminar una tarea.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

4. **Marcar una Tarea como Completada**:
   - Debe ser posible marcar una tarea como completada y debe visualizarse de manera diferente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript, Clases y Objetos.

5. **Almacenar Tareas en localStorage**:
   - Las tareas deben ser almacenadas en `localStorage` y recuperadas al recargar la página.
   - **Concepto de JavaScript aplicado**: JSON, Almacenamiento en localStorage.

6. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

7. **Validación y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.

## Punto 2: Ejercicio Independiente - Creando una Aplicación de Gestión de Notas

En este segundo punto, crearás una aplicación de gestión de notas que te permitirá añadir, editar, eliminar y marcar notas como importantes. Durante el proceso, se evaluarán los siguientes temas:

### Historia de Usuario

Como usuario, quiero una aplicación de gestión de notas para poder añadir, editar, eliminar y marcar notas como importantes, de manera que pueda organizar mis tareas y recordatorios de forma eficiente.

### Criterios de Aceptación

1. **Añadir una Nota**:
   - Debe existir un campo de entrada y un botón para añadir una nueva nota.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

2. **Editar una Nota**:
   - Debe ser posible editar la descripción de una nota existente.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

3. **Eliminar una Nota**:
   - Debe existir un botón para eliminar una nota.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript.

4. **Marcar una Nota como Importante**:
   - Debe ser posible marcar una nota como importante y debe visualizarse de manera destacada.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Eventos en JavaScript, Clases y Objetos.

5. **Almacenar Notas en localStorage**:
   - Las notas deben ser almacenadas en `localStorage` y recuperadas al recargar la página.
   - **Concepto de JavaScript aplicado**: JSON, Almacenamiento en localStorage.

6. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

7. **Validación y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.

### Ejercicio

Desarrolla la aplicación de acuerdo a los criterios de aceptación mencionados. Asegúrate de probar la aplicación en un navegador y realizar las siguientes acciones:

1. Añadir una nueva nota.
2. Editar una nota existente.
3. Marcar una nota como importante.
4. Eliminar una nota.
5. Verificar que las notas se almacenan y recuperan correctamente en `localStorage`.
6. Documentar el proceso y el código en el archivo `README.md` de tu repositorio.

## Punto 3: Ejercicio Guiado - Consumiendo una API con JSONPlaceholder

En este tercer punto, crearás una aplicación que consuma datos de una API utilizando JSONPlaceholder. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- JSON
- Promesas
- Depuración

### Historia de Usuario

Como usuario, quiero una aplicación que consuma datos de una API pública, para visualizar y gestionar información de manera eficiente.

### Criterios de Aceptación

1. **Consumo de API**:
   - La aplicación debe consumir datos de la API de JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
   - **Concepto de JavaScript aplicado**: Promesas, JSON.

2. **Visualización de Datos**:
   - Los datos obtenidos de la API deben visualizarse en la página de manera estructurada.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

3. **Manejo de Errores**:
   - Implementar manejo de errores para la solicitud de la API y mostrar mensajes de error adecuados al usuario.
   - **Concepto de JavaScript aplicado**: Promesas, Depuración.

4. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos y procesamiento de datos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha.
  
## Punto 4: Ejercicio Independiente - Creando una Aplicación de Gestión de Productos con la API de Platzi

En este cuarto punto, crearás una aplicación que consuma datos de la API de Platzi Fake Store y muestre la información de productos de manera interactiva y visualmente atractiva. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- JSON
- Promesas
- Depuración

### Historia de Usuario

Como usuario, quiero una aplicación que me permita ver y gestionar productos de una tienda en línea, para explorar las opciones disponibles y tomar decisiones de compra informadas.

### Criterios de Aceptación

1. **Consumo de API**:
   - La aplicación debe consumir datos de la API de Platzi Fake Store (https://fakeapi.platzi.com/).
   - **Concepto de JavaScript aplicado**: Promesas, JSON.

2. **Visualización de Datos**:
   - Los datos obtenidos de la API deben visualizarse en la página de manera estructurada y atractiva. Puede usar una tabla, una lista o cualquier otro formato que consideres adecuado.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

3. **Interacción del Usuario**:
   - Utilizar funciones de flecha para definir manejadores de eventos y procesamiento de datos.
   - **Concepto de JavaScript aplicado**: Funciones de Flecha, Eventos en JavaScript.

4. **Filtrado y Búsqueda**:
   - Implementar funcionalidades de filtrado y búsqueda para que los usuarios puedan encontrar productos específicos.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, Control de Flujo.

5. **Manejo de Errores**:
   - Implementar manejo de errores para la solicitud de la API y mostrar mensajes de error adecuados al usuario.
   - **Concepto de JavaScript aplicado**: Promesas, Depuración.

## Punto 5: Ejercicio Independiente - Métodos de Array en JavaScript

En este quinto punto, explorarás y aplicarás diversos métodos de array en JavaScript. Durante el proceso, se evaluarán los siguientes temas:

- Control de Flujo
- Funciones de Flecha
- Métodos de Array (reduce, forEach, map, filter, find, some, every)

### Historia de Usuario

Como usuario, quiero una aplicación que me permita gestionar y analizar una lista de productos utilizando diversos métodos de array, para obtener información relevante y personalizada de manera eficiente.

### Interface de Producto

```javascript

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];

```

### Criterios de Aceptación

1. **Visualización de Productos**:
   - La aplicación debe mostrar una lista de productos en la página. Puedes interactuar con el DOM o con la consola del navegador.
   - **Concepto de JavaScript aplicado**: Manipulación del DOM, forEach.

2. **Calcular el Precio Total**:
   - La aplicación debe calcular y mostrar el precio total de todos los productos utilizando el método `reduce`.
   - **Concepto de JavaScript aplicado**: reduce.

3. **Filtrar Productos por Categoría**:
   - La aplicación debe permitir filtrar productos por categoría utilizando el método `filter`.
   - **Concepto de JavaScript aplicado**: filter.

4. **Buscar un Producto por Nombre**:
   - La aplicación debe permitir buscar un producto específico por su nombre utilizando el método `find`.
   - **Concepto de JavaScript aplicado**: find.

5. **Verificar Disponibilidad de Productos**:
   - La aplicación debe verificar si todos los productos están disponibles utilizando el método `every`.
   - **Concepto de JavaScript aplicado**: every.

6. **Obtener Nombres de Productos**:
   - La aplicación debe crear una lista con los nombres de todos los productos utilizando el método `map`.
   - **Concepto de JavaScript aplicado**: map.

7. **Depuración y Manejo de Errores**:
   - Implementar métodos de depuración para el manejo de errores y validación.
   - **Concepto de JavaScript aplicado**: Depuración, Manejo de Errores.
