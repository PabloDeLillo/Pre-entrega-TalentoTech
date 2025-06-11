TALENTOTECH - PRE-ENTREGA | GESTIÓN DE PRODUCTOS DESDE TERMINAL
===============================================================

Este proyecto permite interactuar con la API de FakeStore para gestionar productos (consulta, creación de nuevo producto y eliminar producto).

REQUISITOS:
-----------
- Node.js v 18 o superior.
- npm

PASOS PARA USO:
---------------
1. Abrir una terminal "Command prompt" dentro de la carpeta del proyecto.
2. Ejecutar el comando:

   npm install

   (Esto instalará la dependencia). Ya instaladas en package-lock.json

3. Para ejecutar comandos usar:

Para consultar todos los productos:
   npm run start GET products

Para consultar un producto específico:
   npm run start GET products/"Numero de producto"
   Ejemplo: npm run start GET products/1

Para crear un nuevo producto:
   npm run start POST products "Remera Negra" 299 "ropa"

Para eliminar un producto:
   npm run start DELETE products/"Numero de producto"
   Ejemplo: npm run start DELETE products/3 


