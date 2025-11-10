/*
-- Query: SHOW CREATE TABLE cidadania_ativa.postagem
-- Date: 2025-11-09 21:48
*/
INSERT INTO `` (`Table`,`Create Table`) VALUES ('postagem','CREATE TABLE `postagem` (\n  `id` bigint NOT NULL AUTO_INCREMENT,\n  `data_criacao` datetime(6) NOT NULL,\n  `descricao` text NOT NULL,\n  `imagem_base64` longtext,\n  `likes` int NOT NULL,\n  `local` varchar(255) NOT NULL,\n  `titulo` varchar(255) NOT NULL,\n  `postagemcol` varchar(45) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci');
