# Gerenciamento de Chamados
Essa é uma aplicação para gerenciamento de chamados empresariais que é possível adicionar, editar, excluir e organizar os chamados entre NÃO ATENDIDOS, EM ANDAMENTO ou FINALIZADOS. Também é possível pesquisar os chamados por título, descrição ou categoria ou filtrar os chamados por categoria.

## 1. Funcionalidade
- Adicionar chamados: Crie novos chamados - eles serão adicionados na coluna de NÃO ATENDIDOS.
- Editar chamados: Modifique o título, descrição ou categoria dos chamados existentes.
- Excluir chamados: Remova chamados da aplicação.
- Organizar chamados: Mova os chamados pelas colunas de acordo com o status do chamado - eles podem ser movidos pelo botão no card ou arrastando o card para outra coluna.
- Pesquisar chamados: Pesquise os chamados por título, descrição ou categoria.
- Filtrar chamados: Filtre chamados de acordo com a categoria selecionada.

## 2. Tecnologias Utilizadas
### 1. Angular 21

Base do frontend com componentes, roteamento, formulários e reatividade responsividade.

### 2. PrimeNG + PrimeIcons + PrimeUIX Themes (Aura)
Biblioteca de UI usada para componentes como: 
  - Card
  - Accordion
  - Select
  - Menu
  - Toast
  - ConfirmDialog
  - Button
  - e outro.

### 3. Tailwind CSS
Utilizado para layout, responsividade e customizações.

## 3. Requisitos
- Node.js (recomendado versão 22+)
- npm (recomendado versão 10.9.4)

Para verificar as versões:

```
node -v
npm -v
```

## 4. Instalação
O sistema pode ser acessado pelo link: [https://gerenciamentochamados.netlify.app/chamados](https://gerenciamentochamados.netlify.app/chamados)

### Acesso localmente:
1. Clone o repositório.
```
https://github.com/julianavalle/gerenciamento-chamados/
```

2. Acessa a pasta gerenciamento-chamados
```
cd gerenciamento-chamados
```
3. Na pasta gerenciamento-chamados, rode o comando:
 ```
npm install
 ```

4. Após baixar as dependência, rode o comando:
```
npm start
```
5. Acesse a aplicação no link: [http://localhost:4200/chamados](http://localhost:4200/chamados)

<img width="1900" height="879" alt="image" src="https://github.com/user-attachments/assets/b3858fa7-c6f4-4946-ab7e-ec1cc6efe35b" />


## 5. Ferramentas de apoio:
- ChatGPT: usado para tirar dúvidas, auxiliar na abstração do código e correções de pontuais erros/bugs. Todos os trechos que foram utilizados o ChatGPT (IA) estão comentados dentro do código.
- Documentação do PrimeNG [https://primeng.org/](https://primeng.org/): Exemplificações da utilização dos componentes da biblioteca PrimeNG e como fazer suas importações.
- Documentação do Tailwind [https://v3.tailwindcss.com/docs/installation](https://v3.tailwindcss.com/docs/installation):

## 6. Percentual estimado de código gerado por IA e pelo desenvolvedor:
Cerca de 80% do código foi gerado pelo desenvolvedor e todos os trechos de código que foram gerados por IA foram revisados e adaptados.
Os trechos que foram utilizados IA foram:
- Como passar por input o "severity" do componente button da biblioteca PrimeNG. (gerenciamento-chamados/gerenciamento-chamados/src/app/shared/components/button/button.component.ts)
- Criação das funções de create, update e remove do serviço de Mock. (gerenciamento-chamados/gerenciamento-chamados/src/app/services/chamados-mock.service.ts)
- O menu dropdown do card, com as ações de mover para os outros status, poder abrir para a esquerda e o fechamento dele após clicar em algum botão de opção. (/gerenciamento-chamados/gerenciamento-chamados/src/app/chamados/components/card-chamados/card-chamados.component.ts e /gerenciamento-chamados/gerenciamento-chamados/src/app/chamados/components/card-chamados/card-chamados.component.scss)
- Tornar o componente Accordion do PrimeNG um componente genérico e correção do erro de não carregar os conteúdos dentro dele (gerenciamento-chamados/gerenciamento-chamados/src/app/chamados/components/blocos-chamados/blocos-chamados.component.ts)
- Desligar o tema dark, dark mode do tema Aura do PrimeNG, caso o tema do computador esteja utilizando o tema dark. (gerenciamento-chamados/gerenciamento-chamados/src/app/app.config.ts)
- Adaptar o drag e drop para as versões mobile/touch. (gerenciamento-chamados/gerenciamento-chamados/src/index.html)

## 7. Protótipo
O protótipo foi desenvolvido com o objetivo de esboçar a estrutura do sistema e orientar a disposição das funcionalidades na interface. Ele não foi pensado especificamente para os componentes do PrimeNG, o que explica as diferenças visuais entre o protótipo e a versão final. Ainda assim, o protótipo serviu como base para definir o fluxo, as funcionalidades e a organização dos elementos na tela. Já na implementação, o sistema final passou a seguir a customização e o padrão visual dos componentes da biblioteca PrimeNG.
O protótipo pode ser acessado no link [https://www.figma.com/design/m5x4srLj3KAeq1UJ9os8vd/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=DmK01LDG9IUA2dlE-0](https://www.figma.com/design/m5x4srLj3KAeq1UJ9os8vd/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=DmK01LDG9IUA2dlE-0).





