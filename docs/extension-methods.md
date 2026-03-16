---
id: extension-methods
title: Extension Methods
sidebar_position: 5
---

# Extension Methods

Vali-FileSize provides extension methods on `double` and `long` for minimal-boilerplate file size formatting. All methods are stateless and use a shared singleton internally.

## Namespace

```csharp
using ValiFileSize.Core.Extensions;
```

---

## ToFormattedSize

Formats a value as a human-readable file size string using the specified unit.

```csharp
string ToFormattedSize(this double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
string ToFormattedSize(this long size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
```

### Examples

```csharp
2048.0.ToFormattedSize(FileSizeUnit.Kilobytes);         // "2048.00 KB"
2048L.ToFormattedSize(FileSizeUnit.Kilobytes);           // "2048.00 KB"
1.5.ToFormattedSize(FileSizeUnit.Megabytes, 1);          // "1.5 MB"
```

---

## FormatBestSize

Selects the most appropriate unit (treating the value as bytes) and returns a formatted string.

```csharp
string FormatBestSize(this double bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
string FormatBestSize(this long bytes, int decimalPlaces = 2, CultureInfo? culture = null, bool useIec = false)
```

### Examples

```csharp
1_500_000_000.0.FormatBestSize();               // "1.40 GB"
1_500_000_000L.FormatBestSize();                 // "1.40 GB"
1_500_000_000.0.FormatBestSize(useIec: true);   // "1.40 GiB"
1_500_000_000.0.FormatBestSize(3);              // "1.397 GB"
```

---

## GetBestUnit

Selects the most appropriate unit for the value (treated as bytes) and returns the converted size and unit.

```csharp
(double size, FileSizeUnit unit) GetBestUnit(this double bytes, bool useIec = false)
(double size, FileSizeUnit unit) GetBestUnit(this long bytes, bool useIec = false)
```

### Examples

```csharp
var (size, unit) = 1_500_000_000.0.GetBestUnit();
// size → ~1.40, unit → FileSizeUnit.Gigabytes

var (sizeIec, unitIec) = 1_500_000_000L.GetBestUnit(useIec: true);
// sizeIec → ~1.40, unitIec → FileSizeUnit.Gibibytes
```
