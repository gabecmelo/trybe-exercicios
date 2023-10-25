USE sakila;
SELECT * FROM actor
WHERE first_name IN ('PeNELoPE', 'nick', 'ED', 'jennifer');

SELECT * FROM customer
WHERE customer_id IN (1, 2, 3, 4, 5);

SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);

SELECT * FROM address
WHERE district IN ('QLD', 'NAGASAKI', 'CALIFORNIA', 'ATTIKA', 'MANDALAY', 'NANTOU', 'TEXAS');

SELECT title, length FROM film
WHERE length BETWEEN 50 AND 120
ORDER BY length;

SELECT * FROM language
WHERE name BETWEEN 'Italian' AND 'Mandarin';

SELECT rental_id, rental_date FROM rental
WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';

SELECT first_name, last_name FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;

SELECT COUNT(*) AS quantidade_de__pagamentos FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title 
LIMIT 500;



