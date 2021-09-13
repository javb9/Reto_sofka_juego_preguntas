-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2021 a las 04:10:45
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_concurso`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `ID` int(11) NOT NULL,
  `CATEGORIA` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`ID`, `CATEGORIA`) VALUES
(5, 'ARTE'),
(2, 'BIOLOGIA'),
(1, 'DEPORTES'),
(3, 'GEOGRAFIA'),
(4, 'HISTORIA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `ID` int(11) NOT NULL,
  `USER` varchar(100) NOT NULL,
  `PREMIO` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`ID`, `USER`, `PREMIO`) VALUES
(5, 'dayaya', 1600);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel`
--

CREATE TABLE `nivel` (
  `ID` int(11) NOT NULL,
  `NIVEL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nivel`
--

INSERT INTO `nivel` (`ID`, `NIVEL`) VALUES
(4, 'alto'),
(2, 'bajo'),
(3, 'intermedio'),
(5, 'muy alto'),
(1, 'muy bajo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `ID` int(11) NOT NULL,
  `ID_CATEGORIA` int(11) NOT NULL,
  `ID_NIVEL` int(11) NOT NULL,
  `PREGUNTA` varchar(200) NOT NULL,
  `PREMIO` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`ID`, `ID_CATEGORIA`, `ID_NIVEL`, `PREGUNTA`, `PREMIO`) VALUES
(1, 1, 1, '¿ quien gano el mundial de 2018 ?', 100),
(3, 1, 3, '¿ Donde se fundo el futbol ?', 400),
(4, 3, 2, '¿ donde esta ubicada la torre eiffiel ?', 200),
(5, 1, 2, '¿ En que selección juega Cristiano Ronaldo ?', 200),
(6, 1, 4, '¿ En que año gano el Cúcuta deportivo el campeonato colombiano ?', 800),
(7, 1, 5, '¿en que año se fundo el estadio old trafford?', 1600),
(8, 2, 2, '¿Cuál de estas no es parte de la célula?', 200),
(9, 2, 1, '¿De que reino son las plantas?', 100),
(10, 2, 3, '¿Qué organismos tienen respiración anaerobia?', 400),
(11, 2, 4, '¿Qué produce la cadena de transferencia de electrones?', 800),
(12, 2, 5, '¿De qué otra forma se le conoce a él anabolismo?', 1600),
(13, 3, 1, '¿Capital de EE.UU?', 100),
(14, 3, 3, '¿Cuántos de departamentos tiene Colombia?', 400),
(15, 3, 4, '¿Dónde desemboca el río Amazonas?', 800),
(16, 3, 5, '¿Cuál es el desierto más grande del mundo?', 1600),
(17, 4, 1, '¿Quiénes ocasionaron la segunda guerra mundial?', 100),
(18, 4, 2, '¿en que año finalizo la segunda guerra mundial?', 200),
(19, 4, 3, '¿Cuál fuel el mayor imperio en la época imperial?', 400),
(20, 4, 4, '¿año en que se descubrió américa?', 800),
(21, 4, 5, '¿qué emperador romano fue asesinado por un grupo de senadores?', 1600),
(22, 5, 1, '¿Quién escribió 100 años de soledad?', 100),
(23, 5, 2, '¿Quién hizo las gordas de botero?', 200),
(24, 5, 3, '¿Dónde se encuentran las gordas de botero?', 400),
(25, 5, 4, '¿Quién pinto el grito?', 800),
(26, 5, 5, '¿Cual de las siguientes no es una técnica del arte renacentista?', 1600);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

CREATE TABLE `respuestas` (
  `ID` int(11) NOT NULL,
  `ID_PREGUNTA` int(11) NOT NULL,
  `ES_CORRECTA` tinyint(1) NOT NULL,
  `RESPUESTA` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `respuestas`
--

INSERT INTO `respuestas` (`ID`, `ID_PREGUNTA`, `ES_CORRECTA`, `RESPUESTA`) VALUES
(13, 4, 1, 'francia'),
(14, 4, 0, 'españa'),
(15, 4, 0, 'inglaterra'),
(16, 4, 0, 'Venezuela'),
(17, 3, 1, 'inglaterra'),
(18, 3, 0, 'colombia'),
(19, 3, 0, 'bolivia'),
(20, 3, 0, 'ecuador'),
(21, 1, 1, 'francia'),
(22, 1, 0, 'EE.UU'),
(23, 1, 0, 'haiti'),
(24, 1, 0, 'panama'),
(25, 5, 1, 'selección de futbol de Portugal'),
(26, 5, 0, 'selección de ajedrez de Portugal'),
(27, 5, 0, 'selección de baloncesto de Portugal'),
(28, 5, 0, 'selección de voleibol de Portugal'),
(29, 6, 1, '2006'),
(30, 6, 0, '2005'),
(31, 6, 0, '2001'),
(32, 6, 0, '2003'),
(33, 7, 1, '1910'),
(34, 7, 0, '1915'),
(35, 7, 0, '1950'),
(36, 7, 0, '1810'),
(37, 8, 1, 'corazón'),
(38, 8, 0, 'membrana celuar'),
(39, 8, 0, 'nucleo'),
(40, 8, 0, 'citoplasma'),
(41, 9, 1, 'reino vegetal'),
(42, 9, 0, 'reino animal'),
(43, 9, 0, 'reino protoctista'),
(44, 9, 0, 'reino fungi'),
(45, 10, 1, 'las bacterias'),
(46, 10, 0, 'los virus'),
(47, 10, 0, 'los peces'),
(48, 10, 0, 'los insectos'),
(49, 11, 1, '32 moléculas de ATP'),
(50, 11, 0, 'oxigeno'),
(51, 11, 0, 'residuos toxicos'),
(52, 11, 0, 'corriente'),
(53, 12, 1, 'Biosíntesis'),
(54, 12, 0, 'anabola'),
(55, 12, 0, 'anabolosis'),
(56, 12, 0, 'bioanabolismo'),
(57, 13, 1, 'Washington D.C'),
(58, 13, 0, 'Bogotá D.C'),
(59, 13, 0, 'Ottawa'),
(60, 13, 0, 'New york'),
(61, 14, 1, '32'),
(62, 14, 0, '30'),
(63, 14, 0, '5'),
(64, 14, 0, '80'),
(65, 15, 1, 'océano Atlántico.'),
(66, 15, 0, 'oceano pacifico'),
(67, 15, 0, 'mar muerto'),
(68, 15, 0, 'no desemboca '),
(69, 16, 1, 'la antartida'),
(70, 16, 0, 'el saahra'),
(71, 16, 0, 'artico'),
(72, 16, 0, 'arabia'),
(73, 17, 1, 'alemanes'),
(74, 17, 0, 'españoles'),
(75, 17, 0, 'ingleses'),
(76, 17, 0, 'colombianos'),
(77, 18, 1, '1945'),
(78, 18, 0, '1910'),
(79, 18, 0, '1925'),
(80, 18, 0, '1980'),
(81, 19, 1, 'imperio romano'),
(82, 19, 0, 'imperio griego'),
(83, 19, 0, 'imperio germanico'),
(84, 19, 0, 'imperio bizantino'),
(85, 20, 1, '1492'),
(86, 20, 0, '1500'),
(87, 20, 0, '1000'),
(88, 20, 0, '1210'),
(89, 21, 1, 'julio cesar'),
(90, 21, 0, 'carlo magno'),
(91, 21, 0, 'marco aurelio'),
(92, 21, 0, 'neron'),
(93, 22, 1, 'gabriel garcia marquez'),
(94, 22, 0, 'botero'),
(95, 22, 0, 'michael jackson'),
(96, 22, 0, 'juanes'),
(97, 23, 1, 'Juan fernando botero'),
(98, 23, 0, 'sebastian botero'),
(99, 23, 0, 'policarpa salabarrieta'),
(100, 23, 0, 'Iván duque'),
(101, 24, 1, 'Medellin'),
(102, 24, 0, 'cucuta'),
(103, 24, 0, 'bogota'),
(104, 24, 0, 'barranquilla'),
(105, 25, 1, 'Edvard Munch'),
(106, 25, 0, 'james rodriguez'),
(107, 25, 0, 'lenardo davincci'),
(108, 25, 0, 'patricia giraldo'),
(109, 26, 1, 'puntillismo'),
(110, 26, 0, 'oleo'),
(111, 26, 0, 'temple'),
(112, 26, 0, 'fresco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(200) NOT NULL,
  `USUARIO` varchar(200) NOT NULL,
  `CLAVE` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `NOMBRE`, `USUARIO`, `CLAVE`) VALUES
(15, 'javier becerra', 'javb99', '123'),
(16, 'dayana garzon', 'dayaya', '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `CATEGORIA` (`CATEGORIA`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `nivel`
--
ALTER TABLE `nivel`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NIVEL` (`NIVEL`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `PREGUNTA` (`PREGUNTA`),
  ADD KEY `FK_ID_CATEGORIA` (`ID_CATEGORIA`) USING BTREE,
  ADD KEY `FK_ID_NIVEL` (`ID_NIVEL`) USING BTREE;

--
-- Indices de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_ID_PREGUNTA` (`ID_PREGUNTA`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `USUARIO` (`USUARIO`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `nivel`
--
ALTER TABLE `nivel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `respuestas`
--
ALTER TABLE `respuestas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categorias` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `preguntas_ibfk_2` FOREIGN KEY (`ID_NIVEL`) REFERENCES `nivel` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `respuestas`
--
ALTER TABLE `respuestas`
  ADD CONSTRAINT `respuestas_ibfk_1` FOREIGN KEY (`ID_PREGUNTA`) REFERENCES `preguntas` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
