DROP SCHEMA IF EXISTS brasil;
CREATE SCHEMA brasil;
USE brasil;

CREATE TABLE cidades(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade)
);

INSERT INTO cidades(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
	('Rio Claro','RJ',17216);
    
-- Erro por ser uma primary key repetida
    
CREATE TABLE cidades1(
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER,
  CONSTRAINT PRIMARY KEY(cidade, estado)
);

INSERT INTO cidades1(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
	('Rio Claro','RJ',17216);
    
-- Dá certo pela primary key ser composta por cidade e estado
-- Foi só uma ilustração de um exemplo, utilizar um ID para a identificação é mais simples

CREATE TABLE cidades2(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
);

INSERT INTO cidades2(cidade, estado, populacao)
VALUES('Rio Claro','SP',185421),
  ('Rio Claro','RJ',17216);

-- Utilizando ID como primary key simples

-- Utilizando primary key composta em exemplos N:N:

DROP SCHEMA IF EXISTS nerdflix;
CREATE SCHEMA nerdflix;
USE nerdflix;

CREATE TABLE actor(
	actor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE film(
	film_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL
);

CREATE TABLE film_actor(
	actor_id INTEGER,
    film_id INTEGER,
    CONSTRAINT PRIMARY KEY(actor_id, film_id),
    FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
    FOREIGN KEY (film_id) REFERENCES film (film_id)
);
