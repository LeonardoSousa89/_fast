psql -U admin test

\dt

CREATE DATABASE prod ENCODING 'utf8';
\c prod admin
DROP DATABASE prod;

\c prod admin

\dt

CREATE TABLE IF NOT EXISTS items(
    id SERIAL PRIMARY KEY NOT NULL,
    produto VARCHAR(50) NOT NULL,
    quantidade INTEGER NOT NULL,
    valor NUMERIC(100,2) NOT NULL
);

DROP TABLE items;

INSERT INTO items VALUES(1,'açúcar mascavo',10,7.65);
INSERT INTO items VALUES(2,'açúcar mascavo',10,7.65);
INSERT INTO items VALUES(3,'arroz bianco',150,6.22);
INSERT INTO items VALUES(4,'leite em pó ninho',90,23.67);

UPDATE items SET quantidade=20 where id=1;
DELETE FROM items WHERE id=2;

SELECT * FROM items;

\q