# Cadastro de Clientes

Este é um formulário de cadastro de clientes desenvolvido em React utilizando a biblioteca `react-hook-form` e estilizado com `react-bootstrap`. O formulário permite o cadastro de informações básicas do cliente, como nome, CPF, endereço, data de nascimento, email, telefone, data de entrada na plataforma, situação do cliente e informações adicionais opcionais como veículo, CNPJ, razão social e nome fantasia.

## Como usar

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Navegue até o diretório do projeto:

```bash
cd nome-do-diretorio
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm start
```

5. Acesse o formulário de cadastro de clientes no seu navegador:

```
http://localhost:3000/clientes
```

## Funcionalidades

- Validação de entrada: o formulário valida automaticamente os campos obrigatórios, exibindo mensagens de erro caso algum campo não seja preenchido corretamente.
- Submissão de dados: ao preencher todos os campos e clicar no botão "Cadastrar", os dados do cliente são submetidos para uma função de tratamento que os imprime no console.

## Bibliotecas utilizadas

- `react-hook-form`: Utilizada para simplificar a validação e gerenciamento de formulários em React.
- `react-bootstrap`: Utilizada para estilizar os componentes do formulário com facilidade.

## Estrutura do Projeto

- `app/globals.css`: Arquivo CSS contendo estilos globais para o projeto.
- `app/page.tsx`: Arquivo contendo o componente `Clientes`, responsável por renderizar o formulário de cadastro de clientes.
- `package.json` e `package-lock.json`: Arquivos de configuração e dependências do projeto.

## Autor

João Batista R. Ribeiro.

Se você tiver alguma dúvida ou sugestão de melhoria, sinta-se à vontade para entrar em contato ou abrir uma issue no repositório.
