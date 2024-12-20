//document.body.style.backgroundColor='red'; //isso deixa o background inteiro vermelho, modifica o html

function enviar() { //lá no form, colocamos submit="enviar()" isso faz com que ao executar o formulário, ou seja, enviar, essa função seja ativada
    
    event.preventDefault(); //impede o formulário de ser enviado em caso de falha
    
    //declarações:
    let input_nome = document.getElementById('nome');
    let textarea_descricao = document.getElementById('descricao');
    let erro_nome = document.getElementById('erro_nome');
    let erro_descricao = document.getElementById('erro_descricao');

    //validações:
    if(input_nome.value == '') {
        input_nome.style.border = '1px solid red';
        input_nome.classList.add('is-invalid');
        erro_nome.style.display='block';
    } else {
        input_nome.style.border = '1px solid green';
        input_nome.classList.remove('is-invalid');        
        input_nome.classList.add('is-valid');
        erro_nome.style.display='none';
    }
    
    
    if(textarea_descricao.value == '') {
        textarea_descricao.style.border = '1px solid red';
        textarea_descricao.classList.add('is-invalid');
        erro_descricao.style.display='block';
    } else {
        textarea_descricao.style.border = '1px solid green';
        textarea_descricao.classList.remove('is-invalid');
        textarea_descricao.classList.add('is-valid'); //não tá mudando se já estiver vernmelho, como inválido
        erro_descricao.style.display='none';
    }
}
