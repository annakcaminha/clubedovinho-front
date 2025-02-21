const TABLE = document.getElementById('table-clients');


fetch('https://feitoza.tec.br/api/')
.then(res => res.json())
.then(clients => {

    clients.forEach(addLinha);
    
    function addLinha(clients) {
        TABLE.innerHTML += `
        
         <tr>
            <td>${clients.id}</td>
            <td>${clients.nome}</td>
            <td>${clients.email}</td>
            <td>${clients.telefone}</td>
            <td><img src="${clients.foto}" width="100px"></td>
            <td>${clients.data_cadastro}</td>
            <td>${clients.data_ultimo_pedido}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
                <a href="#" class="btn btn-outline-danger btn-sm">Excluir</a>
            </td>
         </tr>
    
    
        `
    }
 
});




