USE sakila;

INSERT INTO staff (first_name, last_name, address_id, email, store_id, username, password)
VALUES ('Gabriel', 'Melo', 2, 'contatogabemelo@gmail.com', 2, 'Gabriel', 'snvfo9t5');

INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer
    LIMIT 5;
    
INSERT INTO category (name) VALUES 
('Terrô'),
('Comédia'),
('Ação'),
('Aventura'),
('Alegria');

INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 4);