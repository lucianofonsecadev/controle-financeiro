let transacoes = [];

const nomesCategorias = {

    alimentacao: "Alimentação",
    moradia: "Moradia",
    transporte: "Transporte",
    lazer: "Lazer",
    salario: "Salário",
    outros: "Outros"

}

const formulario = document.getElementById("formulario");
const descricao = document.getElementById("input-descricao");
const valor = document.getElementById("input-valor");
const tipo = document.querySelector("#tipo-opcoes");
const categoria = document.querySelector("#categoria-opcoes");
const data = document.getElementById("input-data");
const tabela = document.querySelector("#tabela tbody");

const entradas = document.getElementById("total-entradas");
const saidas = document.getElementById("total-saidas");
const saldo = document.getElementById("total-saldo");

function formatarData(dataIso) {

    if(!dataIso) {
        return "";
    }

    const partes = dataIso.split("-");

    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];

    return `${dia}/${mes}/${ano}`;

}


function formatarMoeda(numero) {

    if(!numero) {
        return "";
    }

    return numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const novaTransacao = {
        id: Date.now(),
        descricao: descricao.value,
        data: data.value,
        valor: Number(valor.value),
        tipo: tipo.value,
        categoria: categoria.value
    };

    transacoes.push(novaTransacao);

    formulario.reset();
})

function renderizarTabela() {

    tabela.innerHTML = ""; 

    if(transacoes.length === 0) {

        const mensagem = document.createElement("td");

        mensagem.textContent = "Nenhuma transação cadastrada";

        mensagem.colSpan = 5;

        const linha = document.createElement("tr");

        tabela.appendChild(linha);

        linha.appendChild(mensagem);

        return;
    };

    if(transacoes.length > 0) {

        transacoes.forEach(item => {

            const linha = document.createElement("tr");

            
        })
    }
}











