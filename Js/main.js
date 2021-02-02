var logado = false
var mostraFormProduto = false
if (sessionStorage.getItem("acesso") === "true") {
    logado = true
    console.log("entrou")
} else {
    alert("voce nao esta autenticado!")
    window.location.href = "login.html"
}

function controleFormProduto() {
    mostraFormProduto = !mostraFormProduto
    var form = document.getElementById("formProduto")

    if (mostraFormProduto) {
        form.style.display = "block"
    } else {
        form.style.display = "none"
    }

}

function cadastraProduto() {
    var produtoDescricao = document.getElementById("produtoDescricao")
    var produtoQuantidade = document.getElementById("produtoQuantidade")

    var dados = JSON.parse(localStorage.getItem("dadosProduto"))

    if (dados == null) {
        localStorage.setItem("dadosProduto", "[]")
        dados = []
    }

    var auxRegistro = {
        nome: produtoDescricao.value,
        quantidade: produtoQuantidade.value
    }

    dados.push(auxRegistro)

    localStorage.setItem("dadosProduto", JSON.stringify(dados))
    alert("registro incluido")

    produtoDescricao.value = ""
}