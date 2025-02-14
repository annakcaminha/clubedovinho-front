const TABELA_PAISES = document.getElementById('table-country');

let itens = [ 
    {   
        id: 1,
        nome: 'Brasil',
        bandeira: 'b',

    },
    {   
        id: 2,
        nome: 'Itália',
        bandeira: 'i',

    },
    {   
        id: 3,
        nome: 'França',
        bandeira: 'f',

    },
]

itens.forEach(addLinha);


function addLinha(cada_item) {
    console.log (cada_item)
    TABELA_PAISES.innerHTML += `
    
     <tr>
        <td>${cada_item.id}</td>
        <td>${cada_item.nome}</td>
        <td>${cada_item.bandeira}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
            <a href="#" class="btn btn-outline-danger btn-sm">Excluir</a>
        </td>
     </tr>
    

    `
}