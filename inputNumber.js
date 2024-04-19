//4 Tener un input de número que permita especificar un número de valores que obtener de la API EJ: Si quiero obtener 90 valores, poder poner 90 en un input HTML y que se haga la petición a la API. La url seria https://fakerapi.it/api/v1/users?_quantity=90&_gender=male

const inputNumber = document.getElementById('inputNumber');
let input2 = document.createElement('input');
input2.placeholder = 'Búsqueda por número de valores de la API';
input2.addEventListener('change', (event) => {
    let inputTypeNumber = event.target.value;
    let newUrl = `https://fakerapi.it/api/v1/users?_quantity=${inputTypeNumber}&_gender=male`
    fetchData(newUrl)
})
inputNumber.appendChild(input2);

