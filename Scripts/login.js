document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Obtener el arreglo de usuarios de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar si existe un usuario con el nombre de usuario y contraseña proporcionados
    const user = users.find(user => user.username === username && user.password === password);

   //  console.log(user); // Para ver que contiene user
   // console.log(new Blob([JSON.stringify(user)]).size); // (Para hacer debugging)


    try {
        if (user) {
            alert("Inicio de sesión exitoso!");
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = "menu.html";
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
        }
    } catch (error) {
        console.error("Error en el proceso de inicio de sesión:", error);
    }
    
});
