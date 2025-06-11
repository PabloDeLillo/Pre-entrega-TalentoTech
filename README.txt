TALENTOTECH - PRE-ENTREGA | GESTIÓN DE PRODUCTOS DESDE TERMINAL
===============================================================

Este proyecto CLI permite interactuar con la API de FakeStore para gestionar productos (consultar, crear y eliminar).

REQUISITOS:
-----------
- Node.js 18 o superior
- Conexión a internet

PASOS PARA USO:
---------------

1. Descomprimir el archivo ZIP.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Ejecutar el comando:

   npm install

   (Esto instalará la dependencia "node-fetch")

4. Para ejecutar comandos usa:

   npm run start <MÉTODO> <RUTA> [<datos>]

EJEMPLOS:
---------

🔍 Consultar todos los productos:
   npm run start GET products

🔍 Consultar un producto específico:
   npm run start GET products/5

➕ Crear un nuevo producto:
   npm run start POST products "Remera Negra" 299 "ropa"

🗑️ Eliminar un producto:
   npm run start DELETE products/5

NOTAS:
------
- La API es pública, por lo que el POST y DELETE no afectan realmente una base de datos persistente.
- El script maneja errores comunes y muestra ayuda si faltan parámetros.
- El código está escrito en ESModules (usa "type": "module").
