-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2022 a las 17:50:54
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bysedna`
--
CREATE DATABASE IF NOT EXISTS `bysedna` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bysedna`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `image`
--

INSERT INTO `image` (`id`, `name`, `productId`) VALUES
(2, 'foto 2', 2),
(3, 'foto 22', 2),
(4, 'foto nueva', 4),
(9, 'otra foto', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `discount`, `description`) VALUES
(1, 'lacquita', 54622, 10, 'aksndvoiansfv sdvasdvnosd vdsanhvoajsdbv adsjvnaojsdbvk  '),
(2, 'lacquita', 54622, 10, 'aksndvoiansfv sdvasdvnosd vdsanhvoajsdbv adsjvnaojsdbvk  '),
(3, 'GALENE AVELLANA', 2400, 10, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper luctus egestas tellus porta curabitur tristique platea, quisque pharetra risus leo vel habitasse. Habitant pharetra purus vitae magna dui pretium justo fringilla bibendum nam, fermentum u'),
(4, 'GALENE AVELLANA', 2400, 10, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper luctus egestas tellus porta curabitur tristique platea, quisque pharetra risus leo vel habitasse. Habitant pharetra purus vitae magna dui pretium justo fringilla bibendum nam, fermentum u'),
(8, 'AMATISTA', 12554, 10, 'afosdhvoaus ounhfoaisdhv oaisdhvouashv oavhaodhfvoa aosdhoahvoa'),
(10, 'AGATA', 25440, 15, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper luctus egestas tellus porta curabitur tristique platea, quisque pharetra risus leo vel habitasse. Habitant pharetra purus vitae magna dui pretium justo fringilla bibendum nam, fermentum u'),
(11, 'Bili', 3466, 15, 'lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus'),
(12, 'Elfrida', 3267, 10, 'vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non'),
(13, 'Babette', 3234, 15, 'consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc'),
(14, 'Lari', 4801, 11, 'amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu'),
(15, 'Catharine', 4118, 15, 'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum'),
(16, 'Peg', 4823, 10, 'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habit'),
(17, 'Devon', 4898, 11, 'vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in'),
(18, 'Cordie', 3982, 14, 'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat '),
(19, 'Inesita', 3021, 11, 'ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper'),
(20, 'Marcellina', 3282, 15, 'maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est qua'),
(21, 'Winnie', 3292, 14, 'sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus'),
(22, 'Roxane', 3113, 15, 'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer'),
(23, 'Billye', 3554, 11, 'augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit'),
(24, 'Lucita', 3350, 13, 'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagitt'),
(25, 'Goldie', 4638, 11, 'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est'),
(26, 'Tine', 4356, 11, 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae'),
(27, 'Alix', 3591, 13, 'odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus'),
(28, 'Hestia', 3212, 10, 'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet'),
(29, 'Dulcia', 4904, 14, 'tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat'),
(30, 'Ariela', 4140, 12, 'in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam'),
(31, 'Van', 3548, 10, 'pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper'),
(32, 'Caryl', 3348, 15, 'pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus'),
(33, 'Marcia', 4901, 13, 'turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non'),
(34, 'Aubry', 4688, 13, 'mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at'),
(35, 'Carlota', 4653, 11, 'nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero'),
(36, 'Genovera', 3359, 15, 'vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id'),
(37, 'Eadith', 4374, 15, 'pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut mas'),
(38, 'Evangelina', 3897, 13, 'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel'),
(39, 'Maribel', 3892, 11, 'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor'),
(40, 'Meryl', 4624, 11, 'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_size`
--

CREATE TABLE `product_size` (
  `id` int(11) NOT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_size`
--

INSERT INTO `product_size` (`id`, `sizeId`, `productId`) VALUES
(2, 2, 4),
(3, 5, 2),
(4, 5, 4),
(5, 3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `province`
--

CREATE TABLE `province` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `province`
--

INSERT INTO `province` (`id`, `name`) VALUES
(1, 'Buenos Aires'),
(2, 'Buenos Aires-GBA'),
(3, 'Capital Federal'),
(4, 'Catamarca'),
(5, 'Chaco'),
(6, 'Chubut'),
(7, 'Córdoba'),
(8, 'Corrientes'),
(9, 'Entre Ríos'),
(10, 'Formosa'),
(11, 'Jujuy'),
(12, 'La Pampa'),
(13, 'La Rioja'),
(14, 'Mendoza'),
(15, 'Misiones'),
(16, 'Neuquén'),
(17, 'Río Negro'),
(18, 'Salta'),
(19, 'San Juan'),
(20, 'San Luis'),
(21, 'Santa Cruz'),
(22, 'Santa Fe'),
(23, 'Santiago del Estero'),
(24, 'Tierra del Fuego'),
(25, 'Tucumán');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `name`) VALUES
(1, 'usuario'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `size`
--

CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `size`
--

INSERT INTO `size` (`id`, `name`) VALUES
(1, 'XS'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'XL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullName` varchar(45) NOT NULL,
  `imageUser` varchar(150) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(90) NOT NULL,
  `provinceId` int(11) NOT NULL,
  `rolId` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `fullName`, `imageUser`, `address`, `phoneNumber`, `email`, `password`, `provinceId`, `rolId`) VALUES
(57, 'Ariel Gomez', 'avatar-1669913258737.jpg', 'birkeroy 1588', '4455665499', 'arielgomez.87@gmail.com', '$2a$10$fLCvTlG0djnrXgo4Lw5LoOJkVWxax0H3HWQJs4fseozB0iupW2AxG', 7, 1),
(58, 'eliana', 'avatarDefault.png', 'cangallo 1558', '456656546546', 'eliana@gmail.com', '$2a$10$MB7IuxBcmF1.OmP5LxZ4Uu/6mrgnXwneZPtNuZSYH4lbWIj82QgJq', 1, 1),
(59, 'Nicolas', 'avatarDefault.png', 'lucila 1568', '4566897946', 'nicolas@gmail.com', '$2a$10$etTKpxhAnGLPTi1StfWZ4uT/tNhgThQapnlL/6cHVJqymHB4RjTKe', 1, 1),
(60, 'Lionel Messi', 'avatarDefault.png', 'Paris 2022', '45656543', 'messi@gmail.com', '$2a$10$B6Ba8n9bhOYQXlZRHXoUoe6mReS8AvltdfO12krAoIeP6OrHahbKi', 6, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk1` (`sizeId`),
  ADD KEY `productId` (`productId`);

--
-- Indices de la tabla `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rolId` (`rolId`),
  ADD KEY `provinceId` (`provinceId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT de la tabla `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `fk1` FOREIGN KEY (`sizeId`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `product_size_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`provinceId`) REFERENCES `province` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
