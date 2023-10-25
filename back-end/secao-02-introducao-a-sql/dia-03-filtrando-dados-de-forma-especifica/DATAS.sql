USE sakila;

SELECT * FROM payment
WHERE DATE(payment_date) IN ('2005-07-31');

SELECT * FROM payment
WHERE payment_date LIKE '2005-07-31%';

SELECT * FROM payment
WHERE payment_date LIKE '2005-07-31 12%';

SELECT * FROM payment
WHERE payment_date LIKE '2005-06-15 21:08:46';

SELECT * FROM payment
WHERE payment_date BETWEEN '2005-07-31 09:00:00' AND '2005-07-31 12:00:00';

SELECT DATE(payment_date) FROM payment;
SELECT YEAR(payment_date) FROM payment;
SELECT MONTH(payment_date) FROM payment;
SELECT DAY(payment_date) FROM payment;
SELECT HOUR(payment_date) FROM payment;
SELECT MINUTE(payment_date) FROM payment;
SELECT SECOND(payment_date) FROM payment;

-- EXERCICIOS

SELECT COUNT(*) AS pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01 00:00:00' AND '2005-08-22 23:59:59';

SELECT 
DATE(rental_date) AS data,
YEAR(rental_date) AS ano,
MONTH(rental_date) AS mes,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE payment_date BETWEEN '2005-07-28 22%' AND '2005-07-28 23:59:59';
-- ou
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;






