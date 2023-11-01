USE sakila;


SELECT 
	a.actor_id, CONCAT(a.first_name, " ", a.last_name) AS full_name, fa.film_id
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id;


SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a 
ON s.address_id = a.address_id;


SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.address 
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY full_name DESC
LIMIT 100;


SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, c.email, c.address_id, a.district
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE first_name LIKE '%rene%' AND district = 'California';


SELECT CONCAT(c.first_name, ' ', c.last_name) AS full_name, r.customer_id, COUNT(*) AS rental_quantity
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.`active` = 1
GROUP BY customer_id;


SELECT CONCAT(s.first_name, ' ', s.last_name) AS full_name, AVG(p.amount) AS payment_average
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY full_name
;


SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor a
INNER JOIN film_actor fa
INNER JOIN film f
ON a.actor_id = fa.actor_id AND fa.film_id = f.film_id
; 	

SELECT * FROM actor, film_actor, film;







