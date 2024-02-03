const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById ('mensagens');


const socket=io();

botaoEnviar.addEventListener('click',() =>{
    if (caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value="";
    }
} )

socket.addEventListener('nova mensagem', (msg)=>{
    const elementoMensagem = document.createElement('li')//li do index
    elementoMensagem.textContent = msg; //<li>Alok bigode</li>
    elementoMensagem.classList.add('mensagem'); // li class = mensagem 
    chat.appendChild(elementoMensagem);//DIV    id = 'mensagens '
    
})

