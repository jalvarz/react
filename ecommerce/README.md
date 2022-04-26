
Proyecto Final del curso de React en CoderHouse | Javier Alvarez

se utiliza base de datos no relacional (noSql) de Google Firebase como backend y persistencia de datos.

el proyecto emula un e-commerce basico, con solo 2 categorias y un item por categoria por simpleza con funcionalidad de carrito en el cual se pueden agregar y sacar items y browsear por categoria




# Proyecto Final Curso React JS Coderhouse | Javier Alvarez

## Acerca de este proyecto

Este proyecto se trata de un E-commerce ficticio, utilizando React para el frontend, y Firebase como backend y persistencia de datos.<br>

<figure style="text-align: center">
   <img 
    alt="video mostrando el uso de la plataforma"
    with="350" 
    height="350" 
    src="https://github.com/jalvarz/react/blob/main/ecommerce/video.gif" 
  />
  <figcaption>Video mostrando las funcionalidades que ofrece la plataforma</figcaption>
</figure>

<hr>

## Herramientas utilizadas

Para la elaboración de este proyecto se utilizaron las siguientes herramientas:

- React JS 
- Bootstrap 
- React Router Dom 
- Firebase (persistencia de datos, NoSQL)

<hr>

## Instalación del proyecto

1. Clonar el repositorio utilizando _`git clone https://github.com/jalvarz/react.git`_
2. Instalar dependecias _`npm install`_
3. ejecutar el proyecto _`npm start`_



<hr>

## Secciones del proyecto y funcionalidades

### Barra de navegación

- Permite ir a las distintas categorias (Productos y Servicios), como asi tambien ir al carrito de compras para realizar el checkout
- adicionalmente, el carrito de compras cuenta con un widget el cual indica la cantidad de productos que hay en el mismo.

### Sección principal

- Muestra todos los productos, de todas las categorias.
- desde la misma sección principal se puede agregar el item al carrito, o hacer click en ver detalle.

### Sección de detalles

- Muestra mas información del item seleccionado.


### Carrito de compras

- Muestra una lista con los items agregados al carrito y la cantidad de cada uno.
- se puede eliminar un producto del listado.
- se muestra el monto total de la operación

### Checkout

- En esta sección final del proceso de compra, se validan todos los datos ingresados
- se genera la orden de compra, y se graba en la base de datos de Firebase.
