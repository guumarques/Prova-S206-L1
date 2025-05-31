# 🧪 Testes de API com Newman e HTML Reporter

Este projeto contém **cenários de testes automatizados** para uma API pública, executados com o **Newman**, a ferramenta de linha de comando do Postman. Os relatórios são gerados em **HTML** com um visual intuitivo e detalhado, utilizando o `newman-reporter-htmlextra`.

---

## 📁 Pré-requisitos

Antes de executar os testes, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Newman](https://www.npmjs.com/package/newman)
- Um terminal (como CMD, PowerShell, Bash, etc.)

---

## 📦 Instalação

Para instalar o Newman e o reporter HTML, execute os seguintes comandos no terminal:

```bash
npm install -g newman
npm install -g newman-reporter-htmlextra
```

## ▶️ Como executar os testes

1 - Certifique-se de que a coleção do Postman (arquivo .json) está na raiz do projeto.

2 - Use o comando abaixo para rodar os testes e gerar o relatório em HTML:

```bash
newman run sua-collection.json -r htmlextra --reporter-html-export resultado.html
```

## 📊 Resultado do Relatório

Após a execução do comando acima, será gerado um arquivo chamado resultado.html com um relatório completo dos testes.

    Basta abrir o arquivo resultado.html no navegador para visualizar os resultados de todos os cenários testados.

    O relatório mostra:

        Requisições executadas

        Status HTTP

        Tempo de resposta

        Logs de falhas e erros (caso existam)

A estrutura do projeto deve ser:

📁 meu-projeto/
├── sua-collection.json
├── resultado.html
└── README.md
