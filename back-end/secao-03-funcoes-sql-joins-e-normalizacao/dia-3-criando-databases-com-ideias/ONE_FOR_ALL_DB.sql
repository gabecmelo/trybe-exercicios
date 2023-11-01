DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE IF NOT EXISTS SpotifyClone;

USE SpotifyClone;

CREATE TABLE planos(
	id_plano INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(15) NOT NULL,
    valor_plano DECIMAL(5, 2) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE pessoas_usuarias(
	id_pessoa_usuaria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    id_plano INTEGER,
    data_assinatura DATE,
    FOREIGN KEY (id_plano) REFERENCES planos(id_plano)
) ENGINE=InnoDB;

CREATE TABLE artistas(
	id_artista INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE seguindo(
	id_pessoa_usuaria INTEGER,
    id_artista INTEGER,
    PRIMARY KEY (id_pessoa_usuaria, id_artista),
	FOREIGN KEY (id_pessoa_usuaria) REFERENCES pessoas_usuarias(ID_pessoa_usuaria),
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista)
) ENGINE=InnoDB;

CREATE TABLE albums(
	id_album INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ano_de_lancamento YEAR,
    id_artista INTEGER,
    FOREIGN KEY (id_artista) REFERENCES artistas(id_artista)
) ENGINE=InnoDB;

CREATE TABLE musicas(
	id_musica INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	duracao INT NOT NULL,
	id_album INTEGER,
    FOREIGN KEY (id_album) REFERENCES albums(id_album)
) ENGINE=InnoDB;

CREATE TABLE historico_pessoas(
	id_pessoa_usuaria INTEGER,
    id_musica INTEGER,
    data_reproducao DATETIME NOT NULL UNIQUE,
    PRIMARY KEY (id_pessoa_usuaria, id_musica),
	FOREIGN KEY (id_pessoa_usuaria) REFERENCES pessoas_usuarias(id_pessoa_usuaria),
    FOREIGN KEY (id_musica) REFERENCES musicas(id_musica)
) ENGINE=InnoDB;

INSERT INTO planos (nome, valor_plano) VALUES 
	('gratuito', '0'),
	('familiar', '7.99'),
	('universitário', '5.99'),
	('pessoal', '6.99');

INSERT INTO pessoas_usuarias (nome, idade, id_plano, data_assinatura) VALUES
	('Barbara Liskov', '82', '1', '2019-10-20'),
	('Robert Cecil Martin', '58', '1', '2017-01-06'),
	('Ada Lovelace', '37', '2', '2017-12-30'),
	('Martin Fowler', '46', '2', '2017-01-17'),
	('Sandi Metz', '58', '2', '2018-04-29'),
	('Paulo Freire', '19', '3', '2018-02-14'),
	('Bell Hooks', '26', '3', '2018-01-05'),
	('Christopher Alexander', '85', '4', '2019-06-05'),
	('Judith Butler', '45', '4', '2020-05-13'),
	('Jorge Amado', '58', '4', '2017-02-17');

INSERT INTO artistas (nome) VALUES
	('Beyoncé'),
	('Queen'),
	('Elis Regina'),
	('Baco Exu do Blues'),
	('Blind Guardian'),
	('Nina Simone');

INSERT INTO seguindo (id_pessoa_usuaria, id_artista) VALUES
	('1', '1'),
	('1', '2'),
	('1', '3'),
	('2', '1'),
	('2', '3'),
	('3', '2'),
	('4', '4'),
	('5', '5'),
	('5', '6'),
	('6', '6'),
	('6', '1'),
	('7', '6'),
	('9', '3'),
	('10', '2');

INSERT INTO albums (nome, ano_de_lancamento, id_artista) VALUES
	('Renaissance', '2022', '1'),
	('Jazz', '1978', '2'),
	('Hot Space', '1982', '2'),
	('Falso Brilhante', '1998', '3'),
	('Vento de Maio', '2001', '3'),
	('QVVJFA?', '2003', '4'),
	('Somewhere Far Beyond', '2007', '5'),
	('I Put A Spell On You', '2012', '6');

INSERT INTO musicas (nome, duracao, id_album) VALUES
	('BREAK MY SOUL', '279', '1'),
	('VIRGO\'S GROOVE', '369', '1'),
	('ALIEN SUPERSTAR', '116', '1'),
	('Don\'t Stop Me Now', '203', '2'),
	('Under Pressure', '152', '3'),
	('Como Nossos Pais', '105', '4'),
	('O Medo de Amar é o Medo de Ser Livre', '207', '5'),
	('Samba em Paris', '267', '6'),
	('The Bard\'s Song', '244', '7'),
	('Feeling Good', '100', '8');

INSERT INTO historico_pessoas (id_pessoa_usuaria, id_musica, data_reproducao) VALUES
	('1', '8', '2022-02-28 10:45:55'),
	('1', '2', '2020-05-02 05:30:35'),
	('1', '10', '2020-03-06 11:22:33'),
	('2', '10', '2022-08-05 08:05:17'),
	('2', '7', '2020-01-02 07:40:33'),
	('3', '10', '2020-11-13 16:55:13'),
	('3', '2', '2020-12-05 18:38:30'),
	('4', '8', '2021-08-15 17:10:10'),
	('5', '8', '2022-01-09 01:44:33'),
	('5', '5', '2020-08-06 15:23:43'),
	('6', '7', '2017-01-24 00:31:17'),
	('6', '1', '2017-10-12 12:35:20'),
	('7', '4', '2011-12-15 22:30:49'),
	('8', '4', '2012-03-17 14:56:41'),
	('9', '9', '2022-02-24 21:14:22'),
	('10', '3', '2015-12-13 08:30:22');
