const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo');
const card_paisagem = document.querySelector(".card_paisagem");
const enviar = document.querySelector(".botao");

corpo.style.backgroundColor = '#ddc68cfe';
//card_paisagem.style.border="4px black solid";
//enviar.textContent ="enviar agora";
//card_paisagem.style.width="100px";
//card_paisagem.style.height="100px";
card_paisagem.style.padding="10px";

enviar.addEventListener('click', () => {
    titulo.textContent = 'Título Criativo'
    card_paisagem.innerHTML = '<img src="https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_1280.jpg"></img>'
    alert('Você clicou no botao')
})
