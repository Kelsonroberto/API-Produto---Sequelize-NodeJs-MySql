const database = require("./db.js")
const Products = require("./products.js")
const  { Op }  = require("Sequelize");
const cors = require("cors")
const express = require("express");
const app = express()
app.use(express.json())
app.use(cors())


// Rota para inserir um produto
app.post("/product", async (request, response) =>{
    try{
        await database.sync()
        const {productName,stock,amount} = request.body
        await Products.create(
            {
                productName,
                stock,
                amount,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        )
        return response.status(201).send()
    }
        catch(error){
            return response.status(400).json(error)
        }
})

//Rota para selecionar todos os produtos
app.get("/products", async (request, response) => {
    try{
        const database = require("./db.js")
        const products = require("./products.js")
        await database.sync()
        const product = await products.findAll();
        return response.json(product)
        
    }
    catch(error){
        console.log(error)
    }
})

//Rota para selecionar um ou mais produtos pelo nome utilizando o operador Like
app.get("/products/name", async (request, response) => {
    try{
    const { name } = request.body
        const product = await Products.findAll({
            where: { productName:{ [Op.like]: `%${name}%`} }
            
        })
    return response.json(product)
    } 
    catch(error){
        console.log(error)
    }
})


//Rota para buscar um produto pelo idProduct(id)
app.get("/products/searchId/:id", async (request, response) => {
    try{
        const { id } = request.params
        const product = await Products.findByPk(id)           
        return response.json(product)
        
    }
    catch(error){
        console.log(error)
    }
})
//Rota para deletar um produto pelo idProduct(id)
app.delete("/product/:id", async (request, response) => {
    try {
        const { id } = request.params        
        const del = await Products.destroy({where:{idProducts: id}})
        return response.status(201).json(del)
        //return response.status(200)

    } catch (error) {
        console.log(error)
    }
})

//Rota para alterar o nome do produto, quantidade estoque e o valor pelo idProduct(id)
app.put("/product", async (request, response) => {
    try{       
        const { id } = request.headers 
        const { productName,stock,amount} = request.body                    
        await Products.update(
            {
                productName: productName,
                stock: stock,
                amount: amount
            }, 
            {
                where: { idProducts: id }
            }         
        )
        return response.status(201)
        
    }
    catch(error){
        console.log(error)
    }
})

app.listen(3333)