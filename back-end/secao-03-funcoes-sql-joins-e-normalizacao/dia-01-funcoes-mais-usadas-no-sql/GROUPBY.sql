SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- Exercicios

USE sakila;

SELECT IF (`active` = 1, 'Clientes ativos', 'Clientes inativos') AS opções, COUNT(1) AS quantidade 
FROM customer
GROUP BY `active`;

SELECT store_id AS `ID da loja`, 
CASE 
	WHEN `active` = 1 AND store_id = 1 THEN 'Clientes ativos na Loja 1'
    WHEN `active` = 1 AND store_id = 2 THEN 'Clientes ativos na Loja 2'
    WHEN `active` = 0 AND store_id = 1 THEN 'Clientes inativos na Loja 1'    
    ELSE 'Clientes inativos na Loja 2'
END AS Status, COUNT(*) AS Quantidade
FROM customer
GROUP BY store_id, active;

SELECT rating AS classificacao, AVG(rental_duration) AS `Media de duracao` FROM film
GROUP BY rating
ORDER BY `Media de duracao`DESC;

SELECT district, COUNT(1) AS quantidade FROM address
GROUP BY district
ORDER BY quantidade DESC;







