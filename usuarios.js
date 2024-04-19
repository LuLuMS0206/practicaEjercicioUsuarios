//2 Crear las clases de Persona y Usuarios, teniendo en cuenta que tienen propiedades comunes 
//2.1 Mostrarlo en HTML los resultados de usuarios. DE LA FORMA MÁS SENCILLA POSIBLE




class Usuario extends Personas {
    constructor(firstname, lastname, id, username, email) {
        super(firstname, lastname, id);
        this.username = username;
        this.email = email;
    }

    getusername() {
        return this.username
    }

    getemail() {
        return this.email
    }

    getInfo() {
        return `${this.firstname} ${this.lastname} ${this.id} ${this.username} ${this.email}`
    }
}

const usuarios = document.getElementById("usuarios");
