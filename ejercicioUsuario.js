//1 Consumir (fetch) la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male

const api = fetch('https://fakerapi.it/api/v1/users?_quantity=20&_gender=male')
    .then((apiResponse) => {
        console.log(apiResponse)

        if (apiResponse.ok) {
            apiResponse.json()
                .then((jsonData) => {
                    console.log('respuesta', jsonData)
                    const wirteUsuariosInHtml = jsonData.data
                    console.log('wirteUsuariosInHtml', wirteUsuariosInHtml)
                })
        } else {
            alert("En la Api ha habido un error")
        }
    })



//3 Crear un input que permita filtrar por nombre de la persona

import { personas } from 'personas.js';

const inputName = document.getElementById('inputName');
inputName.placeholder = 'Busqueda por nombre y apellidos';
const input = document.createElement('input');
input.addEventListener("input", (event) => {
    const userInput = event.target.value.toLowerCase();
    
    // Filtrar las personas por nombre y apellidos
    const personasFiltradas = personas.filter(persona =>
        persona.firstname.toLowerCase().includes(userInput) || 
        persona.lastname.toLowerCase().includes(userInput)
    );
    
    // Llamar a una función para escribir los resultados en el HTML
    writeInputInHtml(personasFiltradas);
});



inputName.appendChild(input);

