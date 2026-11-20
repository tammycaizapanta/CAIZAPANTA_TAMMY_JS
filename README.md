# Innova ESPE 2026 - Sistema de gestión de entradas

Prototipo en **JavaScript nativo** para registrar la compra de entradas, calcular descuentos y controlar los cupos del evento tecnológico ficticio *Innova ESPE 2026*.

- **Autora:** Tammy Amarilis Caizapanta Muela
- **Universidad:** Universidad de las Fuerzas Armadas ESPE
- **Evaluación:** Segundo Parcial (curso 202651_36875)

## Estructura del proyecto

```
CAIZAPANTA_TAMMY_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Cómo ejecutarlo

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador (doble clic).
3. El menú aparece automáticamente al cargar la página (evento `onload`). Se muestra con `prompt()`, los mensajes con `alert()` y el registro en la consola (F12). Para reiniciar, recargar la página (F5).

No requiere instalar nada ni usa librerías externas. No se manipula el DOM desde JavaScript.

## Configuración (RF01)

| Concepto | Valor | Declaración |
|---|---|---|
| Precio por entrada | $20 | `const PRECIO_ENTRADA` |
| Cupos iniciales | 50 | `const CUPOS_INICIALES` |
| Descuento estudiantes | 30 % | `const DESCUENTO_ESTUDIANTE` |
| Descuento docentes | 15 % | `const DESCUENTO_DOCENTE` |
| Descuento público general | 0 % | `const DESCUENTO_GENERAL` |
| Máximo por compra | 5 | `const MAX_ENTRADAS_POR_COMPRA` |
| Cupos disponibles | cambia | `let cuposDisponibles` |
| Entradas vendidas | cambia | `let entradasVendidas` |
| Ingresos acumulados | cambia | `let ingresosAcumulados` |
| Compras realizadas | cambia | `let comprasRealizadas` |

Se usa `const` para los valores fijos y `let` para los que cambian con cada compra.

## Funcionalidades

| Req. | Descripción | Implementación |
|---|---|---|
| RF02 | Menú que se repite hasta elegir "Salir" | `do...while` + `switch` en `iniciarSistema()` |
| RF03 | Compra: nombre, tipo, cantidad, validaciones, cálculo y resumen | `comprarEntradas()` |
| RF04 | Consulta de cupos con mensaje según disponibilidad | `consultarCupos()` con `if / else if` |
| RF05 | Entradas vendidas, ingresos y número de compras | `consultarIngresos()` |
| RF06 | Resumen final y fin del programa | `mostrarResumenFinal()` |

### Validaciones de la compra

- El nombre no puede estar vacío.
- El tipo debe ser *estudiante*, *docente* o *público general* (también se aceptan 1, 2 o 3, con o sin tildes).
- La cantidad debe ser un **número entero entre 1 y 5**: se rechazan 0, 6, texto, decimales, negativos y campos vacíos.
- La cantidad no puede superar los cupos disponibles.
- Si la compra se rechaza, **cupos, ingresos y contadores no cambian**; solo se actualizan después de que todas las validaciones se cumplen.

### Mensajes de disponibilidad

| Cupos | Mensaje |
|---|---|
| Más de 10 | Cupos disponibles |
| Entre 1 y 10 | Últimos cupos disponibles |
| 0 | Evento agotado |

## Pruebas realizadas

| Escenario | Resultado esperado | Resultado |
|---|---|---|
| 3 entradas como estudiante | Total $42 | Correcto |
| 2 entradas como docente | Total $34 | Correcto |
| 1 entrada como público general | Total $20 | Correcto |
| 0 entradas | Rechazar compra | Correcto |
| 6 entradas | Rechazar compra | Correcto |
| Texto en lugar de cantidad | Rechazar compra | Correcto |
| Cantidad mayor a los cupos restantes | Rechazar compra | Correcto |
| Opción de menú inexistente | Mensaje de error | Correcto |
| Opción 4 | Finaliza el sistema | Correcto |

### Ejemplo de compra

```
Nombre: Carlos Pérez
Tipo de participante: Estudiante
Cantidad de entradas: 3

Subtotal: $60.00
Descuento (30 %): $18.00
Total a pagar: $42.00

Compra realizada exitosamente.

Cupos restantes: 47
```

## Nota

Si el usuario presiona **Cancelar** en el menú principal, el sistema lo interpreta como "Salir".
