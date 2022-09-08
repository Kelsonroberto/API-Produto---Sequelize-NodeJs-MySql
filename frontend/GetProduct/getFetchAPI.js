function showData(data) {
  //console.log(data);
  //Montando o cabecalho atraves desta funcao
  let table = createHead();
  //criar um tbody
  let tbody = document.createElement("tbody");

  data.map((item) => {
    let dataRow = createRow(item);
    tbody.appendChild(dataRow);
  });

  table.appendChild(tbody);
}

function createHead() {
  //criar uma table
  let table = document.createElement("table");
  //criar um thead
  let thead = document.createElement("thead");

  //colocando o elemento semantico de cabecalho dentro da tabela semantica
  table.appendChild(thead);

  //criando o elemento semantico de linha para o cabecalho
  let headerRow = document.createElement("tr");

  //criando os itens de titulo do cabecalho (propridade do JSON/tabela)
  let HeaderRowItem01 = document.createElement("th");
  HeaderRowItem01.innerHTML = "Produto";
  let HeaderRowItem02 = document.createElement("th");
  HeaderRowItem02.innerHTML = "Quantidade";
  let HeaderRowItem03 = document.createElement("th");
  HeaderRowItem03.innerHTML = "Valor";

  //colocando os itens dentro da TR, ou seja, da linha do cabecalho
  headerRow.appendChild(HeaderRowItem01);
  headerRow.appendChild(HeaderRowItem02);
  headerRow.appendChild(HeaderRowItem03);

  //colocar a linha de cabecalho dentro do cabecalho da tabela
  thead.appendChild(headerRow);

  //colacando a tabela dentro do corpo do html (na pagina)
  let content = document.getElementById("content");
  content.appendChild(table);

  return table;
}

function createRow(item) {
  //criar uma linha de dados para a tabela
  let dataRow = document.createElement("tr");
  //criamos uma celula para receber o nome do produto
  let productName = document.createElement("td");
  //criamos uma celula para receber a quantidade em estoque
  let stock = document.createElement("td");
  //criamos uma celula para recever o valor do produto
  let amount = document.createElement("td");

  //Colocamos os valores do banco de dados dentro das variaveis da tabela
  productName.innerHTML = item.productName;
  stock.innerHTML = item.stock;
  amount.innerHTML = item.amount;

  //colocando os dados dentro da linha de cada produto
  dataRow.appendChild(productName);
  dataRow.appendChild(stock);
  dataRow.appendChild(amount);

  return dataRow;
}

function fetchApiData() {
  fetch("http://localhost:3333/products")
    .then((response) => response.json())
    .then(data => showData(data))
    .catch(error => console.log(error));

    
}

const btnGet = document.getElementById("btnGet");
btnGet.onclick = () => fetchApiData();
