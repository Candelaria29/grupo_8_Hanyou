-- TABLA DE TAMAÑOS
INSERT INTO sizes (id, size) VALUES 
(DEFAULT, 'small'), (DEFAULT, 'big');

-- TABLA DE PRODUCTOS
INSERT INTO products (name, description, color, size_id, price, sku, image, `index`) VALUES 
('Baby Yoda - Fernet', '¿Habrá un baby Yoda más argentino que este?', 'painted', 2, 2500, DEFAULT, 'babyyodafernet.png', 1),
('Set de macetas Pokemón','Combiná tu amor por las plantas y Pokemón con este set de macetas de Bulbasaur y Oddish.  ','painted',1,3560, DEFAULT, 'macetaspokemon.png', 1),
('Capitán América', 'Para todos los amantes de Marvel.','painted',1,3003,DEFAULT,'capamerica.png', 1),
('Mate Pikachu','Empezá tus mañanas tomándote un rico matecito con este Pikachu!','painted',1,666,DEFAULT,'pokemonmate.png',0),
('Portalápiz Darth Vader','La fuerza estará contigo si tenés a Darth Vader en tu escritorio.','painted',1,405,DEFAULT,'swpenholder.png',0), 
('Leonardo - Las tortugas Ninja', 'Leonardo todavía se ve tierno incluso cuando pone cara de malo. No hay duda de su feroz devoción por sus hermanos y el Maestro Splinter.', 'painted', '2', '550.50', NULL, 'image-1668464048693-602287459.png', '0'),
('Maceta Demogorgon', 'Para los fans de las plantas y Stranger Things..... será vegetariano el Demogorgon?', 'painted', '2', '1980.00', NULL, 'image-1668464315576-193099612.png', '0'),
('Hogwarts', 'Ideal para todos los potterheads, e incluye una carta de aceptación a Hogwarts! ', 'not painted', '2', '9800.00', NULL, 'image-1668467880716-27016721.png', '0'),
('Alien - Toy Story', 'En honor a los inicios de Hanyou, allá por Mayo del 2022, te traemos la edicíon limitada del personaje que nos acompaño en la creacíon del html de este sitio.', 'painted', '1', '0.10', NULL, 'image-1668468011185-250162538.png', '0');

-- TABLA DE USUARIOS
INSERT INTO users (firstName, lastName, email, password, avatar, admintype, id) VALUES
("Nicol", "Cilio", "nicolas.cilio95@gmail.com","$2b$10$/ob8kTK5QgbRkEr.LFvs.ey6m4tqyuLqTW8K5VIqU/mf4O7gVFVk6","imagenUsuario-1663110312898-640650027.png",0,DEFAULT),
("Nicolás","Cilio","nicolasagustincilio@gmail.com","$2b$10$3IB9QTvmvVGgVpG7oU5zJeNNNoeVceJ44xvKIUc1TCVpSHtWFmn5O","default.png",1,DEFAULT),
("Maria Candelaria","Barrios","candelariabarrios@hotmail.com","$2b$10$D4h7Fni6fMEoNUkNiSNGGe.xMI8GbGJr1RzgiSfgyVbXOmQweg0nW","default.png",1,DEFAULT);