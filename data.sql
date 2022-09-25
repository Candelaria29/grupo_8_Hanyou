-- TABLA DE TAMAÑOS
INSERT INTO sizes (id, size) VALUES 
(DEFAULT, 'small'), (DEFAULT, 'big')

-- TABLA DE PRODUCTOS
INSERT INTO products (name, description, color, size_id, price, sku, image, index) VALUES 
('Baby Yoda - Fernet', '¿Habrá un baby Yoda más argentino que este?', 'painted', 2, 2500, DEFAULT, 'babyyodafernet.png', 1),
('Set de macetas Pokemón','Combiná tu amor por las plantas y Pokemón con este set de macetas de Bulbasaur y Oddish.  ','painted',1,3560, DEFAULT, 'macetaspokemon.png', 1),
('Capitán América', 'Para todos los amantes de Marvel.','painted',1,3003,DEFAULT,'capamerica.png', 1),
('Mate Pikachu','Empezá tus mañanas tomándote un rico matecito con este Pikachu!','painted',1,666,DEFAULT,'pokemonmate.png',0),
('Portalápiz Darth Vader','La fuerza estará contigo si tenés a Darth Vader en tu escritorio.     ','painted',1,405,DEFAULT,'swpenholder.png',0)

-- TABLA DE USUARIOS