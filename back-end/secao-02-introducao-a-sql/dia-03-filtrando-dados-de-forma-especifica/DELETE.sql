use sakila;

SELECT * FROM film;

DELETE FROM film_text
WHERE title = 'ACADEMY DINOSAUR';

-- NÃO FUNCIONA
DELETE FROM actor
WHERE first_name = 'GRACE';

DELETE FROM film_actor
WHERE actor_id = 7;

-- APÓS DELETAR AONDE TEM AS FOREIGNS KEYS FUNCIONA
DELETE FROM actor
WHERE first_name = 'GRACE';

-- EXERCICIOS

SELECT * FROM film_actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';











