# OpenAI Assistants API Basic Chat

This project is a minimal example using the OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs).
It implements a simple chat interface that streams responses from a single assistant.

## Quickstart

1. Clone the repo

```shell
git clone https://github.com/openai/openai-assistants-quickstart.git
cd openai-assistants-quickstart
```

2. Set your [OpenAI API key](https://platform.openai.com/api-keys)

```shell
export OPENAI_API_KEY="sk..."
```

3. Install dependencies

```shell
npm install
```

4. Run the development server

```shell
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start chatting.

## Overview

The main chat logic lives in `app/components/chat.tsx`. API routes under `app/api/assistants` create threads,
post messages and stream back assistant responses.

## Endpoints

- `api/assistants` – `POST` create the assistant (used at startup)
- `api/assistants/threads` – `POST` create a new thread
- `api/assistants/threads/[threadId]/messages` – `POST` send a message and stream the reply


## Desktop build with Electron

To preview the application in a desktop window during development run:

```bash
npm run electron-dev
```

After building the Next.js application you can package it as a native executable with:

```bash
npm run electron-pack
```
"# inicio-rapido-codex-empacotar-aplicativo-com-electron" 
"# inicio" 
