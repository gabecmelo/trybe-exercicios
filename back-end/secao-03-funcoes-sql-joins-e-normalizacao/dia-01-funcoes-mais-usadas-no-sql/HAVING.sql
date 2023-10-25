USE sakila;

SELECT first_name, COUNT(*) as `nomes cadastrados` FROM sakila.actor
GROUP BY first_name
HAVING `nomes cadastrados` > 2;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

SELECT rating, AVG(length) AS duracao
FROM sakila.film
GROUP BY rating
HAVING duracao BETWEEN 115.0 AND 121.50;

SELECT rating, SUM(replacement_cost) AS `custo de substituicao`
FROM sakila.film
GROUP by rating
HAVING `custo de substituicao` > 3950.50;