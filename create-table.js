import { sql } from "./db.js";

// Function - DELETE TABLE
// sql`DROP TABLE IF EXISTS videos`.then(() => {
//     console.log('Tabela apagada');
// })

// Function - CREATE TABLE
sql`
CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
);
`.then(() => {
    console.log('tabela criada');
})
