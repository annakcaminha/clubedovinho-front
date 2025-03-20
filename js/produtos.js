const TABLE = document.getElementById('table-products');

listar ();

function listar() {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
        TABLE.innerHTML = '';

        dados.forEach(addLinha);
    });
}


function addLinha(cada_item) {
    TABLE.innerHTML += `
    
     <tr>
        <td>${cada_item.id}</td>
        <td>${cada_item.name}</td>
        <td>${cada_item.category}</td>
        <td><img onclick="abrirModal('${cada_item.name}', '${cada_item.image}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cada_item.image}" width="100px"></td>
        <td>${cada_item.quantity}</td>
        <td>${cada_item.price}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
            <a href="#" onclick="excluir('${cada_item.id}')" class="btn btn-outline-danger btn-sm">Excluir</a>
        </td>
     </tr>


    `
}

function excluir(id) {
   if (false === confirm ('Deseja realmente excluir?')) {
        return;
   }
   
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    alert("Produto excluído");

    listar();
}



function abrirModal (nome, imagem) {
    document.getElementById('exampleModalLabel').innerHTML = nome;
    document.getElementById('modal-produto-body').innerHTML = `
    <img src="${imagem}" width=100% >
    `
}


function addProduct() {
    event.preventDefault();

    let dados = {
        name: document.getElementById('name').value, 
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        quantity: document.getElementById('quantity').value,
        image: document.getElementById('image').value
    };

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });
    // location.href='';

    document.getElementById('form').reset();
    alert('Cadastro efetuado com sucesso!');
    listar();
}