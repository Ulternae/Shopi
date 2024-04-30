
# Bienvenido a Shopi

[Shopi](https://ulternae.github.io/Shopi/) es una aplicación de ecommerce desarrollada para aprender y demostrar habilidades en React y React Router. Esta aplicación simula el flujo de compra de un ecommerce, ofreciendo características como navegación entre páginas sin recarga, carrito de compras y historial de compras hechas por los usuarios

## Características

-   **Navegación con React Router**: Gestiona rutas y navegación sin recargar la página.
-   **Gestión de Estado**: Utiliza createContext y React para manejar el estado global de la aplicación.
-   **Autenticación de Usuarios**: Facilita el registro, inicio y cierre de sesión.
-   **Responsive Design**: Asegura que la aplicación funcione adecuadamente en dispositivos de diferentes tamaños.
-   **Carrito de Compras**: Permite a los usuarios añadir y eliminar productos.
-   **Historial de Compras**: Los usuarios pueden consultar sus compras anteriores.
-   **Manejo de datos**: Usa LocalStorage para mantener la sesión del usuario y sus datos de compra.
-   **Obtención de productos**: Realiza peticiones a la Fake API de Platzi para obtener los productos.


## Tecnologias Usadas
-   React
-   React Router
-   Tailwind CSS
-   Vite
-   gh-pages

## Cómo iniciar el proyecto

1.  **Clona el repositorio:**

    `git clone https://github.com/Ulternae/Shopi.git` 
    
2.  **Instala las dependencias:**
        
    `npm i`   
    
3.  **Ejecuta el proyecto:**
    
    `npm run dev`

Esto correra la aplicacion en `http://localhost:5173/Shopi/`


## Estructura del Proyecto
Descripción de cómo los archivos y carpetas están organizados en el proyecto:

### `assets`

Contiene todos los recursos gráficos como imágenes y SVGs utilizados en la aplicación.

### `components`

Alberga todos los componentes de React utilizados para construir la interfaz de usuario de la aplicación. Algunos de los componentes importantes incluyen:

-   `Card`: Utilizado para mostrar información de productos individuales.
-   `Navbar`: La barra de navegación utilizada en toda la aplicación.
-   `ProductDetail`: Muestra los detalles de un producto específico.
-   `OrdersCard` y `OrderCard`: Se utilizan para mostrar las órdenes y el detalle de cada orden respectivamente.

### `context`

Maneja el estado global de la aplicación usando Context API. Los contextos se dividen en:

-   `UserStorage.js`: Maneja el estado y la información del usuario.
-   `ProductsShopping.js`: Encargado de recuperar y manejar la información de los productos desde una API, incluyendo categorías y filtros.
-   `ShoppingCard.js`: Gestiona todo lo relacionado con el carrito de compras, incluyendo añadir productos y el historial de compras.

### `pages`

Contiene las páginas de la aplicación, cada una representada por un componente de React:

-   `App`: Punto de entrada principal de la aplicación que alberga la configuración de rutas y páginas.
-   `Home`: La página principal que muestra productos y categorías.
-   `MyOrder` y `MyOrders`: Páginas que permiten a los usuarios ver detalles de una orden específica y el historial de todas las órdenes.
-   `SignIn`, `CreateAccount`, `EditAccount`: Páginas destinadas a la autenticación y gestión de cuentas de usuario.
-   `NotFound`: Página de error para rutas no encontradas.

### `utils`

Provee utilidades comunes a lo largo del proyecto:

-   `index.js`: Proporciona utilidades como funciones para generar fechas aleatorias.

## Vista General de la Interfaz de Usuario

![image](https://github.com/Ulternae/Shopi/assets/164533943/6781f51c-4c95-470f-aed7-50549fa09d70)
![image](https://github.com/Ulternae/Shopi/assets/164533943/11cb2c73-8fef-4ffe-a264-ac9af8029529)

