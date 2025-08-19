-- Cria tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cria tabela de posts (relacionada a usuários)
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere alguns usuários de exemplo
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Carol', 'carol@example.com');

-- Insere alguns posts de exemplo
INSERT INTO posts (user_id, title, content) VALUES
(1, 'Meu primeiro post', 'Este é o conteúdo do post da Alice.'),
(2, 'Post do Bob', 'Conteúdo do Bob aqui.'),
(3, 'Post da Carol', 'Conteúdo inicial da Carol.');
