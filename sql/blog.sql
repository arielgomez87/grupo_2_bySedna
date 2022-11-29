-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2022 at 01:18 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--
CREATE DATABASE IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blog`;

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `comentario` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `id_usuario`, `id_post`, `comentario`) VALUES
(1, 8, 15, 'este es un comentario\r\n'),
(2, 8, 15, 'este es un segundo comentario'),
(3, 6, 15, 'este es un tercer comentario');

-- --------------------------------------------------------

--
-- Table structure for table `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_post` int(11) NOT NULL,
  `titulo` varchar(128) COLLATE utf8_spanish_ci NOT NULL,
  `detalle` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `foto_url` varchar(128) COLLATE utf8_spanish_ci NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `username` varchar(110) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `publicaciones`
--

INSERT INTO `publicaciones` (`id_post`, `titulo`, `detalle`, `foto_url`, `id_usuario`, `username`) VALUES
(15, 'batman', 'Este es el titanic', 'upload/vlcsnap-2022-11-03-16h08m41s886.png', 1, ''),
(16, 'Inception', 'Esta es una descripcion de prueba', 'upload/vlcsnap-2022-11-03-16h11m39s350.png', 1, ''),
(17, 'Doctor Stange', 'Esta es una descripcion de prueba', 'upload/vlcsnap-2022-11-03-15h56m37s463.png', 2, ''),
(18, '74', 'Este es el titanic', 'upload/vlcsnap-2022-11-03-16h11m39s350.png', 2, ''),
(19, 'aasdasd', 'wdasdasdaw', 'upload/20210119-IMG_1629.jpg', 23, ''),
(20, 'afxsfasfasd', 'qwdWFasDAWd', 'upload/20210119-IMG_1648.jpg', 23, ''),
(21, 'dasdAScdWAd', 'AWdASd', 'upload/20201227-IMG_1487.jpg', 23, ''),
(22, 'AAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAA', 'upload/', 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(64) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(128) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(110) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(256) COLLATE utf8_spanish_ci NOT NULL,
  `phone` int(10) NOT NULL,
  `password` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `dob` date DEFAULT NULL,
  `foto_url` varchar(512) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `nombre`, `apellido`, `email`, `phone`, `password`, `dob`, `foto_url`) VALUES
(1, 'Juanoski666', 'Nachito', 'La Venia', 'juan@mail.com', 1155558888, '1122', '2001-12-25', 'upload/'),
(2, 'Maleneitro4000', 'Malena', 'Fernandez', 'malena@mail.com', 1112345678, 'malena', '2000-02-22', 'upload/'),
(3, '', 'marcos', '', 'maite@mail.com', 0, '1234', NULL, 'upload/vlcsnap-2022-11-03-16h09m45s719.png'),
(4, 'manuelita', 'manue', 'lita', '', 1156561212, '', '0000-00-00', 'upload/'),
(5, 'fran', 'fran', 'gomez', '', 11445588, '', '0000-00-00', 'upload/'),
(6, 'fran', 'fran', 'gomez', '', 1144778899, '', '0000-00-00', 'upload/'),
(7, 'loman', 'nico', 'lomanto', '', 0, '123456789', '0000-00-00', 'upload/20210119-IMG_1652.jpg'),
(8, 'nico', 'nico', 'noico', '', 0, '11224455', '0000-00-00', 'upload/IMG_2327d (1 of 1).jpg'),
(9, 'marcelito', 'marce', 'lito', '', 0, '1122445566', '1990-06-02', 'upload/'),
(10, 'Manuxpiola22', 'Manuelita', 'Sastre', '', 0, '', '0000-00-00', 'upload/'),
(11, 'sebassxx', 'sebas', 'tian', '', 0, '1122447788', '0000-00-00', 'upload/'),
(12, 'pedrinator', 'pedrito', 'campox', '', 0, '1122336655', '0000-00-00', 'upload/'),
(13, 'nicolas', 'nicolas', 'nicolas', '', 1122556633, '', '0000-00-00', 'upload/'),
(14, 'aaaaaaaaaaaaaaa', 's', 'f', '', 2147483647, '', '0000-00-00', 'upload/'),
(15, 'gggggggggggggggggggg', 's', 'f', '', 2147483647, '', '2005-05-25', 'upload/'),
(16, '555555555555555', 's', 'f', '', 2147483647, '', '2005-05-25', 'upload/'),
(17, '555555555555555', 's', 'f', '', 2147483647, '122', '2005-05-25', 'upload/'),
(18, '6666666666666666', 's', 'f', '', 123456789, '1245', '2005-05-25', 'upload/'),
(19, '2222222222222222', 's', 'f', 'email@email.com', 123456789, '122', '2005-05-25', 'upload/'),
(20, 'monik', 'monica', 'sierra', 'moni@mail.com', 1155569926, '123', '1990-08-27', 'upload/IMG_2326.jpg'),
(21, 'cuenta', 'prueba', 'test', 'preuba@mail.cin', 12345678, '456', '2003-05-04', ''),
(22, 'nuevo', 'usuario', 'que', 'sellama@pedro.com', 2147483647, '123', '2005-05-05', 'upload/'),
(23, 'nicoloman', 'Nicolas', 'Lomanto', 'nicolomanto@gmail.com', 1155552222, '1122', '2001-07-15', 'upload/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indexes for table `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_post`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
