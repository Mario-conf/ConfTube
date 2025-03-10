# ConfTube
A JavaScript version of Youtube's ConfTube, a live video conferencing tool. This project is a simplified version of the original ConfTube, and is intended for educational purposes only. It is not intended for commercial use. 


# Tabla de Casos de Prueba para `Autor`, `Libro` y `Biblioteca`

A continuación, se presenta la **tabla de casos de prueba** para las clases `Autor`, `Libro` y `Biblioteca`, utilizando técnicas de **particiones de equivalencia** y **valores límite**. Estas pruebas cubren los requisitos y validaciones definidos en el código.

---

## **Clase `Autor`**

| **Atributo**         | **Partición de Equivalencia**       | **Valores Límite**         | **Caso de Prueba**                                                                 | **Resultado Esperado**                                                                 |
|-----------------------|-------------------------------------|----------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **nombre**           | Válido (4-30 caracteres)           | 4, 30                     | `new Autor("Juan", "García", 1980, true)`                                         | Éxito                                                                                 |
|                       | Inválido (< 4 caracteres)          | 3                         | `new Autor("Ana", "García", 1980, true)`                                          | `IllegalArgumentException`: "Nombre debe tener entre 4 y 30 caracteres"               |
|                       | Inválido (> 30 caracteres)         | 31                        | `new Autor("Javier Javier Javier Javier Javier", "García", 1980, true)`           | `IllegalArgumentException`: "Nombre debe tener entre 4 y 30 caracteres"               |
|                       | Inválido (nulo)                    | `null`                    | `new Autor(null, "García", 1980, true)`                                           | `IllegalArgumentException`: "Nombre debe tener entre 4 y 30 caracteres"               |
| **apellidos**        | Válido (no nulo y no vacío)        | "García", "García López"  | `new Autor("Juan", "García López", 1980, true)`                                   | Éxito                                                                                 |
|                       | Inválido (nulo)                    | `null`                    | `new Autor("Juan", null, 1980, true)`                                             | `IllegalArgumentException`: "Apellidos no pueden ser nulos o vacíos"                  |
|                       | Inválido (vacío)                   | ""                        | `new Autor("Juan", "", 1980, true)`                                               | `IllegalArgumentException`: "Apellidos no pueden ser nulos o vacíos"                  |
| **añoNacimiento**    | Válido (> 1800)                    | 1801, 2023                | `new Autor("Juan", "García", 1980, true)`                                         | Éxito                                                                                 |
|                       | Inválido (<= 1800)                 | 1800, 1799                | `new Autor("Juan", "García", 1800, true)`                                         | `IllegalArgumentException`: "Año de nacimiento debe ser posterior a 1800"             |
| **andaluz**          | Válido (true/false)                | `true`, `false`           | `new Autor("Juan", "García", 1980, true)`                                         | Éxito                                                                                 |

---

## **Clase `Libro`**

| **Atributo**         | **Partición de Equivalencia**       | **Valores Límite**         | **Caso de Prueba**                                                                 | **Resultado Esperado**                                                                 |
|-----------------------|-------------------------------------|----------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **título**           | Válido (3-50 caracteres)           | 3, 50                     | `new Libro("Cien años de soledad", autor, 1967, "prosa")`                         | Éxito                                                                                 |
|                       | Inválido (< 3 caracteres)          | 2                         | `new Libro("La", autor, 1967, "prosa")`                                           | `IllegalArgumentException`: "Título debe tener entre 3 y 50 caracteres"               |
|                       | Inválido (> 50 caracteres)         | 51                        | `new Libro("Un título extremadamente largo que supera los 50 caracteres", autor, 1967, "prosa")` | `IllegalArgumentException`: "Título debe tener entre 3 y 50 caracteres"               |
|                       | Inválido (nulo)                    | `null`                    | `new Libro(null, autor, 1967, "prosa")`                                           | `IllegalArgumentException`: "Título debe tener entre 3 y 50 caracteres"               |
| **autor**            | Válido (no nulo)                   | Objeto `Autor` válido     | `new Libro("Cien años de soledad", autor, 1967, "prosa")`                         | Éxito                                                                                 |
|                       | Inválido (nulo)                    | `null`                    | `new Libro("Cien años de soledad", null, 1967, "prosa")`                          | `IllegalArgumentException`: "Autor no puede ser nulo"                                 |
| **añoPublicación**   | Válido (> 1800)                    | 1801, 2023                | `new Libro("Cien años de soledad", autor, 1967, "prosa")`                         | Éxito                                                                                 |
|                       | Inválido (<= 1800)                 | 1800, 1799                | `new Libro("Cien años de soledad", autor, 1800, "prosa")`                          | `IllegalArgumentException`: "Año publicación debe ser > 1800"                         |
| **tipo**             | Válido ("prosa" o "verso")         | "prosa", "verso"          | `new Libro("Cien años de soledad", autor, 1967, "prosa")`                         | Éxito                                                                                 |
|                       | Inválido (otro valor)              | "poesía", "teatro"        | `new Libro("Cien años de soledad", autor, 1967, "poesía")`                        | `IllegalArgumentException`: "Tipo debe ser prosa o verso"                             |

---

## **Resumen de Técnicas Utilizadas:**
1. **Particiones de Equivalencia:**
   - Dividir los datos en grupos que deben comportarse de manera similar.
   - Ejemplo: Para `añoNacimiento`, las particiones son `> 1800` (válido) y `<= 1800` (inválido).

2. **Valores Límite:**
   - Probar los bordes de las particiones.
   - Ejemplo: Para `título`, los valores límite son 3 (mínimo) y 50 (máximo).

3. **Casos Inválidos:**
   - Probar entradas que deben lanzar excepciones.
   - Ejemplo: `null` en `nombre` o `apellidos`.

Con esta tabla, puedes implementar pruebas unitarias en JUnit para validar todos los casos. ¡Espero que sea útil! 😊

