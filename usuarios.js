//2 Crear las clases de Persona y Usuarios, teniendo en cuenta que tienen propiedades comunes 
//2.1 Mostrarlo en HTML los resultados de usuarios. DE LA FORMA MÁS SENCILLA POSIBLE




class Usuario extends Personas {
    constructor(firstname, lastname, id, username, email) {
        super(firstname, lastname, id);
        this.username = username;
        this.email = email;
    }
}

const usuarios = document.getElementById("usuarios");

const usuario = document.createElement('p');
usuario.textContent = `Nombre: ${usuario.firstname} ${usuario.lastname}, Username: ${usuario.username}, Email: ${usuario.email}`;
usuarios.appendChild(usuario);