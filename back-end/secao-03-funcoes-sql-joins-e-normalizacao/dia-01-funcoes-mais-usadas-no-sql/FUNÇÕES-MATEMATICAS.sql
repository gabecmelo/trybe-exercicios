SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;

SELECT 10 DIV 3;
SELECT 10 DIV 2;
SELECT 14 DIV 3;
SELECT 13 DIV 2;

SELECT 10 MOD 3;
SELECT 10 MOD 2;
SELECT 14 MOD 3;
SELECT 13 MOD 2;
SELECT 10.5 MOD 2;

-- Exercicios

SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS `Par ou ímpar`;

SELECT 220 DIV 12; -- 18 grupos de 12 pessoas
SELECT 220 MOD 12; -- sobram 4 lugares