const mensagemErro = document.querySelector("#mensagemErro");
const cepbusca = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const localidade = document.querySelector("#localidade");
const uf = document.querySelector("#uf");
const btnBuscar =  document.querySelector("#botao_buscar");
const btnLimpar =  document.querySelector("#botao_limpar");
const btnSalvar =  document.querySelector("#botao_salvar"); 
let endereco;

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault(); 
    try{
        validaCEP();
    }catch(erro){
        mensagemErro.innerHTML = erro.message;
    }
})

btnLimpar.addEventListener('click', () => {
    limparCampos();
})

btnSalvar.addEventListener('click', () => {
    alert("Dados salvos com sucesso!!!");
    limparCampos();
})

function buscaEndereco() {
    fetch(`https://viacep.com.br/ws/${cepbusca.value}/json/`)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resposta) => {
            preencheCampos(resposta);
        })
        .catch((erro) => {
            console.error(erro);
        })
}

function validaCEP() {
    const regex = /^([0-9]{8})$/;
    if (regex.test(cepbusca.value)) {
            buscaEndereco();
    } else {
        throw new Error("O CEP informado não é válido.");
    }
}

function preencheCampos(endereço) {
    for(const campo in endereço) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = endereço[campo];
        }
    }
}

function limpaCampos(){
    cepbusca.value = "";
    logradouro.value = "";
    bairro.value = "";
    localidade.value = "";
    uf.value = "";
    mensagemErro.innerHTML = "";
}



