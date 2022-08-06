CREATE SCHEMA `bd_cosmetica`;

USE bd_cosmetica;

CREATE TABLE users(
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
datecreation DATETIME,
username VARCHAR(15) NOT NULL,
lastname VARCHAR(15) NOT NULL,
passwordUser VARCHAR(15) NOT NULL UNIQUE,
email VARCHAR(30) NOT NULL UNIQUE, 
image BLOB,
telephone VARCHAR(30) UNIQUE NOT NULL,
direction VARCHAR(50) NOT NULL,
FOREIGN KEY(idStatusUser) REFERENCES statusUsers(id),
FOREIGN KEY(postalCode) REFERENCES delivery(postalCode)
);

USE bd_cosmetica;

CREATE TABLE cards (
numbercard INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
expirationdate DATE NOT NULL,
username VARCHAR(20) NOT NULL,
cvv INT NOT NULL,
brand VARCHAR(15) NOT NULL,
FOREIGN KEY(idUser) REFERENCES users(id)
);

USE bd_cosmetica;

CREATE TABLE statusUsers (
id INT UNIQUE AUTO_INCREMENT PRIMARY KEY,
nameStatus VARCHAR(15) DEFAULT 'Usuario' 
);

USE bd_cosmetica;

CREATE TABLE delivery (
postalCode INT NOT NULL,
locality VARCHAR(25) NOT NULL,
province VARCHAR(25) NOT NULL,
price INT NOT NULL 
);

USE bd_cosmetica;

CREATE TABLE products (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameProduct VARCHAR(40) NOT NULL,
price INT NOT NULL,
descriptionProduct TEXT NOT NULL,
modeOfUse TEXT NOT NULL,
ingredients TEXT NOT NULL,
grams TINYINT NOT NULL,
image BLOB,
dateCreation DATETIME 
);

USE bd_cosmetica;

CREATE TABLE category (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
categoryName VARCHAR(20) NOT NULL,
descriptionCategory TEXT NOT NULL,
image BLOB
);

USE bd_cosmetica;

CREATE TABLE fragrance (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameFragrance VARCHAR(15) NOT NULL 
);

USE bd_cosmetica;

CREATE TABLE orders (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
FOREIGN KEY(idProduct) REFERENCES products(id),
FOREIGN KEY(idUser) REFERENCES users(id),
FOREIGN KEY(idDelivery) REFERENCES delivery(postalCode)
);

USE bd_cosmetica;

CREATE TABLE cart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
quantity TINYINT NOT NULL,
totalPrice INT NOT NULL,
createAt DATETIME NOT NULL,
FOREIGN KEY(idUser) REFERENCES users(id),
FOREIGN KEY(idStatus) REFERENCES statusCart(id)
);

USE bd_cosmetica;

CREATE TABLE statusCart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
nameStatusCart VARCHAR(15) NOT NULL
);

USE bd_cosmetica;

CREATE TABLE orderCart (
id INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
FOREIGN KEY(idOrder) REFERENCES orders(id),
FOREIGN KEY(idCart) REFERENCES cart(id)
)
