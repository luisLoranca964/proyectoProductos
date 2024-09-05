let divData = document.getElementById("divData")

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method: "GET"})
    promesa.then( (response) => {
        response.json().then(
            (data)=>{
                console.log(data)
                createCards(data)
            })
        .catch((error)=>console.log("Problema con el json", error))
    })
    .catch((err)=>console.log("Error en la solicitud", err))
}

function createCards(products){
   products.forEach(element => {

    divData.insertAdjacentHTML("afterbegin",
        `
            <div class="card m-2" style=" display: inline-block">
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</a>
                <p class="card-text">${element.price} USD</a>
            </div>
            </div>
         `
    )
   });
}
getData()