-- CREACION DE BASE DE DATOS
DROP DATABASE IF EXISTS hanyou_db;
CREATE DATABASE hanyou_db;
USE hanyou_db;

-- CREACION DE TABLA DE TAMAÑOS
DROP TABLE IF EXISTS `sizes`;
CREATE TABLE `sizes` (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT UNIQUE,
    `size` VARCHAR (200) NOT NULL,
    PRIMARY KEY (`id`)
);

-- CREACION DE TABLA DE PRODUCTOS 
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
    `name` VARCHAR (100) NOT NULL,
    `description` VARCHAR (280) NOT NULL,
    `color` VARCHAR (200) NOT NULL,
    `size_id` int(10) unsigned NOT NULL ,
    `price` DECIMAL (6,2) unsigned NOT NULL,
    `sku` int unsigned AUTO_INCREMENT UNIQUE,
    `image` VARCHAR (300) NOT NULL,
    `index` TINYINT unsigned NOT NULL,
    PRIMARY KEY (`sku`),
    FOREIGN KEY (`size_id`) REFERENCES `sizes`(`id`)
);

-- CREACION DE TABLA DE USUARIOS
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `firstName` VARCHAR (20) NOT NULL,
    `lastName` VARCHAR (20) NOT NULL,
    `email` VARCHAR (50) NOT NULL UNIQUE,
    `password` VARCHAR (200) NOT NULL, 
    `avatar` VARCHAR (300) NOT NULL,
    `adminType` TINYINT unsigned NOT NULL,
    `id` int unsigned AUTO_INCREMENT UNIQUE,
    PRIMARY KEY (`id`)
)

