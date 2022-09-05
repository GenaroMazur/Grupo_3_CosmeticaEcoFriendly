USE bd_cosmetica;

INSERT INTO statusUsers VALUES (1,'User');
INSERT INTO statusUsers VALUES (2,'Admin');


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


INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Menta Limón\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Lavanda\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Coco\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Naranja Lima\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('Cacao Sándalo\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Herbal\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Café Naranja\"');
INSERT INTO `bd_cosmetica`.`fragrance` (`nameFragrance`) VALUES ('\"Limón Lima\"');


INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Procesando');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Almacenado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Payment pending');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Completado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Rechazado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Cancelado');
INSERT INTO `bd_cosmetica`.`statuscart` (`nameStatusCart`) VALUES ('Devuelto');


INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Shampoo Sólido', 'Es una pastilla concentrada de aceites, infusiones, plantas, arcillas y aceites esenciales, que dejara tu cabello suave y brillante.', 'jabon_1.jpg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Jabón Sólido', 'Los jabones naturales son elaborados artesanalmente, produciendo una espuma suave que mantendra tu piel hidratada.', 'jabon_exfoliante_1.jpeg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Acondicionador Sólido', 'El acondicionador sólido nutre el cabello con ingredientes naturales dejándolo brilloso y suave. Es libre de siliconas.', 'acondicionador solido 3.jpeg');
INSERT INTO `bd_cosmetica`.`category` (`categoryName`, `descriptionCategory`, `image`) VALUES ('Desodorante Sólido', 'Combate de forma natural la humedad y los olores de la transpiración. Fórmula suave y cremosa, de fácil absorción.', '371f4bfc3fba0349aa866fc2e7a66392.jpg');





INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('desarrollador', 'LaVie', '$2b$10$FS.Hk0a76pgYkQuBQuQUweSsml3dU1HzUpLIMtj0B0wCANp6Nr6Dm', 'desarrollador@hotmail.com', 'default.jpg', '1');
UPDATE `bd_cosmetica`.`users` SET `idStatusUser` = '2' WHERE (`id` = '1');
UPDATE `bd_cosmetica`.`users` SET `idStatusUser` = '2' WHERE (`id` = '2');
INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('Camila', 'Morand', '$2b$10$uG.1zCfS8stlsgVRZhoEduiy91OoDqFm6aRArW.5DdUvwmUOYVUNC', 'magalicamila251@gmail.com', 'default.jpg', '2');
INSERT INTO `bd_cosmetica`.`users` (`userName`, `lastName`, `passwordUser`, `email`, `image`, `idStatusUser`) VALUES ('leandro', 'ramos', '$2b$10$ITPG.GPaZh6/QGiKmCBg0.NsoA2xTnt8gj0NVy4PKKEI4CQ.PCj2a', 'leo-rammos@hotmail.com', 'leandrojoelramos.jpg', '2');

USE bd_cosmetica;

INSERT INTO `products` (`id`, `nameProduct`, `price`, `descriptionProduct`, `modeOfUse`, `ingredients`, `grams`, `image`, `dateCreation`, `idFragrance`, `idCategory`) VALUES
(1, 'Shampoo para cabello normal', 600, 'Ideal para pelo normal. La arcilla roja desintoxica la piel del cuero cabelludo, manteniendo el pelo fuerte y sano, además absorbe parte de la grasa capilar ayudando a que el pelo se vea más limpio y ligero. El aceite de ricino mejora la circulación en el cuero cabelludo, estimula el crecimiento y junto con el aceite de rosa mosqueta ayudan a mantener el cabello sedoso, brilloso y sin frizz. Además contiene agua de rosas que es calmante y antiinflamatoria. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo como habitualmente. Aclarar con abundante agua.', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla roja, aceite de rosa mosqueta, aceite de ricino, agua de rosas, infusión de te rojo, blend de aceites florales, proteína vegetal.', 100, 'acondicionador solido normal.jpeg', NULL, 1, 1),
(2, 'Shampoo sólido cabello graso', 600, 'El aceite de jojoba es ideal para pelo graso, elimina el sebo que queda en los folículos pilosos, además hidrata el pelo penetrando en el cuero cabelludo. El efecto se complementa con la arcilla verde y aceite esencial de limón, con poderosas propiedades astringentes, ayuda a eliminar todo tipo de suciedad, la caspa y sobre todo la grasa del cabello. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo como habitualmente. Aclarar con abundante agua', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla verde, aceite de jojoba, infusión de lemongrass, jugo de limón exprimido, aceite esencial de limón, cúrcuma, proteína vegetal.', 100, 'shampoo solido graso.jpeg', NULL, 1, 1),
(3, 'Shampoo sólido cabello seco', 600, 'Este shampoo para cabellos secos ofrece una combinación de aceites hidrata el cabello, lo fortalecen y reducen la caída. Ideal para cabellos encrespados y secos, sus aceites ayudan a retener el agua y a sellar la cutícula devolviendo el brillo, cerrando las puntas y facilitando el crecimiento. El aceite de romero rico en antioxidantes, es una buena opción para combatir la caída, el aceite de palta repara el cabello dañado y lo nutre en profundidad y el aceite de coco aporta brillo y suavidad. Las flores de hibiscus previenen la caída y las puntas quebradizas. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales.', 'Humedecer el cabello y el shampoo, frotar la pastilla en el pelo para que deje ir la espuma o frotar la pastilla en las manos y aplicar la espuma en el pelo. Masajear el cuero cabelludo y aclarar con abundante agua.', 'tensioactivo natural derivado del aceite de coco (SCI), arcilla blanca, aceite de palta, aceite de oliva extra virgen, aceite esencial de romero, infusión de tilo, espirulina, proteína vegetal.', 100, 'shampoo_seco.jpeg', NULL, 2, 1),
(4, 'Acondicionador para cabello normal', 600, 'Acondicionador capilar sólido nutritivo para largos y puntas. Suaviza, humecta e hidrata la fibra capilar. Brinda luminosidad. Fortalece el cabello normal ya que el aceite de coco aporta brillo y suavidad sin engrasar. pH adecuado. Producto natural vegano. Libre de parabenos, siliconas, petrolatos, sulfatos, colorantes y aromas artificiales. No testeado en animales', 'Después de aplicar el shampoo frotar la pastilla en las manos para que se deshagan y emulsionen sus aceites y aplicar sobre el cabello mojado (de medios a puntas, o sólo puntas en caso de cabello fino y/o graso) extendiéndose con las manos o con un peine. Dejar actuar unos minutos y aclarar con agua para retirar el posible exceso.', 'Aceite de primera presión en frío de palta, almendra, coco, ricino, proteína de seda de origen natural, tensioactivo BTMS (Emulsionante de origen vegetal), manteca de Karité, glicerina vegetal, aceite esencial de coco. Vitamina E y B5.', 100, 'acondicionador_normal.jpeg', NULL, 3, 2),
(5, 'Acondicionador para cabello graso', 600, 'Nuestro acondicionador sólido nutre el cabello con ingredientes naturales dejándolo brilloso, suave y sin aspecto graso ya ', 'Después de aplicar el shampoo frotar la pastilla en las manos para que se deshagan y emulsionen sus aceites y aplicar sobre el cabello mojado (de medios a puntas, o sólo puntas en caso de cabello fino y/o graso) extendiéndose con las manos o con un peine. Dejar actuar unos minutos y aclarar con agua para retirar el posible exceso.', 'BTMS (cetearyl alcohol & behentrimonium methosulfate), Alcohol cetoestearilico, Cera vegetal carnauba, Manteca de karité, Aceite de coco, Aceite de naranja y lima.', 100, 'acondicionador_graso.jpeg', NULL, 4, 2),
(6, 'Acondicionador para cabello seco', 600, 'El acondicionador sólido cacao y karité es ideal para hidratar y nutrir el cabello seco, está elaborado con mantecas y aceites naturales. Es un producto libre de siliconas, parabenos y sulfatos. Te permite cuidarte de una forma más saludable con ingredientes de origen natural. pH adecuado. Producto natural vegano. No testeado en animales', 'Después de aplicar el shampoo frotar la pastilla en las manos para que se deshagan y emulsionen sus aceites y aplicar sobre el cabello mojado (de medios a puntas, o sólo puntas en caso de cabello fino y/o graso) extendiéndose con las manos o con un peine. Dejar actuar unos minutos y aclarar con agua para retirar el posible exceso.', 'BTMS, manteca de cacao, manteca de karité, aceite de coco, aceite de almendras dulces, aceite de ricino, emulsionante.', 100, 'acondicionador_seco.jpg', NULL, 5, 2),
(7, 'Jabón facial o corporal', 400, 'Con propiedades cicatrizantes y regeneradoras; ayuda a disminuir la apariencia de manchas en cualquier parte del cuerpo, suaviza, hidrata y unifica los tonos de la piel. Mejora el aspecto de la piel POST-Acné.Apto para todo tipo de piel, incluida piel sensible y delicadas. Forma una barrera de protección natural a la piel que actúa contra los radicales libres, agresiones ambientales y partículas contaminantes. Acelera la producción de colágeno, previene el envejecimiento de la piel y retrasa la oxidación de las células. Producto natural vegano. No testeado en animales.', '', 'Base de Glicerina Blanca, Leche de coco, Extracto de Rosa Mosqueta en polvo, Aceite Esencial de Ylang-ylang, Aceite Esencial de hierbas.', 100, 'jabon_1.jpg', NULL, 6, 3),
(8, 'Jabón exfoliante', 400, 'Aporta propiedades cicatrizantes y regeneradoras que dejan una suave sensación sobre la piel; removiendo la suciedad acumulada. Tiene propiedades antibióticas que mejoran el aspecto de la piel, dejándola con mayor elasticidad y luminosidad .', '', 'Aceite de oliva extra virgen, aceite de coco, manteca de karité, aceite de almendras dulces, enriquecidos con granos de café y aceite de naranja.', 100, 'jabon_exfoliante_1.jpeg', NULL, 7, 3),
(9, 'Desodorante pieles sensibles', 400, 'Este desodorante sólido permite la natural y necesaria transpiración y la hace inodora gracias a sus ingredientes. Apropiado para todo tipo de pieles, incluidas las pieles sensibles. Desodorante, antimicrobiano y  emoliente', 'Aplicar una pequeña cantidad en axilas o pies y esparcir con la yema de los dedos. Si te depilaste, aplicar luego de algunas horas. En caso de irritación suspender su uso. Uso externo, evitar el contacto con los ojos y no ingerir.', 'Elaborada con manteca de cacao, manteca de karité, aceite de coco, aceite de almendras dulces, aceite de jojoba, vitamina E y aceite esencial de lavanda.', 0, 'desodorante.jpg', NULL, 2, 4),
(10, 'Desodorante pieles normales', 400, 'Este desodorante sólido permite la natural y necesaria transpiración y la hace inodora gracias a sus ingredientes. Esta opción contiene bicarbonato de sodio que es un ingrediente que se recomienda en pieles que tengan una transpiración más fuerte y necesitan de éste. En las pieles sensibles no se recomienda ya que suele ser fuerte y causar irritación. Producto natural vegano. No testeado en animales.', 'Aplicar una pequeña cantidad en axilas o pies y esparcir con la yema de los dedos. Si te depilaste, aplica luego de algunas horas. En caso de irritación suspender su uso. Uso externo, evitar el contacto con los ojos y no ingerir.', 'Elaborado a mano con manteca de cacao, aceite de coco, manteca de karité, arcilla blanca, óxido de zinc, extracto de salvia, cera de carnauba, cera de candelilla, aceites esenciales, vitamina E y bicarbonato de sodio.', 0, 'desodorante.jpg', NULL, 8, 4);