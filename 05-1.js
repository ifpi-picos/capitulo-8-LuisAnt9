let users = []; // Lista para armazenar os dados dos usuários (privada)

function addUser(nome, email, senha) {
  if (!nome || !email || !senha) {
    return "Erro: todos os campos são obrigatórios.";
  }

  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return "Erro: email já cadastrado.";
  }

  users.push({ nome, email, senha });
  return "Usuário adicionado com sucesso.";
}

function removeUser(email) {
  const index = users.findIndex(user => user.email === email);
  if (index === -1) {
    return "Erro: usuário não encontrado.";
  }

  users.splice(index, 1);
  return "Usuário removido com sucesso.";
}

function updateUser(email, nome, senha) {
  const user = users.find(user => user.email === email);
  if (!user) {
    return "Erro: usuário não encontrado.";
  }

  if (nome) {
    user.nome = nome;
  }
  if (senha) {
    user.senha = senha;
  }

  return "Usuário atualizado com sucesso.";
}

module.exports = {
  addUser,
  removeUser,
  updateUser,
};