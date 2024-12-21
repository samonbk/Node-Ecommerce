-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 21, 2024 at 01:14 AM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommercedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `price` float NOT NULL,
  `brand` char(50) COLLATE utf8mb4_general_ci NOT NULL,
  `discount` float NOT NULL DEFAULT '0',
  `image1` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `image2` varchar(1000) COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `brand`, `discount`, `image1`, `image2`, `date`) VALUES
(1, 'Oppo findx 8pro 1TB', 1200, 'Oppo', 8, '1734490218921-1734404290402-images-color-b-3-mo.png', '1734490218927-1734404290403-oppo-find-x8-series-243916895-1x1.webp', '2024-12-18 02:50:18'),
(2, 'Samsung galaxy s 24 ultra ', 1600, 'Samsung', 5, '1734493473414-Samsung-Galaxy-S24-Ultra_A_featured-image-packshot-review-1024x691.jpg', '1734493473415-5nU4iy2D9GfMTt2psLRePG-1200-80.jpg', '2024-12-18 03:44:33'),
(3, 'samsung earbuds pro 3', 230, 'Samsung', 0, '1734493532847-images (3).jpeg', '1734493532847-1734450001257-T2PjfmxADV9UbhqhRJ5ME5.jpg', '2024-12-18 03:45:32'),
(4, 'JBL boom box 2024', 500, 'Jbl', 5, '1734493684938-Z_JBLBOOMBOX2B.avif', '1734493684939-JBL-Boombox-4-Expected-Specs.jpg', '2024-12-18 03:48:04'),
(5, 'Samsung air condisoner', 340, 'Samsung', 0, '1734494728980-AR-10CYECAWK1.webp', '1734494728985-images (1).jpeg', '2024-12-18 04:05:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(250) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'user',
  `dob` datetime NOT NULL,
  `image` varchar(1050) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `dob`, `image`, `date`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2b$10$0wh2TTOSA0k3ag7qlbqiC.LF53eR6WZaLR1wWyRZLuZ2HqaZaImyi', 'admin', '2005-02-01 00:00:00', '1734488008182-926904874.jpeg', '2024-12-18 02:13:28'),
(2, 'User1', 'user@gmail.com', '$2b$10$zjfvkhA34YiNHhx5zDUG5ONcviYuyknDMNuS1Zof5man3SCCIQCBa', 'user', '2000-09-07 00:00:00', '1734497270558-9886903.jpg', '2024-12-18 04:47:50'),
(5, 'Guest1', 'guest1@gmail.com', '$2b$10$4wbwosMe/TtA.f9HmlbjmeZvbp3zE7JQrzPeh1vAMFkQA9d68gboO', 'guest', '2000-06-06 00:00:00', '1734583026750-131177992.JPG', '2024-12-19 04:37:06'),
(6, 'Guest2', 'guest2@gmail.com', '$2b$10$NOaNBoGVb1RnLn6saG1zdOFjEGqDgAEUj11n2DhhJecjwv7yiv.FW', 'admin', '2001-09-17 00:00:00', '1734596282617-352536978.JPG', '2024-12-19 08:18:02');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
