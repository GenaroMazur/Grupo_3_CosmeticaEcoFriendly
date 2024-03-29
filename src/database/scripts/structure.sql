CREATE SCHEMA `bd_cosmetica`;

USE bd_cosmetica;

CREATE TABLE statusUsers (
id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
nameStatus VARCHAR(15) DEFAULT 'User' 
);

USE bd_cosmetica;

CREATE TABLE delivery (
postalCode INT NOT NULL PRIMARY KEY,
locality VARCHAR(25) NOT NULL,
province VARCHAR(25) NOT NULL,
price INT NOT NULL 
);

USE bd_cosmetica;

CREATE TABLE category (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
categoryName VARCHAR(25) NOT NULL,
descriptionCategory TEXT NOT NULL,
image VARCHAR(60)
);

USE bd_cosmetica;

CREATE TABLE fragrance (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameFragrance VARCHAR(15) NOT NULL 
);

USE bd_cosmetica;

CREATE TABLE statusCart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameStatusCart VARCHAR(15) NOT NULL
);

USE bd_cosmetica;

CREATE TABLE users(
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
dateCreation DATETIME,
userName VARCHAR(15) NOT NULL,
lastName VARCHAR(15) NOT NULL,
passwordUser VARCHAR(100) NOT NULL UNIQUE,
email VARCHAR(45) NOT NULL UNIQUE, 
image VARCHAR(60) DEFAULT'default.png',
telephone VARCHAR(30) UNIQUE,
direction VARCHAR(50),
idStatusUser INT,
postalCode INT,
FOREIGN KEY(idStatusUser) REFERENCES statusUsers(id),
FOREIGN KEY(postalCode) REFERENCES delivery(postalCode)
);

USE bd_cosmetica;

CREATE TABLE cards (
numberCard INT UNIQUE PRIMARY KEY,
expirationDate DATE NOT NULL,
userName VARCHAR(20) NOT NULL,
cvv INT NOT NULL,
brand VARCHAR(15) NOT NULL,
idUser INT,
FOREIGN KEY(idUser) REFERENCES users(id)
);



USE bd_cosmetica;

CREATE TABLE products (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameProduct VARCHAR(40) NOT NULL,
price INT NOT NULL,
descriptionProduct TEXT NOT NULL,
modeOfUse TEXT NOT NULL,
ingredients TEXT NOT NULL,
grams INT NOT NULL,
image VARCHAR(60),
dateCreation DATETIME,
idFragrance INT,
idCategory INT,
FOREIGN KEY(idFragrance) REFERENCES fragrance(id),
FOREIGN KEY(idCategory) REFERENCES category(id)
);
USE bd_cosmetica;

CREATE TABLE cart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
idUser INT,
idDelivery INT,
idStatus INT,
totalPrice INT NOT NULL,
FOREIGN KEY(idStatus) REFERENCES statusCart(id),
FOREIGN KEY(idUser) REFERENCES users(id),
FOREIGN KEY(idDelivery) REFERENCES delivery(postalCode)
);


USE bd_cosmetica;

CREATE TABLE productCart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
quantity TINYINT NOT NULL,
idProduct INT,
idCart INT,
FOREIGN KEY(idCart) REFERENCES cart(id),
FOREIGN KEY(idProduct) REFERENCES products(id)
);



USE bd_cosmetica;
ALTER TABLE `bd_cosmetica`.`users` 
CHANGE COLUMN `image` `image` VARCHAR(60) NULL DEFAULT 'default.jpg' ;
