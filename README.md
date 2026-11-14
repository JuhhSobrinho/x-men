# x-men

Página web estática que apresenta personagens dos X-Men e seus poderes mutantes. Ao passar o mouse sobre um personagem da lista, a imagem grande, o nome e a descrição do poder são atualizados. Os personagens ficam armazenados em um array de objetos em JavaScript, que funciona como uma base de dados simples do projeto.

## Funcionalidades

- Lista de 8 personagens: Ciclope, Jean Grey, Lince Negra, Tempestade, Vampira, Wolverine, Noturno e Magneto.
- Ao passar o mouse (evento `mouseenter`) sobre um personagem, são atualizados a imagem grande, o nome e a descrição do poder.
- Ciclope é exibido por padrão ao carregar a página.
- Efeito de destaque com sombra roxa ao passar o mouse sobre as miniaturas.
- Layout com ajustes para telas menores (media query para largura de até 799px).

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura

```
x-men/
├── index.html            # Página principal
├── main/
│   ├── main.js           # Array de personagens e lógica de exibição
│   └── model.js          # Cópia do array de personagens (não carregada pelo index.html)
└── src/
    ├── css/
    │   └── style.css     # Estilos da página
    └── imagens/          # Logo, fundo e imagens dos personagens (.jpg e .png)
```

## Como executar

Abra o arquivo `index.html` em um navegador. Não é necessário instalar dependências nem servidor.

## Observações

- O arquivo `main/model.js` contém o mesmo array de personagens de `main/main.js`, mas o `index.html` carrega apenas `main/main.js`. Por isso, `model.js` não é usado pela página.
- A interação ocorre apenas com `mouseenter` (passar o mouse). Não há clique nem navegação. Em dispositivos sem mouse, o comportamento não foi testado.
- O `index.html` carrega a fonte Oxanium do Google Fonts, mas o `style.css` aplica `Courier New` aos textos. Não está claro qual fonte é a pretendida.
- O título da página no `index.html` é "Projeto X-Men - Semana do Zero Ao Programador Contratado".

## Autor

Desenvolvido por [Juliano Sobrinho](https://github.com/JuhhSobrinho).
