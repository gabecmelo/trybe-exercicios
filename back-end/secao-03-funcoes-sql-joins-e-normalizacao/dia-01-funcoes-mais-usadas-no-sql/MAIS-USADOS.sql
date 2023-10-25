SELECT AVG(replacement_cost) FROM sakila.film;
SELECT MIN(replacement_cost) FROM sakila.film;
SELECT MAX(replacement_cost) FROM sakila.film;
SELECT SUM(replacement_cost) FROM sakila.film;
SELECT COUNT(replacement_cost) FROM sakila.film;

USE sakila;

SELECT AVG(length)  AS `Media de Duracao` FROM film;

SELECT MIN(length) AS `Duracao Minima` FROM film;

SELECT MAX(length) AS `Duracao Maxima` FROM film;

SELECT SUM(length) AS `Tempo de Exibicao Total` FROM film; -- 115.272 minutos

SELECT COUNT(length) AS `Filmes Registrados` FROM film;
