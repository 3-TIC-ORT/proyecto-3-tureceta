let username = "UsuarioEjemplo";
let password = "ContraseñaEjemplo";

localStorage.setItem("username", username);
localStorage.setItem("password", password);

let storedUsername = localStorage.getItem("username");
let storedPassword = localStorage.getItem("password");

console.log(storedUsername);
console.log(storedPassword); 
