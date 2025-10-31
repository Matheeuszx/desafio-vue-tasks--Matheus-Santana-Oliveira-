
# 📝 Gerenciador de Tarefas com Vue.js

Uma aplicação moderna e responsiva para **gerenciamento de tarefas (To-Do List)** desenvolvida com **Vue.js 3**. Oferece uma experiência completa de **CRUD** (Criar, Ler, Atualizar, Excluir) com persistência de dados utilizando o `localStorage`.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando um *stack* moderno:

* **Vue 3 (Composition API):** Framework principal para construção da interface.
* **Vite:** Ferramenta de *build* ultrarrápida e servidor de desenvolvimento.
* **Pinia:** Gerenciamento de estado centralizado, simples e reativo.
* **Tailwind CSS:** Framework utilitário para estilização rápida e responsiva.
* **Bootstrap:** Utilizado para componentes UI específicos.
* **`localStorage`:** Persistência de dados local do navegador.

---

## 📋 Funcionalidades Principais

### ✅ Operações CRUD & Gestão

* **Criar** novas tarefas (com validação e notificação).
* **Visualizar** a lista completa de tarefas.
* **Editar** o conteúdo de tarefas existentes.
* **Excluir** tarefas permanentemente.
* **Marcar como concluídas** (alternância de status).

### 🎛 Filtros e Organização

* **Filtragem** inteligente por status: **Todas**, **Ativas**, e **Concluídas**.
* **Persistência Automática:** Todos os dados são salvos no `localStorage`.
* **Interface Responsiva:** Adaptação total a diferentes tamanhos de tela.

### 🎨 Interface

* Design moderno e limpo, utilizando **Tailwind CSS**.
* Notificações **Toast** para *feedback* do usuário (sucesso/erro/informação).
* Componentes UI do **Bootstrap** para elementos comuns.

---

## 🏗 Estrutura do Projeto

A estrutura de diretórios do projeto segue as convenções do Vue/Vite:

```text
desafio-vue-tasks-Matheus/
├── public/ # Arquivos estáticos
├── src/
│ ├── assets/ # Recursos (imagens, ícones)
│ ├── components/ # Componentes Vue
│ │ ├── Filters.vue # Componente de filtros
│ │ ├── HelloWorld.vue # Componente principal
│ │ ├── TaskFilter.vue # Filtro de tarefas
│ │ ├── TaskForm.vue # Formulário de tarefas
│ │ ├── TaskList.vue # Lista de tarefas
│ │ └── Toast.vue # Notificações
│ ├── stores/ # Gerenciamento de estado
│ │ └── tasks.js # Store Pinia para tarefas
│ ├── App.vue # Componente raiz
│ ├── main.js # Entrada da aplicação
│ ├── index.css # Estilos globais
│ └── style.css # Estilos adicionais
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js # Configuração Tailwind
├── vite.config.js # Configuração Vite
```

## 💻 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js (versão 16+ é recomendada)** e um gerenciador de pacotes (npm ou yarn) instalados.

### Instalação e Execução

Siga os passos abaixo no seu terminal:

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/Matheeuszx/desafio-vue-tasks--Matheus-Santana-Oliveira-.git](https://github.com/Matheeuszx/desafio-vue-tasks--Matheus-Santana-Oliveira-.git)
    cd desafio-vue-tasks-Matheus
    ```

2.  **Instalar dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Executar em Modo Desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```
    A aplicação estará disponível em: **`http://localhost:5173`**

### 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com *Hot Reloading*. |
| `npm run build` | Compila o projeto para produção na pasta `dist/`. |
| `npm run preview` | Serve o *build* de produção localmente para teste. |

---

## 👨‍💻 Autor

**Matheus Santana Oliveira**
