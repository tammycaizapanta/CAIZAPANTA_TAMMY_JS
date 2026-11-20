"use strict";

const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;
const DESCUENTO_ESTUDIANTE = 30; // %
const DESCUENTO_DOCENTE = 15; // %
const DESCUENTO_GENERAL = 0; // %
const MAX_ENTRADAS_POR_COMPRA = 5;

let cuposDisponibles = CUPOS_INICIALES;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;