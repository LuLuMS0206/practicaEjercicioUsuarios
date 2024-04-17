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


const usuario1 = new Usuario('Lucia', 'Macho', 21, 'lulums', 'luciamacho00@gmail.com');
const usuario2 = new Usuario('Carlota', 'Casas', 22, 'carloti', 'carlota20@gmail.com');


const usuario1Element = document.createElement('usuario1Element');
usuario1Element.textContent = `Nombre: ${usuario1.firstname} ${usuario1.lastname}, Username: ${usuario1.username}, Email: ${usuario1.email}`;
usuarios.appendChild(usuario1Element);

const usuario2Element = document.createElement('usuario2Element');
usuario2Element.textContent = `Nombre: ${usuario2.firstname} ${usuario2.lastname}, Username: ${usuario2.username}, Email: ${usuario2.email}`;
usuarios.appendChild(usuario2Element);