// ### NOTAS DE AUULA ###

// let pessoa {
// nome: "Chiquim",
//     time: "Fortaleza",
//     cidade: "Caucaia",
//     numeroDoTorcedor: 15


// }

// pessoa.cidade; //para pegar o dado Caucaia dentro de um objeto {}
// pessoa['cidade']; //para pegar o dado caucaia dentro de um objeto {}


// let dados = [
//     "Chiquim"
//     "Maria"
//     "Zezim"

//];

//dados[1] //para pegar o dado maria dentro de uma array []

//objeto: pode colocar atribuições para os dados, como nome, cidade... array fica apenas a lista com os dados soltos.






const TABELA = document.getElementById('table-categories');

let dados = [

    {
        id: 1,
        nome: 'Espumante',
        descricao:'Desc do espumante'
    },
    {
        id: 2,
        nome: 'Branco',
        descricao:'Vinho de uvas brancas'
    },
    {
        id: 3,
        nome: 'Verde',
        descricao:'Vinho de uvas verdes, exclusivamente de Portugal'
    },
    {
        id: 4,
        nome: 'Rosé',
        descricao:'Vinho rosé suave'
    },

]


dados.forEach(addLinhaNaTabela);



function addLinhaNaTabela(categoria) {
    TABELA.innerHTML += `
    
     <tr>
        <td>${categoria.id}</td>
        <td>${categoria.nome}</td>
        <td>${categoria.descricao}</td>
        <td>
            <a href="#" class="btn btn-outline-warning btn-sm">Editar</a>
            <a href="#" class="btn btn-outline-danger btn-sm">Excluir</a>
        </td>
     </tr>
    

    `
    
}
