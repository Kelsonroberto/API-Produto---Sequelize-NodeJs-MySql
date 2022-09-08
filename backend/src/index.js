
(async () => {
    const database = require("./db.js")
    const products = require("./products.js")
    await database.sync()
    const product = await products.create(
        {
            productName: "Arroz Rei Arthur 5kg",
            stock: 5,
            amount: 17.99,
            createAt: new Date("2022-05-04 16:37:25"),
            updateAt: new Date()
        }
    )
    console.log(product);
})();