---
id: convert
title: Convert
sidebar_position: 1
---

# Convert

Converts a file size value from one unit to another.

## Signature

```csharp
double Convert(double size, FileSizeUnit fromUnit, FileSizeUnit toUnit)
```

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `size` | `double` | The size value to convert. Must be ≥ 0. |
| `fromUnit` | `FileSizeUnit` | The unit of the input value. |
| `toUnit` | `FileSizeUnit` | The desired output unit. |

## Returns

The converted value expressed in `toUnit`.

## Exceptions

| Exception | Condition |
|---|---|
| `ArgumentException` | `size` is negative. |
| `NotSupportedException` | An unrecognised unit is supplied. |

## Examples

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

## Internals

All values normalize to bytes internally, then divide by the target unit's multiplier (1 KB = 1 024 bytes).
