import { obtenerProductos, obtenerProducto, crearProducto, eliminarProducto } from './servicios/apiServicio.js';

async function main() {
  try {
    const [metodo, ruta, ...datos] = process.argv.slice(2);
    if (!metodo || !ruta) throw new Error('Debes especificar un método y una ruta.');
    const metodoUpper = metodo.toUpperCase();
    const [recurso, id] = ruta.split('/');

    if (recurso.toLowerCase() !== 'products') {
      throw new Error(`Recurso desconocido: ${recurso}. Usa "products".`);
    }

    let resultado;
    switch (metodoUpper) {
      case 'GET':
        if (id) {
          resultado = await obtenerProducto(id);
          console.log(' Detalles del producto:');
          console.log(JSON.stringify(resultado, null, 2));
        } else {
          const productos = await obtenerProductos();
          console.log(` Productos obtenidos (${productos.length}):`);
          console.table(productos, ['id', 'title', 'price', 'category']);
        }
        break;

      case 'POST':
        if (id) throw new Error('La ruta para POST no debe incluir ID.');
        if (datos.length < 3) throw new Error('Uso: POST products <title> <price> <category>.');
        const [title, price, category] = datos;
        resultado = await crearProducto(title, price, category);
        console.log(' Producto creado:');
        console.log(JSON.stringify(resultado, null, 2));
        break;

      case 'DELETE':
        if (!id) throw new Error('Debes especificar un ID para DELETE (ej: products/1).');
        resultado = await eliminarProducto(id);
        console.log(' Producto eliminado:');
        console.log(JSON.stringify(resultado, null, 2));
        break;

      default:
        throw new Error(`Método inválido: ${metodo}. Usa GET, POST o DELETE.`);
    }
  } catch (error) {
    console.error(' Error:', error.message);
    console.log(' Uso:');
    console.log('  npm run start GET products');
    console.log('  npm run start GET products/1');
    console.log('  npm run start POST products "Camisa" 19.99 "ropa"');
    console.log('  npm run start DELETE products/1');
    process.exit(1);
  }
}

main();
