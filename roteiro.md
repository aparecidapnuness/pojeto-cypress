Funcionalidade: Cadastro no site Adopet

Cenário: Realizar um cadastro no site com sucesso

Passos:

O usuário acessa a página de cadastro.
O usuário preenche o campo "Nome".
O usuário preenche o campo "E-mail" com um endereço de e-mail válido.
O usuário preenche o campo "Senha" com uma senha válida.
O usuário preenche o campo "Confirmação de Senha" com a mesma senha inserida no passo anterior.
O usuário clica no botão "Cadastrar".

Resultados Esperados:
O sistema processa as informações fornecidas.

Regra de Negócio:
E-mail e senha são campos obrigatórios para o cadastro.

Nós já conseguimos criar e organizar um teste de caminho feliz, que é o caminho correto de cadastro de uma pessoa usuária na plataforma da Adopet.

Passo 2
 falha na tentativa do cadastro


usuario acessar a página de cadastro;
deixar algum dos campos obrigatórios (como o nome, e-mail ou a confirmação da senha) em branco;
clicar no botão de "Cadastrar".

resultado esperado
o sistema valida os campos obrigatórios em branco
o sistema exibe uma mensagem de erro indicando que os campos obrigátorios
devem ser preenchidos

Testes em modo Headless
 Uma possibilidade que facilita a execução desses testes são os testes em modo headless (sem cabeça). São os testes que executamos diretamente no terminal OS TESTES são rodados em background .
 para rodar um unico arquivo
 npx cypress run --spec .\cypress\e2e\login-correto.cy.js

  interessante  é termos um acesso àquelas informações e ter o vídeo como suporte, pois o Cypress consegue gerar automaticamente relatórios e trazer essas informações de maneira organizada.

 npm install --save-dev mochawesome.
 Salvar o nosso arquivo e, agora, voltar para o terminal. No terminal, vamos rodar o npx cypress run --reporter mochawesome, que é onde vamos chamar o Mochawesome para trabalhar para nós.
 Mas toda a equipe precisa ter acesso a essa documentação para fazer a análise dos dados. O Cypress também dispõe de um recurso muito interessante, que é o Cypress Cloud, que é o que vamos utilizar agora.
 npx cypress run intalar cypress
 npx cypress opem para abrir o cypress
 