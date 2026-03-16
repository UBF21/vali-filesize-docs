---
id: format-size
title: FormatSize
sidebar_position: 2
---

# FormatSize

Formats a size value as a human-readable string using the specified unit.

## Signature

```csharp
string FormatSize(double size, FileSizeUnit unit, int decimalPlaces = 2, CultureInfo? culture = null)
```

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `size` | `double` | — | The size value to format. |
| `unit` | `FileSizeUnit` | — | The unit `size` is expressed in. |
| `decimalPlaces` | `int` | `2` | Number of decimal places. Must be ≥ 0. |
| `culture` | `CultureInfo?` | `null` | Culture for number formatting. Defaults to `CultureInfo.CurrentCulture`. |

## Returns

A formatted string such as `"1.23 MB"` or `"512.00 KiB"`.

## Exceptions

| Exception | Condition |
|---|---|
| `ArgumentOutOfRangeException` | `decimalPlaces` is negative. |
| `NotSupportedException` | An unrecognised unit is supplied. |

## Examples

```csharp
var vfs = new ValiFileSize();

vfs.FormatSize(1536, FileSizeUnit.Kilobytes);
// → "1536.00 KB"

vfs.FormatSize(1.5, FileSizeUnit.Megabytes, decimalPlaces: 1);
// → "1.5 MB"

// With culture
vfs.FormatSize(1.5, FileSizeUnit.Megabytes, culture: new CultureInfo("es-PE"));
// → "1,50 MB"

// IEC unit
vfs.FormatSize(512, FileSizeUnit.Mebibytes);
// → "512.00 MiB"
```
