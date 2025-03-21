const database = require("./05-1.js");

console.log(database.addUser("João", "joao@email.com", "senha123"));
console.log(database.addUser("Maria", "maria@email.com", "senha456"));
console.log(database.addUser("João", "joao@email.com", "senha123"));//retorna erro
console.log(database.addUser("Pedro", "pedro@email.com")); // retorna erro
console.log(database.updateUser("maria@email.com", "Mariana", "senha789"));
console.log(database.removeUser("joao@email.com"));
console.log(database.removeUser("joao@email.com"));//retorna erro