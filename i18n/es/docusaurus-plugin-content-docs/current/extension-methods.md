---
id: extension-methods
title: Métodos de Extensión
sidebar_label: Métodos de Extensión
---

# Métodos de Extensión

Vali-FileSize provee métodos de extensión sobre `double` y `long` para formateo de tamaños con mínimo boilerplate. Todos los métodos son stateless y usan un singleton compartido internamente.

## Espacio de nombres

```csharp
using ValiFileSize.Core.Extensions;
```

---

## ToFormattedSize

Formatea un valor como cadena legible de tamaño de archivo usando la unidad especificada.

```csharp
string ToFormattedSize(this double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
string ToFormattedSize(this long size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
```

### Ejemplos

```csharp
2048.0.ToFormattedSize(FileSizeUnit.Kilobytes);         // "2048.00 KB"
2048L.ToFormattedSize(FileSizeUnit.Kilobytes);           // "2048.00 KB"
1.5.ToFormattedSize(FileSizeUnit.Megabytes, 1);          // "1.5 MB"
```

---

## FormatBestSize

Selecciona la unidad más apropiada (tratando el valor como bytes) y retorna una cadena formateada.

```csharp
string FormatBestSize(this double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
string FormatBestSize(this long bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
```

### Ejemplos

```csharp
1_500_000_000.0.FormatBestSize();               // "1.40 GB"
1_500_000_000L.FormatBestSize();                 // "1.40 GB"
1_500_000_000.0.FormatBestSize(useIec: true);   // "1.40 GiB"
1_500_000_000.0.FormatBestSize(3);              // "1.397 GB"
```

---

## GetBestUnit

Selecciona la unidad más apropiada para el valor (tratado como bytes) y retorna el tamaño convertido y la unidad.

```csharp
(double size, FileSizeUnit unit) GetBestUnit(this double bytes, bool useIec = false)
(double size, FileSizeUnit unit) GetBestUnit(this long bytes, bool useIec = false)
```

### Ejemplos

```csharp
var (size, unit) = 1_500_000_000.0.GetBestUnit();
// size → ~1.40, unit → FileSizeUnit.Gigabytes

var (sizeIec, unitIec) = 1_500_000_000L.GetBestUnit(useIec: true);
// sizeIec → ~1.40, unitIec → FileSizeUnit.Gibibytes
```
