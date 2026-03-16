---
id: introduction
title: Introducción
sidebar_label: Introducción
---

# Introducción

**Vali-FileSize** es una librería .NET ligera y sin dependencias externas para convertir y formatear tamaños de archivo en todas las unidades principales.

## ¿Por qué Vali-FileSize?

Trabajar con bytes crudos en aplicaciones reales es tedioso. Mostrar `1572864000` a un usuario no tiene sentido — `1.46 GB` sí. Vali-FileSize maneja esta conversión de forma limpia con una API mínima que se adapta a tus necesidades de formato.

## Capacidades principales

| Característica | Descripción |
|---|---|
| **Conversión de unidades** | Convierte entre cualquier par de unidades en una sola llamada |
| **Formato inteligente** | Cadenas legibles con control de precisión decimal |
| **Detección automática** | `GetBestUnit` selecciona la unidad más apropiada automáticamente |
| **Prefijos IEC binarios** | Soporte completo para KiB, MiB, GiB, TiB, PiB, EiB |
| **Métodos de extensión** | Extensiones sobre `double` y `long` para mínimo boilerplate |
| **Inyección de dependencias** | Interfaz `IValiFileSize` para registro limpio en DI |
| **Multi-framework** | netstandard2.0, netstandard2.1, net6.0, net7.0, net8.0, net9.0 |

## Unidades soportadas

### Unidades binarias tradicionales
`Bytes` · `Kilobytes (KB)` · `Megabytes (MB)` · `Gigabytes (GB)` · `Terabytes (TB)` · `Petabytes (PB)` · `Exabytes (EB)`

### Unidades binarias IEC
`Kibibytes (KiB)` · `Mebibytes (MiB)` · `Gibibytes (GiB)` · `Tebibytes (TiB)` · `Pebibytes (PiB)` · `Exbibytes (EiB)`

Todas las conversiones usan base binaria (1 unidad = 1 024 de la anterior).
