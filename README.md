# **API - Fastify Book Management**

### **Descrição**
Esta API foi desenvolvida utilizando o framework **Fastify** para gerenciar livros. Ela permite realizar operações CRUD (Create, List, Delete) em uma base de dados de livros. 

---

## **Instalação**

### **Pré-requisitos**
- **Node.js** (v14 ou superior)
- **NPM** ou **Yarn**
- Banco de dados configurado (ex: PostgreSQL, MySQL ou outro).
- Docker e Docker Compose


### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/Pedroffda/juridiq-fullstack-challenge-api.git
   cd juridiq-fullstack-challenge-api
   ```

2. Configure o ambiente do banco de dados usando **Docker Compose**:
   - Certifique-se de que o Docker está instalado e em execução.
   - No diretório do projeto, inicie os serviços:
     ```bash
     docker-compose up -d
     ```
   - Isso irá criar e iniciar um contêiner PostgreSQL, disponível na porta `5432`.

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as seguintes variáveis:

     ```
     DATABASE_URL="postgresql://postgres:postgres@localhost:5432/api-juridic?schema=public"
     ```
5. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

7. A API estará disponível em: `http://localhost:8000`.

---

## **Endpoints**

### **1. Listar Livros**
- **Rota**: `GET /books`
- **Descrição**: Retorna a lista de todos os livros cadastrados.
- **Parâmetros Query (opcional)**:
  - `title` (string): Filtra os livros pelo título.

- **Exemplo de Requisição**:
  ```
  GET /books?title=Harry
  ```

- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Harry Potter",
      "author": "J.K. Rowling",
      "publishedYear": "2024"
    },
    {
      "id": 2,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publishedYear": "2024"
    }
  ]
  ```

---

### **2. Cadastrar Novo Livro**
- **Rota**: `POST /books`
- **Descrição**: Adiciona um novo livro ao banco de dados.
- **Body (JSON)**:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "publishedYear": "2024"
  }
  ```

- **Exemplo de Resposta**:
  ```json
  {
    "id": 3,
    "title": "Book Title",
    "author": "Author Name",
    "publishedYear": "2024"
  }
  ```

---

### **4. Deletar Livro**
- **Rota**: `DELETE /books/:id`
- **Descrição**: Remove um livro do banco de dados.
- **Parâmetros**:
  - `id` (path): ID do livro a ser deletado.

- **Exemplo de Resposta**:
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

---

## **Tecnologias Utilizadas**
- **[Fastify](https://www.fastify.io/)**: Framework web rápido e eficiente.
- **[Prisma](https://www.prisma.io/)**: ORM para banco de dados.
- **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript.

