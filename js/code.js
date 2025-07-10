//resumo< clicou- for none passa para block e 
//se for block passa para none

//1- usuario clica no botão whatsapp- executa função enviaMsg()
function showMessage() {
    var divMessage = document.getElementById('whats-message');
var propDisplay = window.getComputedStyle(divMessage).display;


    //2-verifica se a propriedade display é "none"


    //(document.getElementById('whats-message').display);
    if (propDisplay == 'none') {

        divMessage.style.display = 'block';

    } else {
        divMessage.style.display = 'none';
    }
}


//envia mensagem para um numero de whatsapp
const enviaMsg = ()=>{
   const numero = 5512981704303;


   const mensagem = document.getElementById('msg').value;
// aumentar a segurança do texto enviado
const msgCodificada = encodeURIComponent(
mensagem);


   //evita o envio se a caixa de texto estiver vazia
   if(mensagem ==''){
alert('por favor digite uma mensagem!');
//interrompe a função
return;
   }

   //const url = 'https:/wa.me/' + numero + msgCodificada;
const url = `https//wa.me/${numero}?${msgCodificada} `;
//Abre a Url do whatsapp com os parâmetros passados
   window.open(url,'_blank');

}


//3-se valor for "none" modifica para "block"
//4-Caso contrario,modifica para "none"