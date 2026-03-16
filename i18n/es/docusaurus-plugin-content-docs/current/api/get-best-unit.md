---
id: get-best-unit
title: GetBestUnit
sidebar_label: GetBestUnit
---

# GetBestUnit

Selecciona la unidad más apropiada para el conteo de bytes dado y retorna el valor convertido.

## Firma

```csharp
(double size, FileSizeUnit unit) GetBestUnit(double bytes, bool useIec = false)
```

## Parámetros

| Parámetro | Tipo | Defecto | Descripción |
|---|---|---|---|
| `bytes` | `double` | — | El tamaño en bytes. Debe ser ≥ 0. |
| `useIec` | `bool` | `false` | Cuando es `true`, retorna unidades IEC (KiB, MiB, …). |

## Retorna

Una tupla `(double size, FileSizeUnit unit)` con el valor convertido y la unidad seleccionada.

## Excepciones

| Excepción | Condición |
|---|---|
| `ArgumentException` | `bytes` es negativo. |

## Ejemplos

```csharp
var vfs = new ValiFileSize();

var (size, unit) = vfs.GetBestUnit(1_500_000_000);
// size → ~1.40, unit → FileSizeUnit.Gigabytes

// IEC
var (sizeIec, unitIec) = vfs.GetBestUnit(1_500_000_000, useIec: true);
// sizeIec → ~1.40, unitIec → FileSizeUnit.Gibibytes

// Valor pequeño
var (sizeKb, unitKb) = vfs.GetBestUnit(2048);
// sizeKb → 2, unitKb → FileSizeUnit.Kilobytes
```

## Lógica de selección

El método elige la unidad más grande para la cual el valor convertido es ≥ 1. Para valores menores a 1 KB retorna `FileSizeUnit.Bytes`.
