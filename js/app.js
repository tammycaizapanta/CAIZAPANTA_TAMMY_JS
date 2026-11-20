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

function normalizarTexto(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function obtenerTipoParticipante(respuesta) {
  const tipo = normalizarTexto(respuesta);

  if (tipo === "estudiante" || tipo === "1") {
    return "Estudiante";
  } else if (tipo === "docente" || tipo === "2") {
    return "Docente";
  } else if (
    tipo === "publico general" ||
    tipo === "publico" ||
    tipo === "general" ||
    tipo === "3"
  ) {
    return "Público general";
  }
  return null;
}

function obtenerPorcentajeDescuento(tipo) {
  if (tipo === "Estudiante") {
    return DESCUENTO_ESTUDIANTE;
  } else if (tipo === "Docente") {
    return DESCUENTO_DOCENTE;
  }
  return DESCUENTO_GENERAL;
}

function leerCantidadEntera(texto) {
  if (texto === null) {
    return null;
  }
  const limpio = texto.trim();
  if (limpio === "") {
    return null;
  }
  const numero = Number(limpio);
  if (!Number.isInteger(numero)) {
    return null; // texto, decimales, NaN, Infinity...
  }
  return numero;
}

function rechazarCompra(motivo) {
  alert("Compra rechazada.\n" + motivo);
  console.log("Compra rechazada: " + motivo);
}

function comprarEntradas() {
  if (cuposDisponibles === 0) {
    rechazarCompra("Evento agotado: no quedan cupos disponibles.");
    return;
  }

  const respuestaNombre = prompt("Ingrese el nombre del comprador:");
  if (respuestaNombre === null || respuestaNombre.trim() === "") {
    rechazarCompra("El nombre del comprador es obligatorio.");
    return;
  }
  const nombre = respuestaNombre.trim();

  const respuestaTipo = prompt(
    "Tipo de participante:\n" +
      "1. Estudiante\n" +
      "2. Docente\n" +
      "3. Público general\n\n" +
      "Escriba el nombre o el número:"
  );
  if (respuestaTipo === null) {
    rechazarCompra("No se seleccionó el tipo de participante.");
    return;
  }
  const tipo = obtenerTipoParticipante(respuestaTipo);
  if (tipo === null) {
    rechazarCompra(
      "Tipo de participante no válido. Use estudiante, docente o público general."
    );
    return;
  }

  const respuestaCantidad = prompt(
    "Cantidad de entradas (entre 1 y " + MAX_ENTRADAS_POR_COMPRA + "):"
  );
  const cantidad = leerCantidadEntera(respuestaCantidad);

  if (cantidad === null) {
    rechazarCompra("La cantidad debe ser un número entero.");
    return;
  }
  if (cantidad < 1 || cantidad > MAX_ENTRADAS_POR_COMPRA) {
    rechazarCompra(
      "La cantidad debe estar entre 1 y " + MAX_ENTRADAS_POR_COMPRA + "."
    );
    return;
  }

  if (cantidad > cuposDisponibles) {
    rechazarCompra(
      "Cupos insuficientes. Solicitó " +
        cantidad +
        " y solo quedan " +
        cuposDisponibles +
        "."
    );
    return;
  }

  const porcentaje = obtenerPorcentajeDescuento(tipo);
  const subtotal = cantidad * PRECIO_ENTRADA;
  const descuento = (subtotal * porcentaje) / 100;
  const total = subtotal - descuento;

  cuposDisponibles -= cantidad;
  entradasVendidas += cantidad;
  ingresosAcumulados += total;
  comprasRealizadas++;

  const resumen =
    "RESUMEN DE COMPRA\n\n" +
    "Nombre: " + nombre + "\n" +
    "Tipo de participante: " + tipo + "\n" +
    "Cantidad de entradas: " + cantidad + "\n\n" +
    "Subtotal: $" + subtotal.toFixed(2) + "\n" +
    "Descuento (" + porcentaje + " %): $" + descuento.toFixed(2) + "\n" +
    "Total a pagar: $" + total.toFixed(2) + "\n\n" +
    "Compra realizada exitosamente.\n\n" +
    "Cupos restantes: " + cuposDisponibles;

  alert(resumen);
  console.log(resumen);
}

function consultarCupos() {
  let mensaje;

  if (cuposDisponibles > 10) {
    mensaje = "Cupos disponibles";
  } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
    mensaje = "Últimos cupos disponibles";
  } else {
    mensaje = "Evento agotado";
  }

  const texto =
    "Cupos disponibles: " + cuposDisponibles + " de " + CUPOS_INICIALES + "\n" + mensaje;
  alert(texto);
  console.log(texto);
}

function consultarIngresos() {
  const texto =
    "INGRESOS ACUMULADOS\n\n" +
    "Total de entradas vendidas: " + entradasVendidas + "\n" +
    "Total de ingresos acumulados: $" + ingresosAcumulados.toFixed(2) + "\n" +
    "Número de compras realizadas: " + comprasRealizadas;
  alert(texto);
  console.log(texto);
}

function mostrarResumenFinal() {
  const texto =
    "RESUMEN FINAL - INNOVA ESPE 2026\n\n" +
    "Compras realizadas: " + comprasRealizadas + "\n" +
    "Entradas vendidas: " + entradasVendidas + "\n" +
    "Ingresos acumulados: $" + ingresosAcumulados.toFixed(2) + "\n" +
    "Cupos restantes: " + cuposDisponibles + "\n\n" +
    "Gracias por usar el sistema.";
  alert(texto);
  console.log(texto);
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