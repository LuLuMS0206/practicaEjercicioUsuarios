//3 Crear un input que permita filtrar por nombre de la persona


const input = document.createElement('input');
const searchInput = (usuariosList) => {
    input.placeholder = 'Busqueda por nombre';
    input.addEventListener("change",(event) => {
    let userInput = event.target.value;
    writeTextInHtml(usuariosList.filter(user => user.firstname.includes(userInput)), 'inputNameContent')
    
});
inputName.appendChild(input);
}