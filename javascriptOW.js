let i = 0;

let videocomand = document.getElementsByClassName("videoscar")[i];

let form = document.querySelector("form");
let resp = document.querySelector("p");


function before() {
    i = i - 1;
    if (i < 0) {
        i = 4;
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
    var audio = new Audio("medias/Cheerslove.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Tracer foi um dos primeiros personagens de Overwatch introduzidos em 2014. Lena Oxton (codinome: "Tracer") foi a pessoa mais jovem a entrar no programa de voo experimental da Overwatch. Conhecida por suas habilidades de voo destemidas, a jovem garota foi cuidadosamente escolhida para testar o protótipo de um caça teleportador, chamado Slipstream. Porém, o caça teve um mau funcionamento na matriz de teleporte, o que fez com que Lena desaparecesse e fosse dada como morta. A piloto reapareceu meses depois, mas seu acidente fez com que suas moléculas se desintegrassem do fluxo do tempo. Os efeitos do acidente faziam Tracer desaparecer por horas e até dias sem manter sua forma física, como um fantasma, por isso ela passou a ser conhecida como a primeira “desassociação crônica”.`;
    
}

function playSound2() {
    var audio = new Audio("medias/SaveTube.io - Overwatch   ¡Apagando las luces!   Sombra (128 kbps).mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Muito antes de assumir o nome de “Sombra”, Olivia Colomar era uma das milhões de crianças que ficaram órfãs após a Crise Ômnica. Com muita da infraestrutura de seu país destruída, ela sobreviveu utilizando seus dons naturais de computação como hacker. Depois disso, Olivia foi acolhida pela gangue mexicana Los Muertos, os ajudando em sua revolução pessoal contra o governo. Los Muertos acreditavam que a reconstrução do México havia favorecido os ricos e mais influentes, deixando para trás os mais necessitados. Após tantas conquistas, Olivia estava plenamente confiante de suas habilidades, mas foi pega desprevenida quando caiu nas teias de uma conspiração global. Além disso, ela não passou despercebida. Com sua segurança comprometida, Olivia foi forçada a excluir todos os rastros de sua existência e se escondeu.`;

}

function playSound3() {
    var audio = new Audio("medias/Aurora.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Desde criança, Illari Quispe Ruiz treinava diariamente para se tornar parte dos Guerreiros Inti, um grupo aprimorado de nobres protetores e mestres no controle da energia solar. Após um acidente horrível que tirou a vida de todos os outros Guerreiros, Illari, tomada pela culpa, jura se redimir por sua parte na tragédia. Illari começou o rigoroso treinamento dos Guerreiros Inti desde cedo. Mesmo naquela época, seu potencial era enorme; seus treinadores acreditavam que ela se tornaria a Guerreira mais forte de sua geração. Ela cedeu aos desejos de sua comunidade, dedicando seu tempo livre ao treinamento para que, um dia, pudesse estar à altura da lenda que já crescia ao seu redor. Finalmente, seu trabalho árduo e sacrifícios valeram a pena. Ela se tornou a pessoa mais jovem a se juntar aos Guerreiros Inti.`;
    
}

function playSound4() {
    var audio = new Audio("medias/Hanzo.mp3");
    audio.play();
    if (resp.innerText != null) {
        respinnerText = ``;
    }
    resp.innerText = `Quando seu pai faleceu, coube a Hanzo liderar o clã de ninjas Shimada. Os mais velhos o forçaram a fazer Genji, seu irmão despreocupado, andar na linha, o que levou a um confronto em que Hanzo atacou Genji. Horrorizado, Hanzo abandonou o clã, vagando pelo mundo sozinho como punição. Mas agora, depois de descobrir que o caçula ainda está vivo, Hanzo precisa decidir aonde seu caminho o levará.`;
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