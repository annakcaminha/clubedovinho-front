const TABLE = document.getElementById('table-products');


let itens = [ 
    {   
        id: 1,
        nome: 'Quinta do Morgado',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://images.rappi.com.br/products/313306468675_jwsfzseujjas_124100922271_ixnzygevdpsn_227353_1.png',
        quantidade: 20,
        valor: 10.90,

    },
    {   
        id: 2,
        nome: 'Dom Bento',
        categoria: 'Vinho Tinto Suave',
        imagem: 'https://cdn.awsli.com.br/1958/1958204/produto/203245775/screenshot_20230223_190651_instagram-pamtvr.jpg',
        quantidade: 10,
        valor: 2.90,

    },
]

itens.forEach(addLinha);


function addLinha(cada_item) {
    TABLE.innerHTML += `
    
     <tr>
        <td>${cada_item.id}</td>
        <td>${cada_item.nome}</td>
        <td>${cada_item.categoria}</td>
        <td><img onclick="abrirModal('${cada_item.nome}', '${cada_item.imagem}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${cada_item.imagem}" width="100px"></td>
        <td>${cada_item.quantidade}</td>
        <td>${cada_item.valor}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
            <a href="#" class="btn btn-outline-danger btn-sm">Excluir</a>
        </td>
     </tr>


    `
}

function abrirModal (nome, imagem) {
    document.getElementById('exampleModalLabel').innerHTML = nome;
    document.getElementById('modal-produto-body').innerHTML = `
    <img src="${imagem}" width=100% >
    `
}