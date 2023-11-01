CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;


CREATE TABLE Especies(
	especie_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Locais(
	local_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Animais(
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
    sexo CHAR(1) NOT NULL,
    idade VARCHAR(5) NOT NULL,
    especie_id INT NOT NULL,
    local_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES Especies (especie_id),
    FOREIGN KEY (local_id) REFERENCES Locais (local_id)
);

CREATE TABLE Cuidadores(
	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE animais_cuidadores(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
	FOREIGN KEY (animal_id) REFERENCES Animais (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores (cuidador_id)
);

CREATE TABLE Gerentes(
	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE gerentes_cuidadores(
	gerente_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES Gerentes (gerente_id),
    FOREIGN KEY (cuidador_id) REFERENCES Cuidadores (cuidador_id)
) ENGINE=InnoDB;

















