import chalk from 'chalk';
import Table from 'cli-table3';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from './service.js';

const [,, method, resource, ...params] = process.argv;

console.log(gradient.rainbow(figlet.textSync('TechLab Store')));

const spinner = ora({ color: 'cyan' });

async function main() {
  try {
    switch (method?.toUpperCase()) {

      // GET
      case "GET":
        if (resource === "products") {
          if (params.length === 0) {
            spinner.start('Cargando todos los productos...');
            const data = await obtenerProductos();
            spinner.succeed(chalk.green('✅ Productos cargados'));

            const table = new Table({
              head: [chalk.cyan('ID'), chalk.cyan('Nombre'), chalk.cyan('Precio'), chalk.cyan('Categoria')],
              colWidths: [5, 40, 10, 20],
              wordWrap: true
            });
            data.forEach(p => table.push([p.id, p.title, `$${p.price}`, p.category]));
            console.log(table.toString());

          } else {
            const productId = params[0];
            spinner.start(`Buscando producto #${productId}...`);
            const data = await obtenerProducto(productId);
            spinner.succeed(chalk.green(`✅ Producto #${productId} encontrado`));

            console.log(chalk.cyanBright('\nDetalles del producto:'));
            console.log(`🆔 ID: ${data.id}`);
            console.log(`📦 Nombre: ${data.title}`);
            console.log(`💰 Precio: $${data.price}`);
            console.log(`🏷️ Categoría: ${data.category}`);
            console.log(`📝 Descripción: ${data.description}`);
          }
        }
        break;

      // POST
      case "POST":
        if (resource === "products") {
          const [title, price, category] = params;
          if (!title || !price || !category) {
            console.error(chalk.red("❌ Uso: npm run start POST products <title> <price> <category>"));
            return;
          }
          spinner.start('Creando producto...');
          const data = await agregarProducto({ title, price, category });
          spinner.succeed(chalk.green('✅ Producto creado'));
          console.log(chalk.cyanBright('\nProducto creado:'));
          console.log(`🆔 ID: ${data.id}`);
          console.log(`📦 Nombre: ${data.title}`);
          console.log(`💰 Precio: $${data.price}`);
          console.log(`🏷️ Categoria: ${data.category}`);
        }
        break;

      // DELETE
      case "DELETE":
        if (resource === "products") {
          const productId = params[0];
          if (!productId) {
            console.error(chalk.red("❌ Uso: npm run start DELETE products <id>"));
            return;
          }
          spinner.start(`Eliminando producto #${productId}...`);
          const data = await eliminarProducto(productId);
          spinner.succeed(chalk.green(`✅ Producto #${productId} eliminado`));
          console.log(chalk.yellowBright(`🗑️ Respuesta: ${JSON.stringify(data)}`));
        }
        break;

      default:
        console.log(chalk.red("❓ Comando no reconocido. Ejemplos:"));
        console.log("  npm run start GET products");
        console.log("  npm run start GET products 15");
        console.log("  npm run start POST products T-Shirt-Rex 300 remeras");
        console.log("  npm run start DELETE products 7");
        break;
    }

  } catch (error) {
    spinner.fail(chalk.red(`💥 Error: ${error.message}`));
  }
}

main();