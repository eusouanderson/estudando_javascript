import { pool, getClient, getUsers } from "./database/db.js";

async function testConnection() {
  try {
    const client = await getClient();
    console.log("Conexão com o banco estabelecida com sucesso!");
    client.release();
  } catch (err) {
    console.error("Erro ao conectar no banco:", err);
  }
}

async function testQuery() {
  try {
    const users = await getUsers();
    console.log("Usuários retornados do banco:", users);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
  }
}

await testConnection();
await testQuery();
