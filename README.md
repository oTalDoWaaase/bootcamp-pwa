🚀 Bootcamp II – PWA + API

Aplicação PWA integrada com uma API Node/Express, desenvolvida para a entrega final do Bootcamp II.

Este projeto contém:

✔️ PWA com manifest e service worker

✔️ API própria com rota /api/hello

✔️ Frontend em Vite + React consumindo a API

✔️ Execução local usando dois terminais

✔️ Arquitetura simples, organizada e fácil de rodar

📁 Estrutura do Projeto
bootcamp-pwa/
 ├── apps/
 │    ├── api/       → Node + Express (porta 3000)
 │    └── web/       → Vite + React (porta 5173)
 ├── README.md
 └── como rodar.txt

🧪 Pré-requisitos

Node.js instalado

NPM ou Yarn

Navegador moderno (Chrome/Edge)

🛠️ Como Rodar o Projeto
1️⃣ Rodar a API (porta 3000)

Abra um terminal e execute:

cd apps/api
npm install
node index.js


A API ficará disponível em:
👉 http://localhost:3000/api/hello

2️⃣ Rodar o Frontend (porta 5173)

Abra outro terminal:

cd apps/web
npm install
npm run dev


O frontend ficará acessível em:
👉 http://localhost:5173

🔗 Funcionamento

O React faz uma requisição para:

http://localhost:3000/api/hello


A API responde com um JSON, que é exibido na tela.

📱 Recursos do PWA

Instalação como app

Ícone próprio

manifest.json

service worker básico

Suporte a modo offline (cache inicial do Vite)


👨‍💻 Autor

Feito por Luís Eduardo Menezes
Entrega final do Bootcamp II
