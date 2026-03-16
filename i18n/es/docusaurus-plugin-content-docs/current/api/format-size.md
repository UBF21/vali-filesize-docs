---
id: format-size
title: FormatSize
sidebar_label: FormatSize
---

# FormatSize

Formatea un valor de tamaño como una cadena legible usando la unidad especificada.

## Firma

```csharp
string FormatSize(double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
```

## Parámetros

| Parámetro | Tipo | Defecto | Descripción |
|---|---|---|---|
| `size` | `double` | — | El valor a formatear. |
| `unit` | `FileSizeUnit` | — | La unidad en que se expresa `size`. |
| `decimalPlaces` | `int` | `2` | Número de decimales. Debe ser ≥ 0. |
| `culture` | `CultureInfo?` | `null` | Cultura para el formato numérico. Por defecto `CultureInfo.CurrentCulture`. |

## Retorna

Una cadena formateada como `"1.23 MB"` o `"512.00 KiB"`.

## Excepciones

| Excepción | Condición |
|---|---|
| `ArgumentOutOfRangeException` | `decimalPlaces` es negativo. |
| `NotSupportedException` | Se proporciona una unidad no reconocida. |

## Ejemplos

```csharp
var vfs = new ValiFileSize();

vfs.FormatSize(1536, FileSizeUnit.Kilobytes);
// → "1536.00 KB"

vfs.FormatSize(1.5, FileSizeUnit.Megabytes, decimalPlaces: 1);
// → "1.5 MB"

// Con cultura
vfs.FormatSize(1.5, FileSizeUnit.Megabytes, culture: new CultureInfo("es-PE"));
// → "1,50 MB"

// Unidad IEC
vfs.FormatSize(512, FileSizeUnit.Mebibytes);
// → "512.00 MiB"
```
