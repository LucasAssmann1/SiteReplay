let i = 0;

let videocomand = document.getElementsByClassName("videoscar")[i];

let form = document.querySelector("form");
let resp = document.querySelector("p");


function before() {
    i = i - 1;
    if (i < 0) {
        i = 3;
    }
    console.log(i);
    videocomand = document.getElementsByClassName("videoscar")[i];
}

function next() {
    i = i + 1;
    if (i > 3) {
        i = 0;
    }
    console.log(i);
    videocomand = document.getElementsByClassName("videoscar")[i];
}
function displayImage(src, width, height) {
    let img = document.getElementById("img-teste");
    if (img == null) {
        img = document.createElement("img");
        img.setAttribute("class", "champions");
        img.id = "img-teste"
    }
    
    
    img.src = src;
    img.width = width;
    img.height = height;
    document.getElementById("ctn_img").appendChild(img);
}

function playSound1() {
    var audio = new Audio("medias/audio-editor-output.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `A incontrolável sede de sangue de Briar, um experimento fracassado da Rosa Negra, exigia uma estrutura especial para controlar sua mente frenética. Após anos de confinamento, essa arma viva se libertou de todas as restrições e ficou livre no mundo. Agora ela não é controlada por ninguém, seguindo apenas sua própria fome de conhecimento e sangue... e aproveitando as oportunidades para se soltar, mesmo que controlar o frenesi não seja fácil.`;
    
}

function playSound2() {
    var audio = new Audio("medias/audio-editor-output23.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Uma jovem obstinada e vivaz da classe operária de Zaun, Zeri canaliza magia elétrica para carregar a si mesma e a uma arma personalizada. O poder volátil espelha o que ela sente, as centelhas refletindo o estilo de vida ultrarrápido dela. Profundamente compassiva para com os outros, Zeri leva o amor da família e do lar dela consigo a todas as lutas. Embora as tentativas de ajudar saiam pela culatra às vezes, Zeri acredita piamente em uma verdade: lute pela sua comunidade, e ela lutará com você.`;

}

function playSound3() {
    var audio = new Audio("medias/audio-editor-output3.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Nilah, uma guerreira asceta de uma terra distante, busca os oponentes mais gigantescos e mortais do mundo para poder desafiá-los e destruí-los. Tendo conquistado seu poder após enfrentar o demônio da alegria, que estava aprisionado há muito tempo, ela não sente outra emoção senão um júbilo incessante — um preço pequeno a ser pago pela força vasta que possui agora. Canalizando a forma líquida do demônio numa lâmina de poder inigualável, a combatente desafia antigas ameaças esquecidas no tempo.`;
    
}

function playSound4() {
    var audio = new Audio("medias/audio-editor-output4.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Como a personificação da travessura, imaginação e mudança, Zoe atua como a mensageira cósmica de Targon, anunciando a chegada de grandes eventos que redefinem mundos. Sua mera presença altera a matemática arcana que governa as realidades, às vezes causando cataclismas não intencionais. Talvez isso explique a forma despretensiosa e jovial com a qual Zoe encara seu dever e que permite que ela tenha tempo de sobra para pregar peças nos mortais, fazer brincadeirinhas ou dar um jeitinho de se divertir de alguma forma. Um encontro com Zoe pode ser agradável e revigorante, mas é sempre mais do que parece e geralmente extremamente perigoso.`;
}




function play() {
    videocomand.play();
}

function pause() {
    videocomand.pause();
}

function stop() {
    videocomand.pause();
    videocomand.currentTime = 0;
    videocomand.playbackRate = 1.0;   
}

function slow() {
    videocomand.playbackRate -= 0.10;
}

function fast() {
    videocomand.playbackRate += 0.10;
}

function skipten() {
    videocomand.currentTime -= 10;
}

function rewindten() {
    videocomand.currentTime += 10;
}

function fullscreen() {
    videocomand.requestFullscreen();
}