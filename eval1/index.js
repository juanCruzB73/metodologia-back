const fs = require("fs").promises;
const readline = require("readline");
const yargs = require("yargs");

// GET NAME OF THE JSON FILE
const argv = yargs.option("file", {
  alias: "f",
  type: "string",
  describe: "JSON file name to save products",
  default: "products.json",
}).argv;

// GET DATA FROM USER
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ASYNC GET DATA FROM USER
const preguntar = (pregunta) => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => resolve(respuesta));
  });
};

// MAIN FUCTION
const execution = async () => {
  try {
    // GET DATA FROM USER
    const name = await preguntar("Producto: ");
    const price = parseFloat(await preguntar("price: "));
    const amount = parseInt(await preguntar("amount: "), 10);

    if (isNaN(price) || isNaN(amount)) {
      console.log("Error: price y amount must be numbers.");
      rl.close();
      return;
    }

    const newProduct = { name, price, amount };

    let products = [];

    // READ JSON FILE
    try {
      const data = await fs.readFile(argv.file, "utf-8");
      products = JSON.parse(data);
    } catch (error) {
      if (error.code !== "ENOENT") {
        console.log("Error reading file:", error);
        rl.close();
        return;
      }
    }

    products.push(newProduct);

    // SAVE FILE
    await fs.writeFile(argv.file, JSON.stringify(products, null, 2));

    console.log("Product saved.");

    // READ FILE
    const contenidoFinal = await fs.readFile(argv.file, "utf-8");
    console.log("JSON file:", contenidoFinal);
  } catch (error) {
    console.log("error:", error);
  } finally {
    rl.close();
  }
};

execution();
