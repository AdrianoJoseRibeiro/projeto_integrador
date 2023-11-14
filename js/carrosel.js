//https://www.youtube.com/watch?v=6QE8dXq9SOE
// PAREI 23MIN

const circle = document.querySelector('.circle');
const wrapper = document.querySelector(".wrapper");//Recebe tudo, praticamente o body
const carousel = document.querySelector(".carousel"); //Recebe a ul com todas as li's img
const firstCardWidth = carousel.querySelector(".card").offsetWidth; //Recebe o tamanho do primeiro cartão (img + h2 + span) = 355px
const arrowBtns = document.querySelectorAll(".wrapper i"); //Recebe os botões esquerda e direita
const carouselChildrens = [...carousel.children];//Recebe todos os cartões "li" (img + h2 + span)

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

//Recebe o número de imagens que cabem no carrossel
//divide o tamanho total do carrosel (1100), pelo tamnho do primeiro cartão (355px)
//o tamanho total do carrosel muda de acordo com a dimensão da tela
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
//insere copias de acordo com o valor de cardPerView, dos ultimos cartões(img) no começo do carrossel, 
//para o efeito do infinito.
//O negativo no slice, pega a qtd informada a partir do ultimo elemento do array
//e cria uma cópia do array, só com esse novo quantitativo
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    //O insertAdjacentHTML insere um texto como HTML em uma posição especifica 
    //A posição "afterbegin", insere dentro do elemento, antes de seu primeiro filho (childNode)
    //O outerHTML retorna o html completo do elemento selecionado
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});


//insere copias de acordo com o valor de cardPerView, dos primeiros cartões(img) no fim do carrossel, 
//para o efeito do infinito
//O start 0 no slice,
carouselChildrens.slice(0, cardPerView).forEach(card => {
    //A posição "beforeend", insere dentro do elemento, após seu último filho (childNode) .
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");

// A propriedade "scrollLeft" recebe ou atribui um valor em pixel, que faz deslizar a tela, se positivo desliza para direita, se negativo desliza para esquerda.
//A propriedade ""offsetwidth" retorna um inteiro com o valor em pixels da largura do elemento incluindo borda e padding do que está sendo visto na tela, não inclui o overflow
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");


//Evento criado para receber os cliques nas setas direita e esquerda
//se clicar na esquerda, subtrai do scrollleft a largura do primeiro cartão(imagem)
//se clicar na direita, soma ao scrollleft a largura do primeiro cartão(imagem)
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        console.log(carousel.scrollLeft);
    });
});

//Caso tenha um clique do mouse dentro do carrosel
const dragStart = (e) => {
    isDragging = true; //isDragging fica verdadeiro
    carousel.classList.add("dragging"); //classe adicionada, para desabilitar a seleção do texto

    //startX e startScrollLeft, foram criadas para justar melhor o movimento das imagens de acordo com o clique do mouse
    //Recebe a posição inical do ponteiro do mouse
    startX = e.pageX; //e.pageX retorna a cordenada horizontal do ponteiro do mouse em pixel

    //Recebe a posição inical da rolagem; Valor vai mudar sempre que as imagens andem para o lado, 
    //se retornar para primeira imagem, valor da rolagem volta ao valor inicial.
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here Se a var isDragging for falsa, retorna daqui

    //Atualiza a posição da rolagem do carrossel, baseado no movimento do cursor do mouse
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

//Quando para de clicar com o mouse, para de deslizar as imagens
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

//criado para deslizar o carrossel para posição correta, caso chegue nas pontas esquesrda e direita
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    //scrollWidth retorna a largura do conteudo de um elemento incluindo a parte que estiver oculta em pixel ex:4432
    //carousel.offsetWidth retorna a largura visível do carrosel na tela
    //carousel.scrollWidth - carousel.offsetWidth da igual ao valor quando você chega ao último elemento do carrossel
    //Basicamente se chegar na primeira foto do inicio, ele joga o scroll para mesma foto só que na posição original dela que é perto do fim.
    //já que as 3 primeiras fotos do início foram as 3 ultima que foram copiadas para o início
    if (carousel.scrollLeft === 0) {
        console.log("início");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    //Basicamente se chegar na últikma foto, ele joga o scroll para mesma foto só que na posição original dela que é no inicio.
    //já que as 3 últimas fotos, foram as 3 primeiras que foram copiadas para o final
    //O math ceil foi utilizado para arredondar o float para o inteiro
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        console.log("fim");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if (!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart); //Evento criado para detectar um clique do mouse dentro do carossel, chama a função dragStart
carousel.addEventListener("mousemove", dragging); //Evento criado para detectar movimentos no mouse dentro do carrossel, chama a função dragging
document.addEventListener("mouseup", dragStop); //Evento criado para parar de deslizar as imagens quando parar de clicar no mouse
carousel.addEventListener("scroll", infiniteScroll); //Evento criado para deslizar o carrossel para posição correta, caso chegue nas pontas esquesrda e direita
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


// Set Text on a Circle
let textCircle = circle.innerText.split('');
circle.innerText = '';
textCircle.forEach((value, key) => {
    let newSpan = document.createElement("span");
    newSpan.innerText = value;
    let rotateThisSpan = (360 / textCircle.length) * (key + 1);
    newSpan.style.setProperty('--rotate', rotateThisSpan + 'deg');
    circle.appendChild(newSpan);
});