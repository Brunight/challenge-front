<p align="center">
	<img alt="Logo" src="https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png" />
</p>

# E-Plus Frontend Challenge

Seja bem-vindo ao E-Plus Front-end Challenge, considere este o primeiro passo para fazer parte de uma das melhores equipes de ecommerce e marketing digital do Brasil!

Para completar o desafio com sucesso você precisará codificar o layout que segue no projeto, para isso será necessário consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

Então mãos a obra e bom challenge ;)

## Design

- O topo apresentado deve seguir o [seguinte design](https://projects.invisionapp.com/share/NARHXUS6HCF#/357617423_Eplus)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, nos conte tudo que fez! Se fez o desafio utilizando pré-processadores, por exemplo, pois usaremos estas informações para avaliá-lo. 
- O ideal é que este challenge leve até 8h.
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com nadia@agenciaeplus.com.br

## Dicas

- Os ícones usados, são todos do Material Design. https://material.io/icons/
- A fonte utilizada é Montserrat (Está fonte se encontra no google fonts). 
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte. 

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Fidelidade ao design proposto
- Adaptação mobile

---

## 💻 Desenvolvimento

Como qualquer aplicação React, foi necessário criar o projeto através da CLI create-react-app, para então migrar o projeto criado para este repositório. Depois, refatorei os arquivos, removendo alguns desnecessários criados pela CLI. Importei a fonte, criei um estilo global do Styled Components, e iniciei a construção do Header.

Usei a biblioteca React Icons que tem suporte ao Material Design, facilitando muito o desenvolvimento. Quanto à responsividade, escolhi criar um botão para expandir o Header verticalmente e mostrar os menus, se a tela do usuário for um celular, e mantendo a logo e os ícones na mesma linha.

Para o carrinho, busquei a alternativa mais adequada para usar na Scrollbar, a react-custom-scrollbar. Como a chamada da requisição aos itens do carrinho era simples, usei a API **fetch** do próprio Node, pois não achei necessário o uso do Axios. Também usei uma função Javascript para limitar o nome dos itens.

Por fim, usei o método **reduce** para calcular o valor total dos itens no carrinho, mostrado no rodapé do mesmo, como no design proposto. Preparei também os métodos **onClick** de todos os botões e ícones restantes.

## 👨‍💻 Tecnologias

- React
- Typescript
- Styled Components
- React Custom Scrollbars
- React Icons
- React Hooks
- Create React App
- Github Pages

## 🛠 Instalação

### Requerimentos

- Node.JS
- Npm ou Yarn

```bash
    # Clonar o repositório
    $ git clone https://github.com/Brunight/challenge-front

    # Entrar no diretório criado
    $ cd challenge-front

    # Instalar dependências com o Yarn
    $ yarn install
    # Ou com o NPM
    $ npm install

    # Iniciar projeto - estará disponível em http://localhost:3000
    $ yarn start
    # Ou
    $ npm run start

    # Para executar build de produção, basta:
    $ yarn build
    # Ou
    $ npm run build
    # O bundle será criado na pasta build
```

Ou acesse a demo hospedada no Github Pages:
https://brunight.github.io/challenge-front/

---
<p align="center">
  Feito com 💜 por <a href="https://www.linkedin.com/in/brunight/">Bruno Rodrigues</a>!
</p>
