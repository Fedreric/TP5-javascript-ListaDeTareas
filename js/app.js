const contenedorLista = document.getElementById('contenedorLista');
const formInputItem = document.getElementById('formInputItem');
let item = document.getElementById('item');
let listaDeItems = [];
formInputItem.addEventListener('submit', agregarItem);


function agregarItem(e){
    e.preventDefault();
    listaDeItems.push(item.value);
    formInputItem.reset();
    mostrarLista();
}

function mostrarLista(){
    contenedorLista.innerHTML = '';
    const lista = document.createElement('ul');
    contenedorLista.appendChild(lista);
    listaDeItems.forEach(function (item,index) {
        const li = document.createElement('li');
        li.textContent = item;
        lista.appendChild(li).innerHTML += `<button class="btn btn-outline-danger" onclick="eliminar(${index})"><i class="bi bi-trash-fill"></i></button>`;
    });
}

function eliminar (index){
    let bandera = confirm(`Seguro desea eliminar el item: ${listaDeItems[index]}?`);
    if(bandera === true){
        listaDeItems.splice(index,1);
        mostrarLista();
    }
}