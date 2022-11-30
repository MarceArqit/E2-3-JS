const pizzas = [
    {
      id: 1,
      nombre: "Muzzarella",
      precio: 360,
      ingredientes: ["Harina", "Agua","Levadura", "Queso Muzzarella"],
      imagen: `./pizzaImage/Photo Menu (1).png`
    },
    {
      id: 2,
      nombre: "Napolitana",
      precio: 700,
      ingredientes: ["Harina", "Agua","Levadura", "Tomate"],
      imagen: `./pizzaImage/Photo Menu (2).png`
    },
    {
      id: 3,
      nombre: "Fugazza",
      precio: 800,
      ingredientes: ["Harina", "Agua","Levadura", "Cebolla"],
      imagen: `./pizzaImage/Photo Menu (3).png`
    },
    {
      id: 4,
      nombre: "Pollo",
      precio: 900,
      ingredientes: ["Harina", "Agua","Levadura", "Pollo"],
      imagen: `./pizzaImage/Photo Menu (4).png`
    },
    {
      id: 5,
      nombre: "Tomate y Morrón",
      precio: 950,
      ingredientes: ["Harina", "Agua","Levadura","Tomate y Morron"],
      imagen: `./pizzaImage/Photo Menu (5).png`
    },
    {
      id: 6,
      nombre: "La incomible de anchoas",
      precio: 650,
      ingredientes: ["Harina", "Agua","Levadura", "Queso Muzzarella"],
      imagen: `./pizzaImage/Photo Menu (6).png`
    },
  ];

// elementos del html:

const form = document.getElementById('form')
const input = document.getElementById('input-form')
const resultContainer = document.getElementById('result-container')

let pizza = JSON.parse(localStorage.getItem(pizzas)) || []
let ID = 0;

const saveToLocalStorage =()=>{
  localStorage.setItem('pizzas',JSON.stringify(pizza))
}

const savePizza = (pizza)=>{
  pizza =[...pizzas]
}



//buscar en el array de pizza una que coincida con el valor parametro.
const searchPizza =  (value) => pizzas.find(pizza => pizza.id === value)


const showEmptyError = ()=> {
    resultContainer.innerHTML =`
    <div class="pizza-container">
            <h2 class="error-title">Por favor, ingrese un numero para que podamos buscar su pizza en el menu.</h2>
            <p>Busque su pizza favorita</p>
        </div>
    `;
}

const renderResult = (pizza) =>{
    if(!pizza){
        resultContainer.innerHTML =`
        <div class="pizza-container">
            <h2 class="error-title">No existe una pizza con el id ingresado</h2>
            <p>Realice una nueva busqueda.</p>
        </div>
        `;
    }else{
        resultContainer.innerHTML = `
        <div class="background">
            <div class ="pizza-container_2">
              <img src="${pizza.imagen}" alt="pizza" >
              <h2 class="error-title">${pizza.nombre}</h2>
              <h3>$${pizza.precio}</h3>
              <h3>Ingredientes:${pizza.ingredientes}</h3>
              <p>Busca otra pizza para conocer otras opciones.</p>   
    
        </div>
        </div>
        
        `;
    }
}


const submitSearch =(e)=>{
   e.preventDefault();
   const searchedValue = input.value;
   if (!searchedValue){
    showEmptyError ();
    return
   }

const searchedPizza = searchPizza(Number(searchedValue))
renderResult (searchedPizza)
}

  // funcion inicializadora:

  const init =()=>{
form.addEventListener('submit',submitSearch)
  }

  init()