# Chat FURIA CS\:GO - Chatbot para Fãs

Este projeto é um **chatbot conversacional desenvolvido em React** que simula uma conversa com um bot especializado no time de CS\:GO da FURIA Esports. Ele responde a perguntas com informações divertidas e relevantes sobre o time, com foco na experiência de fãs que querem saber mais sobre jogadores, partidas, e a história da organização.

## 🌟 Objetivo

Criar uma experiência interativa e imersiva para fãs da FURIA, oferecendo respostas emocionadas, curtas e com gírias do universo CS, usando uma interface web amigável.

## 🌐 Tecnologias Utilizadas

* **React** (frontend)
* **OpenAI GPT-4o** (completions para respostas dinâmicas)
* **Fuse.js** (para busca aproximada de perguntas pré-definidas)
* **Axios** (requisições à API da OpenAI)

## ⚖️ Lógica do Funcionamento

### 1. Interface do Chat

* O chat é exibido com uma lista de mensagens (usuário e bot).
* O usuário digita a pergunta na entrada de texto e envia.

### 2. Busca por Mensagens Prontas

* O texto digitado é comparado com uma lista de perguntas pré-definidas usando **Fuse.js**.
* Se encontrar correspondência com alta similaridade (threshold ajustável), retorna a resposta pronta.

### 3. Requisição à API da OpenAI

* Se não houver resposta pronta, o texto é enviado para a API da OpenAI junto com o histórico de conversa.
* A IA responde com base no **contexto anterior** e uma **instrução de sistema** que limita as respostas à FURIA e ao CS\:GO.

### 4. Instrução de Sistema (Prompt Base)

* O bot é instruído a:

  * Ser curto, divertido e cheio de emojis ✨
  * Falar apenas sobre CS\:GO e a FURIA
  * Ignorar perguntas sobre outros times ou temas
  * Redirecionar para HLTV.org caso a pergunta envolva dados que podem mudar (placares, lineup, próximos jogos)

## 📚 Exemplo de Uso

Usuário: *"Qual foi o último jogo da FURIA?"*
Bot: *"Você pode conferir isso aqui: [https://www.hltv.org/team/8297/furia](https://www.hltv.org/team/8297/furia) ou verificar se existe uma mensagem pronta no canto superior esquerdo da tela!"*

## 📝 Como Rodar o Projeto

1. Clone o repositório
2. Instale dependências: `npm install`
3. Preencha a API Key do OpenAI
4. Rode: `npm start` ou `npm run dev`

## 🔹 O que o bot consegue responder

* Quem são os jogadores da FURIA (ex: *"Quem é o FalleN?"*)
* Perguntas sobre histórico, jogadores, e curiosidades
* Informar links oficiais para placares, lineup e jogos

## 🔒 Limitações

* O bot **não sabe dados em tempo real**, ele redireciona para o HLTV para isso.
* Apenas conversa sobre **CS\:GO e FURIA**, ignorando outros temas.


## 📁 Estrutura do Repositório

```
/src
  /Pages
    ChatBotCard      # Pasta com os arquivos sobre o funcionanmento do chat e o card em si.
    ChatLegendaCard  # Pasta com os aruivos paar criar a legendade mensagens prontas para usuários 
    openaiService.js # Integração com API da OpenAI
    ChatPage         # Pasta com arquivos sobre a pagina que fica o chat, sem contar o chat em si, e o card.
    Home             # Pasta com arquivos sobre a pagina inicial
```

---

Feito com ❤️ por um torcedor da FURIA, para outros torcedores da FURIA! 🚀
