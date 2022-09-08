function post(url, body, header) {
  fetch(url, {
    method: "POST",
    headers: header, //{"content-type": "application/json; charset=UTF-8"}
    body: JSON.stringify(body),
  })
    //Tratamento do sucesso
    .then((response) => response.json()) //converter para json
    .then((body) => {
      console
        .log("Success: ", body) //imprimir dados no console
        .catch((err) => console.log("Erro de solicitação", err));
    });
}

function createProduct() {
  const url = "http://localhost:3333/product";
  const productName = document.getElementById("product").value;
  const stock = document.getElementById("stock").value;
  const amount = document.getElementById("amount").value;  

   
  const body = {
    "productName": productName,
    "stock": stock,
    "amount": amount.replace(".", "").replace(",", ".")
  };
  
  const header = {
    "Content-Type": "application/json"
  };

  alert("O Produto foi Gravado com sucesso no Banco de Dados!")
  //Retirar vírgulas e pontos(linha 25)

  post(url, body, header);
}

/******************************************************************* */

String.prototype.reverse = function(){
  return this.split('').reverse().join('');
};

function mascaraMoeda(campo,evento){
  let tecla = (!evento) ? window.event.keyCode : evento.which;
  let valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
  let resultado  = "";
  let mascara = "##.###.###,##".reverse();
  for (let x=0, y=0; x<mascara.length && y<valor.length;) {
      if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
      } else {
      resultado += valor.charAt(y);
      y++;
      x++;
      }
  }
  campo.value = resultado.reverse();
}
