SELECT m.id, m.title, bo.domestic_sales, bo.international_sales
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id;

SELECT m.id, m.title, bo.domestic_sales + bo.international_sales AS total_sales
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id
WHERE bo.domestic_sales < international_sales;

SELECT m.id, m.title, bo.rating 
FROM movies m
INNER JOIN box_office bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater t
LEFT JOIN movies m
ON m.theater_id = t.id
ORDER BY t.`name`;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes 
FROM theater t
RIGHT JOIN movies m
ON t.id = m.theater_id
ORDER BY t.`name`;
