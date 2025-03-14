const TABLE = document.getElementById('table-products');


fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
        dados.forEach(addLinha);
    });

function addLinha(cada_item) {
    TABLE.innerHTML += `
    
     <tr>
        <td>${cada_item.id}</td>
        <td>${cada_item.name}</td>
        <td>${cada_item.category}</td>
        <td><img onclick="abrirModal('${cada_item.name}', '${cada_item.image}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cada_item.imagem}" width="100px"></td>
        <td>${cada_item.quantity}</td>
        <td>${cada_item.price}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
            <a href="#" onclick="excluir(${cada_item.id})" class="btn btn-outline-danger btn-sm">Excluir</a>
        </td>
     </tr>


    `
}

function excluir(id) {
   if (false === confirm ('Confirma ou sem firma?')) {
        return;
   }
   
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    alert("Produto excluído");

    location.href = "";
}


function abrirModal (nome, imagem) {
    document.getElementById('exampleModalLabel').innerHTML = nome;
    document.getElementById('modal-produto-body').innerHTML = `
    <img src="${imagem}" width=100% >
    `
}