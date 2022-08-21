USE bd_cosmetica;

INSERT INTO statusUsers VALUES (1,'User');
INSERT INTO statusUsers VALUES (2,'Admin');


USE bd_cosmetica;
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3300', 'Posadas', 'Misiones', '350');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3380', 'Eldorado', 'Misiones', '490');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3370', 'Iguazú', 'Misiones', '490');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3352', 'San Pedro', 'Misiones', '490');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3384', 'Montecarlo', 'Misiones', '480');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3365', 'Oberá', 'Misiones', '480');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3364', 'San Vicente', 'Misiones', '480');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3350', 'Apóstoles', 'Misiones', '480');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3302', 'Ituzaingó', 'Corrientes', '550');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3340', 'Santo Tomé', 'Corrientes', '550');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3231', 'Yapeyú', 'Corrientes', '550');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3230', 'Paso de los Libres', 'Corrientes', '550');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3100', 'Paraná', 'Entre Rios', '650');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3206', 'Federacion', 'Entre Rios', '650');
INSERT INTO `bd_cosmetica`.`delivery` (`postalCode`, `locality`, `province`, `price`) VALUES ('3200', 'Concordia', 'Entre Rios', '650');

USE bd_cosmetica;

INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Menta Limón\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Lavanda\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Coco\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Naranja Lima\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('Cacao Sándalo\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Herbal\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Café Naranja\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Limón Lima\"');

USE bd_cosmetica;
SELECT * FROM products;

INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Procesando');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Almacenado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Payment pending');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Completado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Rechazado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Cancelado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Devuelto');

USE bd_cosmetica;

INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Shampoo Sólido', 'Es una pastilla concentrada de aceites, infusiones, plantas, arcillas y aceites esenciales, que dejara tu cabello suave y brillante.', 'jabon_1.jpg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Jabón Sólido', 'Los jabones naturales son elaborados artesanalmente, produciendo una espuma suave que mantendra tu piel hidratada.', 'jabon_exfoliante_1.jpeg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Acondicionador Sólido', 'El acondicionador sólido nutre el cabello con ingredientes naturales dejándolo brilloso y suave. Es libre de siliconas.', 'acondicionador solido 3.jpeg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Desodorante Sólido', 'Combate de forma natural la humedad y los olores de la transpiración. Fórmula suave y cremosa, de fácil absorción.', '371f4bfc3fba0349aa866fc2e7a66392.jpg');

USE bd_cosmetica;

INSERT INTO `bd_cosmetica`.`products` (`nameProduct`, `price`, `descriptionProduct`, `modeOfUse`, `ingredients`, `grams`, `idFragrance`, `idCategory`) VALUES ('Shampoo para cabello normal', '599.99', 'Ideal para pelo normal. La arcilla roja desintoxica la piel del cuero cabelludo, manteniendo el pelo fuerte y sano, además absorbe parte de la grasa capilar ayudando a que el pelo se vea más limpio y ligero. El aceite de ricino mejora la circulación en el cuero cabelludo, estimula el crecimiento y junto con el aceite de rosa mosqueta ayudan a mantener el cabello sedoso, brilloso y sin frizz. Además contiene agua de rosas que es calmante y antiinflamatoria. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo como habitualmente. Aclarar con abundante agua.', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla roja, aceite de rosa mosqueta, aceite de ricino, agua de rosas, infusión de te rojo, blend de aceites florales, proteína vegetal.', '100', '1', '1');
INSERT INTO `bd_cosmetica`.`products` (`nameProduct`, `price`, `descriptionProduct`, `modeOfUse`, `ingredients`, `grams`, `idFragrance`, `idCategory`) VALUES ('Shampoo sólido cabello graso', '599.99', 'El aceite de jojoba es ideal para pelo graso, elimina el sebo que queda en los folículos pilosos, además hidrata el pelo penetrando en el cuero cabelludo. El efecto se complementa con la arcilla verde y aceite esencial de limón, con poderosas propiedades astringentes, ayuda a eliminar todo tipo de suciedad, la caspa y sobre todo la grasa del cabello. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo como habitualmente. Aclarar con abundante agua', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla verde, aceite de jojoba, infusión de lemongrass, jugo de limón exprimido, aceite esencial de limón, cúrcuma, proteína vegetal.', '100', '1', '1');
INSERT INTO `bd_cosmetica`.`products` (`nameProduct`, `price`, `descriptionProduct`, `modeOfUse`, `ingredients`, `grams`, `idFragrance`, `idCategory`) VALUES ('Shampoo sólido cabello seco', '599.99', 'Este shampoo para cabellos secos ofrece una combinación de aceites hidrata el cabello, lo fortalecen y reducen la caída. Ideal para cabellos encrespados y secos, sus aceites ayudan a retener el agua y a sellar la cutícula devolviendo el brillo, cerrando las puntas y facilitando el crecimiento. El aceite de romero rico en antioxidantes, es una buena opción para combatir la caída, el aceite de palta repara el cabello dañado y lo nutre en profundidad y el aceite de coco aporta brillo y suavidad. Las flores de hibiscus previenen la caída y las puntas quebradizas. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo y aclarar con abundante agua.', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla blanca, aceite de palta, aceite de oliva extra virgen, aceite esencial de romero, infusión de tilo, espirulina, proteína vegetal.', '100', '2', '1');


USE bd_cosmetica;

INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('desarrollador', 'LaVie', '$2b$10$FS.Hk0a76pgYkQuBQuQUweSsml3dU1HzUpLIMtj0B0wCANp6Nr6Dm', 'desarrollador@hotmail.com', 'default.jpg', '1');
UPDATE `bd_cosmetica`.`users` SET `idStatusUser` = '2' WHERE (`id` = '1');
UPDATE `bd_cosmetica`.`users` SET `idStatusUser` = '2' WHERE (`id` = '2');
INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('Camila', 'Morand', '$2b$10$uG.1zCfS8stlsgVRZhoEduiy91OoDqFm6aRArW.5DdUvwmUOYVUNC', 'magalicamila251@gmail.com', 'default.jpg', '2');
INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('leandro', 'ramos', '$2b$10$ITPG.GPaZh6/QGiKmCBg0.NsoA2xTnt8gj0NVy4PKKEI4CQ.PCj2a', 'leo-rammos@hotmail.com', 'leandroramos1657584227715.jpg', '2');