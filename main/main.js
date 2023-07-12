const personagens = [
    {
        nome: "ciclope",
        foto: "./src/imagens/card-ciclope.jpg",
        dataName: "Ciclope",
        descricao: "Ele tem o poder de disparar rajadas ópticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los"
    },
    {
        nome: "jean-grey",
        foto: "./src/imagens/card-jean-grey.jpg",
        dataName: "Jean Grey",
        descricao: "A telepatia, telecinese e empatia de Jean são drasticamente aumentadas quando em contato com a Fênix, além de poder viajar no vácuo do espaço que vai além da velocidade da luz."
    },
    {
        nome: "lince-negra",
        foto: "./src/imagens/card-lince-negra.jpg",
        dataName: "Lince Negra",
        descricao: "O seu poder é mais conhecido pelo nome de intangibilidade. Neste estado, também chamado de “entrar em fase“, ela consegue atravessar objetos sólidos. Basicamente, suas partículas atômicas passam pelo espaço entre os átomos dos objetos pelos quais ela está atravessando."
    },
    {
        nome: "tempestade",
        foto: "./src/imagens/card-tempestade.jpg",
        dataName: "Tempestade",
        descricao: "Ela é capaz de manipular o tempo, e alterar o clima, assim tendo influência sobre os elementos da natureza. Pode alterar a pressão atmosférica a Temperatura e Umidade. É capaz de controlar os elementos climáticos, criar chuvas, tempestades, trovões, relâmpagos, raios, tornados, neve, neblina, etc."
    },
    {
        nome: "vampira",
        foto: "./src/imagens/card-vampira.jpg",
        dataName: "Vampira",
        descricao: "seu poder mutante é a habilidade de absorver a vitalidade, memórias, habilidades e poderes de outros seres vivos através do contato com a pele."
    },
    {
        nome: "wolverine",
        foto: "./src/imagens/card-wolverine.jpg",
        dataName: "Wolverine",
        descricao: "Além de suas mortais garras de adamantium, capazes de cortar qualquer coisa, ele tem um poderoso fato de cura; envelhece lentamente – o que o torna praticamente imortal -; e tem diversas características animais, como sentidos muito aguçados."
    },

    {
        nome: "noturno",
        foto: "./src/imagens/card-noturno.jpg",
        dataName: "Noturno",
        descricao: "agilidade sobre-humana, e a capacidade de teletransporte, invisibilidade em sombras profundas, e as mãos e os pés aderirem a parede."
    },
    {
        nome: "magneto",
        foto: "./src/imagens/card-magneto.jpg",
        dataName: "Magneto",
        descricao: "Ele pode controlar e manipular campos magnéticos que vão muito além da habilidade de controlar metal."
    },
];






let personagensHTML = '';

for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i];
    

    personagensHTML += `
    <li class="personagem" id="${personagem.nome}" data-name="${personagem.dataName}" descricao="${personagem.descricao}">
      <img src="${personagem.foto}" alt="Personagem ${personagem.nome}" />
    </li>
  `;


  
}






const listaPersonagens = document.querySelector('#lista-personagens');
listaPersonagens.innerHTML = personagensHTML;

const personagensDaLista = document.querySelectorAll('.personagem');



personagensDaLista.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idPersonagem = personagem.attributes.id.value;
        
        const imagemPersonagem = document.querySelector('.personagem-grande')
        imagemPersonagem.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.querySelector('.nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.querySelector('.descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('descricao');

    })
});
