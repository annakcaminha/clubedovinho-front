const CONT = document.getElementById('contagem');

let contador = 0;


function alterar_contagem(input) {

    if(input.checked === true) {
        contador++;
    } else {
        contador--;
    }

    CONT.innerHTML = contador;
}

// localStorage.setItem();
// sessionStorage.setItem();
// cookieStorage.setItem();


function habilitarDarkmode(event) {
    if (event.checked === false) {
        localStorage.removeItem('darkmode');
        location.href = "";
        return;
    }

    localStorage.setItem('darkmode', 'sim');
    document.getElementsByTagName("head")[0].innerHTML += `
        <link rel="stylesheet" href="../css/darkmode.css">
    `;
}

if (localStorage.getItem('darkmode') === 'sim') {
    document.getElementById('darkmode').checked = true;
    
}