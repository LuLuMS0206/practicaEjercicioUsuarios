//1 Consumir (fetch) la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male

let url = 'https://fakerapi.it/api/v1/users?_quantity=20&_gender=male'

    //lo muestro en html
    let arrayPersonas = [];
    let exercise1 = document.getElementById('exercise1');
    const writeTextInHtml = (arrayPersonas) => {
        arrayPersonas.forEach(personas => {
            const contentText = document.createElement('p');
            contentText.innerText = `${personas.id} ${personas.firstname} ${personas.lastname}`;
            exercise1.appendChild(contentText)
        });
    }

// aquí hago la peticion a la url
const api = fetch(url)
    .then((apiResponse) => {
        console.log(apiResponse)
        if (apiResponse.ok) {
            apiResponse.json()
                .then((jsonData) => {
                    arrayPersonas = jsonData.data;
                    console.log(arrayPersonas)
                    writeTextInHtml (arrayPersonas)
                })
        } else {
            alert("En la Api ha habido un error")
        }
    })




//3 Crear un input que permita filtrar por nombre de la persona

// import { personas } from '';

const inputName = document.getElementById('inputName');
inputName.placeholder = 'Busqueda por nombre y apellidos';
const input = document.createElement('input');
input.addEventListener("change", (event) => {
    let userInput = event.target.value;
    
    // Filtrar las personas por nombre y apellidos
    const personasFiltradas = personas.filter(persona =>
        persona.firstname.includes(userInput) || 
        persona.lastname.includes(userInput)
    );
    
    // Llamar a una función para escribir los resultados en el HTML
    writeInputInHtml(personasFiltradas);
});


inputName.appendChild(input);

//4 Tener un input de número que permita especificar un número de valores que obtener de la API EJ: Si quiero obtener 90 valores, poder poner 90 en un input HTML y que se haga la petición a la API. La url seria https://fakerapi.it/api/v1/users?_quantity=90&_gender=male

const inputNumber = document.getElementById('inputNumber');
inputNumber.placeholder = 'Busqueda por número de valores de la Api';
const input2 = document.createElement('input')