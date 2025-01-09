const SELECT_DIA = document.getElementById('select-dia');
const SELECT_MES = document.getElementById('select-mes');
const SELECT_ANO = document.getElementById('select-ano');

let numero = 1;

while (numero <= 31) {
    SELECT_DIA.innerHTML += `<option>${numero}</option>`;

    numero++;
}

// --------- MES -----------
let mes = 1;

do {
    SELECT_MES.innerHTML += `<option>${mes}</option>`;
    mes++;
} while(mes <= 12);


//--------- ANO -----------
for (let ano = 2025; ano >= 1950; ano-- ) {
     if (ano % 2 !== 0) { //testa se é impar
         SELECT_ANO.innerHTML += `<option>${ano}</option>`;
     }
    
}

// Em casa: 
// mostrar os nomes dos meses ao inves dos números







// let nome = 'Bruno';
// let idade = 30;
// let cidade = 'Caucaia';
// let hobby = 'Pescar';

// let frase = "Oi, meu nome é " + nome + ", tenho " + idade + " anos de idade, e moro em " + cidade + " e " + hobby + " é meu passatempo";


// //template string
// let frase2 = `Oi, meu nome é ${nome}, tenho ${idade} anos de idade, moro em ${cidade}, e ${hobby} é meu passatempo`;