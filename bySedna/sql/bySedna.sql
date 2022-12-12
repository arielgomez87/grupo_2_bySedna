-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2022 a las 22:17:07
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
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Oferta'),
(2, 'Ultimos Lanzamientos');

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
(40, 'MZA07580.jpg', 67),
(41, 'MZA07588-600X900.jpg', 67),
(42, 'MZA07602.jpg', 67),
(43, 'MZA07581.jpg', 67),
(47, 'MZA07513.jpg', 68),
(48, 'MZA07517-600x900.jpg', 68),
(49, 'MZA07522-600x900.jpg', 68),
(80, 'MAZ04240-600x900.jpg', 69),
(81, 'MAZ04287-600x900.jpg', 69),
(82, 'MAZ04304-600x900.jpg', 69),
(83, 'MAZ04352.jpg', 69),
(84, 'MAZ04321.jpg', 69),
(85, 'MZA07693.jpg', 70),
(86, 'MZA07690.jpg', 70),
(87, 'MZA07686.jpg', 70),
(88, 'MZA07686.jpg', 70),
(89, 'MZA07704.jpg', 71),
(90, 'MZA07709-600x900.jpg', 71),
(91, 'MZA07705-600x900.jpg', 71),
(92, 'MZA07695-600x900.jpg', 72),
(93, 'MZA07696-600x900.jpg', 72),
(94, 'MZA07699-600x900.jpg', 72),
(95, 'MZA07702-600x900.jpg', 72),
(96, 'MZA07553.jpg', 73),
(97, 'MZA07557-600x900.jpg', 73),
(98, 'MZA07555.jpg', 73),
(99, 'MZA07721.jpg', 74),
(100, 'MZA07720-600x900.jpg', 74),
(101, 'MZA07725-600x900.jpg', 74),
(102, 'MZA07722-600x900.jpg', 74),
(103, 'MZA07657.jpg', 75),
(104, 'MZA07660.jpg', 75),
(105, 'MZA07655.jpg', 75),
(106, 'MZA07653.jpg', 75),
(107, 'MZA07614.jpg', 76),
(108, 'MZA07623-600x900.jpg', 76),
(109, 'MZA07615.jpg', 76);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(250) NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `discount`, `description`, `categoryId`) VALUES
(67, 'Agata ', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 1),
(68, 'Amatista', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 2),
(69, 'Artemisa Blanco', 5000, 5, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 2),
(70, 'Atenea Blanco', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 1),
(71, 'Atenea Negro', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 1),
(72, 'Atenea Nude', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 2),
(73, 'Esmeralda', 4600, 7, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 1),
(74, 'Gelene Avellana', 5000, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 2),
(75, 'Obsidiana', 4500, 10, '  donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci', 1),
(76, 'Pandora', 4500, 10, 'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci  ', 2);

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
(38, 1, 67),
(39, 2, 67),
(40, 3, 67),
(41, 5, 67),
(42, 2, 68),
(43, 3, 68),
(44, 4, 68),
(45, 3, 69),
(46, 4, 69),
(47, 5, 69),
(48, 1, 70),
(49, 2, 70),
(50, 3, 70),
(51, 4, 70),
(52, 2, 71),
(53, 3, 71),
(54, 4, 71),
(55, 1, 72),
(56, 2, 72),
(57, 3, 72),
(58, 4, 72),
(59, 2, 73),
(60, 3, 73),
(61, 4, 73),
(62, 5, 73),
(63, 2, 74),
(64, 3, 74),
(65, 4, 74),
(66, 5, 74),
(67, 1, 75),
(68, 2, 75),
(69, 3, 75),
(70, 4, 75),
(71, 5, 75),
(72, 2, 76),
(73, 3, 76),
(74, 4, 76),
(75, 5, 76);

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
(98, 'Ariel Gomez', 'avatar-1670682600657.jpg', 'cangallo 1234', '445566887', 'ariel@gmail.com', '$2a$10$i90WWkdY69.8SNfGy4ypWeXAskFEUGX5GPqHYrp56jzP3nz9V614K', 4, 1),
(99, 'Eliana Burgos', 'avatar-1670682634170.jpg', 'la lucila 1234', '5656461313', 'eliana@gmail.com', '$2a$10$3o/2JTIOjdFvl0uUAovr3ue5PGZd3H.rR2MFwnU2UA7/4mPRxQEYK', 2, 1),
(100, 'Nicolas Lomanto', 'avatar-1670682671541.jpg', 'San isidro 4565', '64654654165', 'nicolas@gmail.com', '$2a$10$VbknDbFlMsD.8Rac5GdwL.wdxdQ/LE.MnF8OQVBUhxON0D37/YdHW', 1, 1),
(101, 'Bob Esponja', 'avatarDefault.png', 'lavalle 464', '54654132165', 'bob@gmail.com', '$2a$10$iP8sLGUcSWx8kQ4b84G0c.SdsNJ96wpEoCSFmgjN.K/WNQsq91tQC', 8, 1),
(102, 'Pepa pig', 'avatar-1670682756657.jpg', 'calcuta 464', '646546546', 'pepa@gmail.com', '$2a$10$MrwpdWOb5OPsMBpzojsYAe4dpWDWiwNcT8HzUZo2Y8jopuAvZ4MEe', 10, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `CategoriaId` (`id`),
  ADD KEY `categoryId` (`categoryId`);

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
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT de la tabla `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`);

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`);

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
