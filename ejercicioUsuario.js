//1 Consumir (fetch) la API de usuarios https://fakerapi.it/api/v1/users?_quantity=20&_gender=male

let url = 'https://fakerapi.it/api/v1/users?_quantity=20&_gender=male'

    //lo muestro en html
    let arrayPersonas = [];
    let exercise1 = document.getElementById('exercise1');
    const writeTextInHtml = (arrayPersonas, divId) => {
        const div = document.getElementById(divId)
        div.innerHTML= '';
        arrayPersonas.forEach(personas => {
            const contentText = document.createElement('p');
            contentText.innerText = personas.getInfo()
            div.appendChild(contentText)
        });
        
    }
    
// aquí hago la peticion a la url
const fetchData = (url, divId) => {
    const api = fetch(url)
    .then((apiResponse) => {
        console.log(apiResponse);
        if (apiResponse.ok) {
            apiResponse.json()
                .then((jsonData) => {
                arrayPersonas = jsonData.data;
                    let usuariosList = [];
                    arrayPersonas.forEach((person) => {
                        const user = new Usuario (person.firstname, person.lastname, person.id, person.username, person.email); // agregamos nuestros nuevos usuarios a una variable
                        console.log(user); // mostramos por consola nuestros usuarios
                        usuariosList.push(user); // añadimos los usuarios a nuestro array userList
                    });
                    console.log(usuariosList);
                    writeTextInHtml(usuariosList,divId);
                    searchInput(usuariosList);
                });
        } else {
            alert("En la Api ha habido un error");
        }
    });
}

fetchData(url,'exercise1')



