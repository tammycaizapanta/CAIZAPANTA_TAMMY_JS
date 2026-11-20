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

function comprarEntradas() {
  console.log("Pendiente: compra de entradas");
}

function consultarCupos() {
  console.log("Pendiente: consulta de cupos");
}

function consultarIngresos() {
  console.log("Pendiente: consulta de ingresos");
}

function mostrarResumenFinal() {
  console.log("Pendiente: resumen final");
}

function iniciarSistema() {
  let opcion;

  do {
    const respuesta = prompt(
      "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Elija una opción:"
    );

    opcion = respuesta === null ? "4" : respuesta.trim();

    switch (opcion) {
      case "1":
        comprarEntradas();
        break;
      case "2":
        consultarCupos();
        break;
      case "3":
        consultarIngresos();
        break;
      case "4":
        mostrarResumenFinal();
        break;
      default:
        alert("Opción no válida. Ingrese un número del 1 al 4.");
        console.log("Opción de menú inexistente: " + opcion);
    }
  } while (opcion !== "4");

  console.log("Sistema finalizado.");
}