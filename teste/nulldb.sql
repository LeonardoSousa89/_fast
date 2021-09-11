psql -U admin test

\dt

CREATE DATABASE hardtest ENCODING 'utf8';
\c hardtest admin
DROP DATABASE hardtest;

\c hardtest admin

\dt

CREATE TABLE IF NOT EXISTS items(
    id SERIAL PRIMARY KEY,
    produto VARCHAR(50),
    quantidade INTEGER,
    valor NUMERIC(100,2) 
);

DROP TABLE items;

INSERT INTO items VALUES(1,'açúcar mascavo',10);
INSERT INTO items VALUES(2,'',10,7.65);
INSERT INTO items VALUES(150,6.22);
INSERT INTO items VALUES(4,'leite em pó ninho',23.67);

UPDATE items SET quantidade=20 where id=1;
DELETE FROM items WHERE id=2;

SELECT * FROM items;

SELECT id, produto,  quantidade, valor

\q