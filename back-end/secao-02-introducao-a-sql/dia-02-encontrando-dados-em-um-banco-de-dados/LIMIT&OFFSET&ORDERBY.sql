USE sakila;
-- LIMIT
SELECT * FROM rental LIMIT 10;

-- OFFSET
SELECT * FROM actor LIMIT 10 OFFSET 45;

-- ORDER BY
SELECT * FROM address
ORDER BY district, address DESC;
