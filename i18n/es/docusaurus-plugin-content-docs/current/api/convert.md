---
id: convert
title: Convert
sidebar_label: Convert
---

# Convert

Convierte un valor de tamaño de archivo de una unidad a otra.

## Firma

```csharp
double Convert(double size, FileSizeUnit fromUnit, FileSizeUnit toUnit)
```

## Parámetros

| Parámetro | Tipo | Descripción |
|---|---|---|
| `size` | `double` | El valor a convertir. Debe ser ≥ 0. |
| `fromUnit` | `FileSizeUnit` | La unidad del valor de entrada. |
| `toUnit` | `FileSizeUnit` | La unidad de salida deseada. |

## Retorna

El valor convertido expresado en `toUnit`.

## Excepciones

| Excepción | Condición |
|---|---|
| `ArgumentException` | `size` es negativo. |
| `NotSupportedException` | Se proporciona una unidad no reconocida. |

## Ejemplos

```csharp
var vfs = new ValiFileSize();

// Megabytes → Kilobytes
double kb = vfs.Convert(1.5, FileSizeUnit.Megabytes, FileSizeUnit.Kilobytes);
// → 1536

// Gigabytes → Bytes
double bytes = vfs.Convert(1, FileSizeUnit.Gigabytes, FileSizeUnit.Bytes);
// → 1_073_741_824

// Bytes → Megabytes
double mb = vfs.Convert(5_242_880, FileSizeUnit.Bytes, FileSizeUnit.Megabytes);
// → 5

// IEC: Gibibytes → Mebibytes
double mib = vfs.Convert(2, FileSizeUnit.Gibibytes, FileSizeUnit.Mebibytes);
// → 2048
```

## Funcionamiento interno

Todos los valores se normalizan a bytes internamente y luego se dividen por el multiplicador de la unidad destino (1 KB = 1 024 bytes).
