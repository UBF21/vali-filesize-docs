---
id: format-best-size
title: FormatBestSize
sidebar_label: FormatBestSize
---

# FormatBestSize

Convierte bytes a la unidad más apropiada y retorna una cadena formateada en una sola llamada. Equivalente a llamar `GetBestUnit` seguido de `FormatSize`.

## Firma

```csharp
string FormatBestSize(double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
```

## Parámetros

| Parámetro | Tipo | Defecto | Descripción |
|---|---|---|---|
| `bytes` | `double` | — | El tamaño en bytes. Debe ser ≥ 0. |
| `decimalPlaces` | `int` | `2` | Número de decimales. Debe ser ≥ 0. |
| `culture` | `CultureInfo?` | `null` | Cultura para el formato numérico. |
| `useIec` | `bool` | `false` | Cuando es `true`, usa sufijos IEC (KiB, MiB, …). |

## Retorna

Una cadena formateada como `"1.40 GB"`.

## Ejemplos

```csharp
var vfs = new ValiFileSize();

vfs.FormatBestSize(1_500_000_000);
// → "1.40 GB"

vfs.FormatBestSize(1_500_000_000, decimalPlaces: 3);
// → "1.397 GB"

vfs.FormatBestSize(1_500_000_000, useIec: true);
// → "1.40 GiB"

vfs.FormatBestSize(512);
// → "512.00 B"

vfs.FormatBestSize(2048);
// → "2.00 KB"
```
