USE sakila;

UPDATE staff
SET first_name = 'Jhonny'
WHERE first_name = 'Jon';

UPDATE staff
SET first_name = 'Jon'
WHERE staff_id = 2;

UPDATE staff
SET password ='pr4o9t5'
WHERE staff_id = 2;

-- SQL safe mode
SET SQL_SAFE_UPDATES = 0;
-- CASE
UPDATE actor
SET first_name = (
CASE actor_id 
	WHEN 1 THEN 'JUÃO' 
	WHEN 2 THEN 'MIKE' 
	WHEN 3 THEN 'EDERSON'
		ELSE first_name
END);

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'Jules';

UPDATE category
SET name = 'Science Fiction'
WHERE category_id = 14;

UPDATE film
SET rental_rate = 25
WHERE length > 100 AND rating IN ('PG', 'G', 'PG-13') AND replacement_cost > 20;


UPDATE film
SET rental_rate = (
CASE 
	WHEN length <= 100 THEN 10
    WHEN length > 100 THEN 20
		ELSE length
END);

SELECT * FROM film;








