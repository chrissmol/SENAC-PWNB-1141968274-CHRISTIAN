// Declaração de variáveis
const clientes = [];
const cepRegex = /^\d{5}-\d{3}$/;

// Função para validar os campos
function validarCampos() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cep = document.getElementById("cep").value;
  const endereco = document.getElementById("endereco").value;

  if (nome === "" || !email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/) || !telefone.match(/^\d{11}$/) || !cep.match(cepRegex)) {
    alert("Preencha todos os campos corretamente.");
    return false;
  }

  return true;
}

// Função para incluir um cliente
function incluirCliente() {
  if (!validarCampos()) {
    return;
  }

  const cliente = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    cep: document.getElementById("cep").value,
    endereco: document.getElementById("endereco").value,
  };

  clientes.push(cliente);

  limparFormulario();
  atualizarTabela();
}

// Função para limpar o formulário
function limparFormulario() {
  document.getElementById("formCliente").reset();
}

// ...

// Função para atualizar a tabela
function atualizarTabela() {
    const tableBody = document.querySelector("#tableClient tbody");
    tableBody.innerHTML = "";
  
    clientes.forEach(function (cliente, index) {
      const newRow = tableBody.insertRow();
      const cellNome = newRow.insertCell(0);
      const cellEmail = newRow.insertCell(1);
      const cellTelefone = newRow.insertCell(2);
      const cellCEP = newRow.insertCell(3);
      const cellEndereco = newRow.insertCell(4);
      const cellAcoes = newRow.insertCell(5);
  
      cellNome.textContent = cliente.nome;
      cellEmail.textContent = cliente.email;
      cellTelefone.textContent = cliente.telefone;
      cellCEP.textContent = cliente.cep;
      cellEndereco.textContent = cliente.endereco;
  
      const editButton = document.createElement("button");
      editButton.innerText = "Editar";
      editButton.addEventListener("click", function () {
        editarCliente(index);
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Excluir";
      deleteButton.addEventListener("click", function () {
        excluirCliente(index);
      });
  
      cellAcoes.appendChild(editButton);
      cellAcoes.appendChild(deleteButton);
    });
  }
  

  
  

// Função para editar um cliente
function editarCliente(index) {
  const cliente = clientes[index];
  document.getElementById("nome").value = cliente.nome;
  document.getElementById("email").value = cliente.email;
  document.getElementById("telefone").value = cliente.telefone;
  document.getElementById("cep").value = cliente.cep;
  document.getElementById("endereco").value = cliente.endereco;
  excluirCliente(index);
}

// Função para excluir um cliente
function excluirCliente(index) {
  clientes.splice(index, 1);
  atualizarTabela();
}

// Inicialização da tabela
atualizarTabela();
