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



//3
