// Funcion para hacer aparecer el menu y que este activo
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); 
}
/*
Script para recoger la imagen de perfil del CurrentUser, es decir
el usuario loggeado actualmente
*/
document.addEventListener('DOMContentLoaded', function () {

    // Cargar el usuario actual desde localStorage

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Verificar si hay un usuario actual y una imagen de perfil
    if (currentUser && currentUser.profileImage) {
        // Asignar la imagen de perfil al <img> en el header
        const userImg = document.getElementById('user-profile-img');
        userImg.src = currentUser.profileImage;
    }
});
//Funcion para cerrar sesion en caso de que hagamos click en aceptar
function cerrarSesion() {
    const confirmacion = confirm("¿Estás seguro de que deseas cerrar sesión?");
    
    switch (confirmacion) {
        case true:
            // Si el usuario confirma, realiza el cierre de sesión
            localStorage.removeItem("currentUser");
            localStorage.removeItem("isLoggedIn");
            window.location.href = "login.html";
            break;
            
        case false:
            // Si el usuario cancela, no hacer nada
            break;
    
        default:
            break;
    }
}

function startGame(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtiene el dinero ingresado
    const money = parseInt(document.getElementById("starting-money").value);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (currentUser) {
        // Encontrar el índice del usuario en el arreglo
        const userIndex = users.findIndex(user => user.username === currentUser.username);

        if (userIndex !== -1) {
            // Actualizar el dinero del usuario actual
            users[userIndex].dinero = money +  users[userIndex].dinero;

            // Actualizar el usuario actual y el arreglo de usuarios en localStorage
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
        }
    }

    // Redirige a la página del juego
    window.location.href = "blackjack.html";
}