USE pixar;

INSERT INTO movies(title, director, year, length_minutes) 
VALUES	('Monstros SA', 'Pete Docter', 2001, 92),
	('Procurando Nemo', 'John Lasseter', 2003, 107),
	('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
VALUES	(9, 6.8, 450000000, 370000000);
    
UPDATE movies
SET director = 'Andrew Stanton'
WHERE id = 9;

UPDATE movies
SET title = 'ratatui'
WHERE id = 3;

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
	(10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

DELETE FROM box_office
WHERE movie_id = 11;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM movies
WHERE title = 'Wall-e';

SELECT * FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN (2, 9);

DELETE FROM movies
WHERE director = 'Andrew Stanton';

SET SQL_SAFE_UPDATES = 1;
