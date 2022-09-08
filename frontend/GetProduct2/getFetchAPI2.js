/*function criarTitulo(){
    let titulo = document.createElement("h1")
    titulo.innerHTML = "Produto cadastrados"
    body.appendChild(titulo)
}*/

function get(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function createHead() {
        //criar uma table
        let table = document.createElement("table")
        //criar um thead
        let thead = document.createElement("thead")
   
        //colocando o elemento semantico de cabecalho dentro da tabela semantica
        table.appendChild(thead)
    
        //criando o elemento semantico de linha para o cabecalho
        let headerRow = document.createElement("tr")
    
        //criando os itens de titulo do cabecalho (propridade do JSON/tabela)
        let HeaderRowItem01 = document.createElement("th")
        HeaderRowItem01.innerHTML = "Produto"
        let HeaderRowItem02 = document.createElement("th")
        HeaderRowItem02.innerHTML = "Quantidade"
        let HeaderRowItem03 = document.createElement("th")
        HeaderRowItem03.innerHTML = "Valor"
    
        //colocando os itens dentro da TR, ou seja, da linha do cabecalho
        headerRow.appendChild(HeaderRowItem01)
        headerRow.appendChild(HeaderRowItem02)
        headerRow.appendChild(HeaderRowItem03)
    
        //colocar a linha de cabecalho dentro do cabecalho da tabela
        thead.appendChild(headerRow)
        
        //colacando a tabela dentro do corpo do html (na pagina)
        let body = document.getElementById("body")
        body.appendChild(table)

        return table
}

function createRow(product){
    //criar uma linha de dados para a tabela
    let dataRow = document.createElement("tr")
    //criamos uma celula para receber o nome do produto
    let productName = document.createElement("td")
    //criamos uma celula para receber a quantidade em estoque
    let stock = document.createElement("td")
    //criamos uma celula para recever o valor do produto
    let amount = document.createElement("td")

    //Colocamos os valores do banco de dados dentro das variaveis da tabela
    productName.innerHTML = product.productName
    stock.innerHTML = product.stock
    amount.innerHTML = product.amount

    //colocando os dados dentro da linha de cada produto
    dataRow.appendChild(productName)
    dataRow.appendChild(stock)
    dataRow.appendChild(amount)

    return dataRow
}

function main(){
    //url rota para obter todos os dados em string (texto)
    const data = get("http://localhost:3333/products")
    //criar um variavel para pegar todo os dados em json
    const products = JSON.parse(data)
    //Montando o cabecalho atraves desta funcao
    let table = createHead()
    //criar um tbody
    let tbody = document.createElement("tbody")   
    //loop para pegar todos os produto e adicionar no corpo da tabela
    products.forEach(product => {
        let dataRow = createRow(product)
        tbody.appendChild(dataRow)
    });
    table.appendChild(tbody)
}

main()